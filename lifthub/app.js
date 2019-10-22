const express = require("express")
const mongoose = require("mongoose")
const bodyParser = require("body-parser");
const path = require("path")
const http = require("http")
const app = express();
const mongodbUri = require("./config/keys").uri
const routes = require("./routes/routes")
mongoose.Promise = global.Promise;


// MIDDLEWARES
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}));

// Not yet connected to mongodb mlab
// mongoose.connect(mongodbUri, {useNewUrlParser:true}).then(()=>{
//     console.log("connected to MongoDB");
// }).catch(err =>{
//     console.log("Couldn't connect to db",err)
// })
 
// ROUTES
app.use(express.static(__dirname+'/dist/lifthub'))
app.use("/",express.static(__dirname+'/dist/lifthub'))
app.use("/apis", routes);


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
const port = normalizePort(process.env.PORT || '4300');
app.set('port', port);

const server = http.createServer(app);
server.listen(port, ()=>{
    console.log(`Running on port ${port}.....`);
});
