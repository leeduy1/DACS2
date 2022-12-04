require('dotenv').config()

const mongoose = require('mongoose');

const connectionStr = `mongodb+srv://${process.env.MONGO_USENAME}:${process.env.MONGO_PW}@cluster0.xksi0na.mongodb.net/doancs2?retryWrites=true&w=majority`

mongoose.connect(connectionStr, { useNewUrlParser: true }) 
.then(() => console.log("MongoDB connected")) 
.catch((err) => console.log(err));
