const express = require('express');
const app = express();
const cors = require('cors')
const port = 5000;
const connectDB = require('./config/db');
const taskRoutes = require('./routes/taskroutes');

app.use(cors())

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(taskRoutes);


connectDB();

app.listen(port, () => console.log(`Server is listening on port ${port}!`));