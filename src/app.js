const express = require("express");
const app = express();

app.use("/test", (req, res) => {
  res.send("Hello from test");
});

app.use("/hello", (req, res) => {
  res.send("Hello from hello");
});

app.listen(3000, () => {
  console.log("Node is running on port 3000");
});
