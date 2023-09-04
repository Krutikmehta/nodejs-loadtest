const express = require("express");

const app = express();
const port = process.env.PORT || 8080;
let i = 0;

app.get("/", (req, res) => {
  const data = {
    id: i++,
  };

  setTimeout(() => {
    res.send(data);
  }, 100);
});

app.listen(port, () => {
  console.log("Listening on " + port);
});
