require('dotenv').config();
const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { DynamoDBClient } = require("@aws-sdk/client-dynamodb");
const { DynamoDBDocumentClient, PutCommand, GetCommand } = require("@aws-sdk/lib-dynamodb");
const eventRoutes = require('../routes/eventRoutes');
const userRoutes = require('../routes/userRoutes');
const app = express();
const authGoogleRoutes = require("./routes/auth-google");
app.use("/auth", authGoogleRoutes);

app.use(cors({
  origin: 'http://localhost:3000',
  credentials: true,
}));
app.use(express.json());
app.use(cookieParser());

app.use('/users', userRoutes);
app.use('/events', eventRoutes);

const PORT = process.env.PORT || 3000;
const JWT_SECRET = process.env.JWT_SECRET;

const client = new DynamoDBClient({ region: process.env.AWS_REGION || "us-west-2" });
const ddbDocClient = DynamoDBDocumentClient.from(client);

function authenticateToken(req, res, next) {
  const token = req.cookies.token || req.headers.authorization?.split(' ')[1];
  if (!token) {
    return res.status(401).json({ error: 'Access denied. No token provided.' });
  }

  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    req.user = decoded;
    next();
  } catch (err) {
    return res.status(401).json({ error: 'Invalid or expired token.' });
  }
}

app.post('/register', async (req, res) => {
  const { userId, name, password } = req.body;
  if (!userId || !name || !password) {
    return res.status(400).json({ error: 'Missing fields' });
  }

  try {
    const getUser = await ddbDocClient.send(new GetCommand({
      TableName: "connect-mng-members", 
      Key: { userId }
    }));

    if (getUser.Item) {
      return res.status(400).json({ error: 'User already exists' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    await ddbDocClient.send(new PutCommand({
      TableName: "connect-mng-members",
      Item: { userId, name, password: hashedPassword }
    }));

    res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
    console.error('Register error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.post('/login', async (req, res) => {
  try {
    const { userId, password } = req.body;
    console.log('Login attempt:', { userId, password: password ? '[REDACTED]' : 'none' });
    
    if (!userId || !password) {
      console.log('Missing fields');
      return res.status(400).json({ error: 'Missing userId or password' });
    }
    
    const getUser = await ddbDocClient.send(new GetCommand({
      TableName: "connect-mng-members",
      Key: { userId }
    }));
    console.log('User from DB:', getUser.Item);
    
    if (!getUser.Item) {
      console.log('User not found');
      return res.status(401).json({ error: 'Invalid credentials' });
    }
    
    const validPassword = await bcrypt.compare(password, getUser.Item.password);
    console.log('Password valid:', validPassword);
    
    if (!validPassword) {
      console.log('Invalid password');
      return res.status(401).json({ error: 'Invalid credentials' });
    }
    
    if (!JWT_SECRET) {
      console.error('JWT_SECRET is not defined');
      return res.status(500).json({ error: 'Internal server error' });
    }
    
    let token;
    try {
      token = jwt.sign({ userId: getUser.Item.userId, name: getUser.Item.name }, JWT_SECRET, { expiresIn: '1h' });
    } catch (err) {
      console.error('JWT signing error:', err);
      return res.status(500).json({ error: 'Internal server error' });
    }
    
    res.cookie('token', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      maxAge: 3600000,
      sameSite: 'strict',
    });
    
    res.json({ message: 'Login successful' });
    
  } catch (error) {
    console.error('Login error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.get('/profile', authenticateToken, (req, res) => {
  res.json({ message: 'Protected profile data', user: req.user });
});

app.get('/', (req, res) => {
  res.send('Backend server is running!');
});

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));