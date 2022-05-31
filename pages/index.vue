<template>
  <div id="todolist">
    <div class="header">
      <h2>Today's Tasks</h2>
    </div>

    <div class="dailytasks">
      <div class="tasksleft">
        3 Tasks Left:
      </div>
      <div class="tasklist">
        <div class="task" v-for="task in tasks" v-bind:key="task.id">
          <label>
            <input type="checkbox" :value="task.id" name="tasks" />
            <span class="checkbox"></span>
          </label>
          <div class="name">
            <p>{{task.name}}</p>
          </div>
        </div>
      </div>
    </div>

    <div class="footer">
      <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded">
        Add New Task
      </button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      "tasks": []
    }
  },
  // TODO:
  // 1. Get todolist on load.
  // 2. Set todo as completed on checkmark.
  // 3. Wire up add task button.
  // 4. Wire up to remove task
  // 5. On task click should be able to edit task
  mounted() {
    this.getTasks();
  },
  methods: {
    getTasks() {
      this.tasks = [
          {
          "id": 1,
          "name": "Finish the todolist!",
          "isCompleted": false
        },
        {
          "id": 2,
          "name": "Do the meeting.",
          "isCompleted": false
        },
        {
          "id": 3,
          "name": "Check emails.",
          "isCompleted": false
        }
      ]
    },
    addTask() {

    },
    deleteTask() {

    },
    updateTask() {

    }
  }
}
</script>

<style>
  @import url('https://fonts.googleapis.com/css2?family=Tiro+Devanagari+Marathi&display=swap');
  #todolist {
    padding: 0 10px;
  }

  .header {
    font-size: 32px;
    font-family: 'Tiro Devanagari Marathi', serif;
  }

  .tasklist {
    margin: 10px 0;
  }

  .tasksleft {
    font-size: 24px;
  }

  .task {
    border-radius: 3px;
    border: 1px solid #e2e2e2;
    padding: 5px;
    display: flex;
    justify-content: start;
  }

  .checkbox {

  }

  .name {

  }

  label {
    display: flex;
    margin-right: 10px;
    width: 30px;
    height: 30px;
    cursor: pointer;
  }

  input {
    position: absolute;
    transform: scale(0);
  }

  input:checked ~ .checkbox {
    transform: rotate(45deg);
    width: 20px;
    margin: -5px 7px 0 8px;
    border-color: #24c78e;
    border-width: 4px;
    border-top-color: transparent;
    border-left-color: transparent;
    border-radius: 0;
  }

  .checkbox {
    display: block;
    width: inherit;
    height: inherit;
    border: 2px solid #999;
    border-radius: 4px;
    transition: all 0.15s ease-in-out;
  }

  .footer {
    position: relative;
    bottom: 0;
    padding: 0;
    margin-bottom: 10px;
  }

  button {
    width: 100%;
  }

</style>
