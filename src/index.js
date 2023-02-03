const express = require("express");
const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.contentType("application/json");
  res.send({
    message: "hello-world",
  });
});

app.get("/hi", (req, res) => {
  res.contentType("application/json");
  res.send({
    message: "hi",
  });
});

const items = ["Rick Sanches", "Marty Smith", "Summer Smith"];

app.get("/list", (req, res) => {
  res.contentType("application/json");
  res.send({ ...items });
});

app.get("/list/:id", (req, res) => {
  res.contentType("application/json");
  res.send({
    item: items[req.params.id],
  });
});

app.post("/list", (req, res) => {
  items.push(...Object.values(req.body));
  res.contentType("application/json");
  res.send({ ...items });
});

app.listen(3001);
