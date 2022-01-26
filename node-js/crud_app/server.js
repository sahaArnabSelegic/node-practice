const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const bodyparser = require('body-parser');
const path = require('path');
const connectDB = require('./server/database/connection');

const app = express();


dotenv.config({path : 'config.env'})
const PORT = process.PORT || 8080

//log request 
app.use(morgan('tiny'));

// mongodb connection
connectDB();


// pass req to body parser
app.use(bodyparser.urlencoded({extended:true}))


//load routs
app.use('/',require('./server/routes/router'))

// Set view engine
app.set("view engine" , "ejs")
// set default folder for views
//app.set("views", path.resolve{__dirname , "views/ejs"})

// load asset
app.use('/CSS',express.static(path.resolve(__dirname, "assets/CSS")))
app.use('/IMG',express.static(path.resolve(__dirname, "assets/IMG")))
app.use('/JS',express.static(path.resolve(__dirname, "assets/JS")))




app.listen(PORT,()=>{
    console.log(`Server is running at http://localhost:${PORT}`)
});