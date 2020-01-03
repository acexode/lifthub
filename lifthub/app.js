const express = require("express"),
  passport = require("passport"),
  mongoose = require("mongoose"),
  bodyParser = require("body-parser"),
  http = require("http"),
  app = express(),    
  auth = require("./routes/auth"),
  space = require("./routes/space"),
  dotenv = require('dotenv').config();
  

  mongoose.Promise = global.Promise;

// uncomment to fill sample data into mongodb
//const seed = require('./model/seed')
console.log(process.env.MONGODBURI);
// MIDDLEWARES
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}));

//Not yet connected to mongodb mlab
mongoose.connect(process.env.MONGODBURI, {useNewUrlParser:true,useUnifiedTopology:true}).then(()=>{
    console.log("connected to MongoDB");
}).catch(err =>{
    console.log("Couldn't connect to db",err)
  })

  
  // ROUTES
  app.use(express.static(__dirname+'/dist/lifthub'))
  app.use("/",express.static(__dirname+'/dist/lifthub'))
  // initialize passport
  app.use(passport.initialize())
  app.use("/api", auth);
  app.use("/api", space);
  
  
 

const normalizePort = (val)=> {
    var port = parseInt(val, 10);
  
    if (isNaN(port)) {
      // named pipe
      return val;
    }
  
    if (port >= 0) {
      // port number
      return port;
    }
  
    return false;
  }
const port = normalizePort(process.env.PORT);
app.set('port', port);

const server = http.createServer(app);
server.listen(port, ()=>{
    console.log(`Running on port ${port}.....`);
});
