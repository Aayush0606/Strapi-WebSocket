'use strict';
const jwt = require('jsonwebtoken');
module.exports = {
  /**
   * An asynchronous register function that runs before
   * your application is initialized.
   *
   * This gives you an opportunity to extend code.
   */
  register(/*{ strapi }*/) {},

  /**
   * An asynchronous bootstrap function that runs before
   * your application gets started.
   *
   * This gives you an opportunity to set up your data model,
   * run jobs, or perform some special logic.
   */
  bootstrap({ strapi }) {
    const { Server } = require("socket.io");
    const io=new Server(strapi.server.httpServer,{
      cors:{
        origin:"*",
        methods:["GET","POST","PUT","DELETE","PATCH"]
      }
    });
    io.on('connection',(socket)=>{
      try {
        const token=socket.handshake.auth.token;
        const decodedToken=jwt.verify(token,process.env.JWT_SECRET);
        const userId=decodedToken["id"];
        socket.on('message',async(msg)=>{
          await strapi.entityService.create('api::message.message',{
              data:
              {
                  content:msg,
                  user:userId
              }
          });
          socket.emit("message",msg);
        })
        socket.emit("connectio_success",`Connection Successfull for user ${userId}, start sending message!!`);
      } catch (error) {
        socket.emit("connectio_error","Auth failed, try again!!");
        socket.disconnect(true);
      }
    })
    strapi.io=io;
  },
};
