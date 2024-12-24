const express = require('express');
const connectDB = require('./config/dbConn');
const errorHandler = require('./middleware/errorHandler');
const dotenv = require("dotenv").config();


connectDB();
const app = express();

const PORT = process.env.PORT;

app.use(express.json());
app.use('/tasks', require('./routes/tasks'));
app.use(errorHandler);

app.get('/', (req, res) => {
    res.send('Hello World!');
})


app.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}`);
})