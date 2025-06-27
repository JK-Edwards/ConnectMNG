const express = require('express');
const app = express();
const PORT = 3001;

app.use(express.json());

// Import your events routes
const eventsRoutes = require('./routes/eventRoutes');

// Mount routes under /api/events
app.use('/events', eventsRoutes);

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
