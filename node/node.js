const express = require('express');
const  http =require('http')
const hostname='0.0.0.0';
const port=3000;
const app=express();
const server = http.createServer(app);
var mqtt = require('mqtt')
var client  = mqtt.connect('mqtt://127.0.0.1')  
let socketIO = require('socket.io');
let io = socketIO(server);
require('events').EventEmitter.defaultMaxListeners = 0

 var message= "";
client.on('connect',()=>{
  io.on('connection', (socket) => {
    console.log('user connected');

    socket.on('new-message', (message) => {

       console.log(message);
      client.publish('action',message.toString())

		
    });
});

})


client.on('connect',()=>{
  client.subscribe('temperature');
  client.subscribe('humidity');

})
client.on('message', (topic, message)=> {
    // message is Buffer
    if (topic.toString()=="temperature")
    {
       message=message.toString();

     io.on('connection', (socket) => {
      console.log('user connected');
  
  
          io.emit('new-message',message);
  
  
          
      
  });
       
    }
    
     if (topic.toString()=="humidity")
     {
     message1=message.toString();
     io.on('connection', (socket) => {
      console.log('user connected');
  
  
      
          io.emit('new-message1',message1);
  
          
      
  });
     }

  
    //client.end()
  })
/*
  io.on('connection', (socket) => {
    console.log('user connected');

    socket.on('new-message', (message) => {

        io.emit('new-message','33');

        io.emit('new-message1','24');

		
    });
});
*/

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
  });