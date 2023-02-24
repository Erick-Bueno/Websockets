<template>
  <input v-model="mens" type="text"/>
  <button @click="enviar">enviar</button>
  <div>{{ msg }}</div>
  <div v-for="i in lista">{{ i }}</div>
  <div>{{ cu }}</div>
</template>

<script>
  import {io} from 'socket.io-client'
  export default{
    data(){
      return{
        sockett:io("http://localhost:3307"),
        mens: '',
        msg:'',
        mensaa: '',
        cu:'',
        lista:[]
      }
    },
    methods:{
     enviar(){
      this.sockett.emit("mensagem", this.mens)

     },
    
    },
    created(){
      this.sockett
      this.sockett.on("enviando",  (msg) => {
        this.lista.push(msg)
      })
 
      
    }
  }
</script>

<style>

</style>
