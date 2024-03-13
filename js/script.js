const { createApp } = Vue;

createApp({
  data(){
    return{
      // 1
      todoList: [
        {
          thingsToDo: 'fare la spesa',
          // 2
          done: true,
        },
        {
          thingsToDo: 'studiare Vue',
          // 2
          done: false,
        },
        {
          thingsToDo: 'andare in palestra',
          // 2
          done: true,
        },
      ]
    }
  },

  // 3
  methods:{
    eliminaTask(indice){
      console.log(indice);
      // 3 splice, 1: elimina solo un solo elemento e restituisce l'array con gli elementi rimanenti
      this.todoList.splice(indice, 1);
    }
  }
}).mount('#app');