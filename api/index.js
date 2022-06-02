const express = require('express');
const app = express();

app.get('/tasks', function(req, res) {
    let tasks = [
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
    ];

    res.send(tasks);
    return;
})

module.exports = app;