const express = require('express');
const app = express();
const tasks = require('./routes/tasks');
const connectDB = require('./db/connect');
require('dotenv').config()
const notFound = require('./middleware/not-found')
const errorHandlerMiddleware = require('./middleware/error-handler')

//--------------MIDDLEWARE'S-------------------------//
app.use(express.static('./public'))
app.use(express.json()); //middleware to get data //if we dont use this we dont have data in req.body
//---routes----//
app.use('/api/v1/tasks', tasks);
app.use(notFound)
app.use(errorHandlerMiddleware)

const port = 3000;

const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI) // to faciitate my DB and server `
        app.listen(port, console.log(`server is listening on port ${port}...`))
    } catch (error) {
        console.log(error);
    }
}
start();
