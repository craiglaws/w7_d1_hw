import Vue from 'vue';

document.addEventListener('DOMContentLoaded', () => {
  new Vue({
    el: "#app",
    data: {
      list: [
        {name: "Hoover", priority: "low"},
        {name: "Fix the shower", priority: "high"},
      ],

      newToDo: "",
      priority: "",
      completed: []
    },

    methods: {

      addToList: function() {
        this.list.push({
          name: this.newToDo,

          priority: this.priority
        });
        this.newToDo = "";
        this.priority = ""
      },
      taskCompleted: function(index) {
        this.completed.push(this.list[index]);
        this.list.splice(index, 1);
      }

    }
  })
});
