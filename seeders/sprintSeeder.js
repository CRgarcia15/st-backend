const db = require("../models")

db.Sprint.create([
    {
        sprintName: "First Project",
        dueDate: "2020/11/22",
        title: "First Sprint",
        description: "This is a test",
        completed: false
    },
])

.then(() => {
    console.log("Success!");
    process.exit();
  })

  .catch((err) => {
    console.log("Failure!", err);
    process.exit();
  });
