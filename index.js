const express = require("express");
const bodyPaser = require("body-parser");
const userRoutes = require("./routes/users");

const app = express();
const PORT = 5000;

app.use(bodyPaser.json());

app.use("/users", userRoutes);

app.get("/", (req, res) => res.send("Hello from Homepage."));

app.listen(PORT, () =>
  console.log(`Server Running on port: http://localhost:${PORT}`)
);
