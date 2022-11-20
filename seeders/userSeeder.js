const db = require("../models")

db.User.create([
    {
        fullName: "Cesar Garcia",
        username: "madeup@email.com",
        password: "password"
    }
])

.then(() => {
    console.log("Success!");
    process.exit();
  })

  .catch((err) => {
    console.log("Failure!", err);
    process.exit();
  });
