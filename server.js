const express = require("express");
const bodyParser = require("body-parser")
const dotenv  = require("dotenv");
const connection  = require("./config/db");
const helmet =   require('helmet')
const morgan = require('morgan');
const mailgun = require("mailgun-js");

 connection()

//  Routes
const authRouter       = require('./routes/auth') ;
const userRouter       = require('./routes/user');
// const postRouter   = require('./routes/post');
// const productRouter    = require('./routes/product');


const app = express();
dotenv.config();
app.use(bodyParser.json())

// body parser
app.use(express.json());
// app.use(helmet());
// app.use(morgan());



// routes middleware
app.use('/api', authRouter)
app.use('/api', userRouter)




const port = process.env.PORT 
app.listen(port, () => {
    console.log(`🚀 Gateway Server Is Runnung on port  ${port}`)
})