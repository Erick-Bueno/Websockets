import  Express  from "express";
import http from 'http'
import { Server } from "socket.io";
import router from "./router";
import cors from 'cors'

//servidor normal para api
const app = Express()

app.use(cors())

app.use(router)
//habilitando o express como framework caso va construir api
const httpp = http.createServer(app)

//servidor websocket
const io = new Server(httpp,{
    cors:{
        origin:["http://localhost:8080"]
    }
})
//socket representa o cliente conectado
io.on('connection', function(socket){
    console.log("um novo usuario se conectou", socket.id)
    //pegando mensagem enviada pelo cliente
    socket.on("mensagem", function(dado){
        io.emit("enviando", dado)
    })
})

export default httpp