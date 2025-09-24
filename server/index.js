const express = require('express');
const app = express();
const PORT = 3001;
const cors = require('cors');

app.use(cors());


app.use(express.json());

// Import your events routes
const eventsRoutes = require('./routes/eventRoutes');
const blogRoutes = require('./routes/blogRoutes');

// Mount routes under /api/events
app.use('/events', eventsRoutes);
app.use('/blogs', blogRoutes);

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
