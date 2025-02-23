
const mongoose = require ('mongoose');


const connectDB = (url) => {
    return mongoose.connect(url, { //returning a promise
        useNewUrlParser: true,
        useCreateIndex: true,
        useFindAndModify: false,
        useUnifiedTopology:true,
    })
}

module.exports = connectDB;



