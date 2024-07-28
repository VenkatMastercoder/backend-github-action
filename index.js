const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("Working - V2");
});

app.listen(3000);

