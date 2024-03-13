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
  }
}).mount('#app');