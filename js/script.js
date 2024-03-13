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
      ],

      // 4
      newTask: '',
      // 5
      errorMessage: '',

    }
  },

  // 3
  methods:{
    eliminaTask(indice){
      console.log(indice);
      // 3 splice, 1: elimina solo un solo elemento e restituisce l'array con gli elementi rimanenti
      this.todoList.splice(indice, 1);
    },
    // 7
    toggleTask(task){

      task.done = !task.done;
    },

    // 4
    addNewTask(){
      console.log('aggiungi');
      // 6
      if(this.newTask.length > 4){
        //  unshift: aggiunge all'inizio e non alla fine
        // tra le graffe perchè aggiungi un oggetto e non una stringa
        this.todoList.unshift({
          thingsToDo: this.newTask, 
          done: false
        });
      }else{
        this.errorMessage = 'Il testo deve avere più di 4 acartteri!'
      }

      // dopo l'invio rimane vuoto
      this.newTask = '';
    },
  }
}).mount('#app');