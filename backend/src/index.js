const express = require("express");
const { MongoClient, ObjectId } = require("mongodb");
const cors = require("cors");
// const DB_URL = "mongodb://127.0.0.1:27017";
// const DB_NAME = "ocean-db-09-02-23";

const DB_URL =
  "mongodb+srv://admin:3zx5PwRX36fzSQRx@cluster-ocean.anwbvic.mongodb.net";
const DB_NAME = "ocean-db-09-02-23";

(async () => {
  const dbConn = await MongoClient.connect(DB_URL);

  console.log("DB Connection OK!");

  const db = dbConn.db(DB_NAME);

  const dbColl = db.collection("personagens");

  const app = express();
  app.use(cors());
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

  const personagens = [
    { nome: "Rick Sanches", idade: "85", dimensao: "C-137" },
    { nome: "Marty Smith", idade: "15", dimensao: "C-137" },
    { nome: "Summer Smith", idade: "16", dimensao: "C-137" },
  ];

  app.get("/list", async (req, res) => {
    res.contentType("application/json");
    const documents = await dbColl.find().toArray();
    res.send({ ...documents });
  });

  app.get("/list/:id", async (req, res) => {
    res.contentType("application/json");
    const id = req.params.id;

    const item = await dbColl.findOne({ _id: new ObjectId(id) });
    res.send(item);
  });

  app.post("/list", async (req, res) => {
    //items.push(...Object.values(req.body));
    res.contentType("application/json");
    const item = req.body;
    await dbColl.insertOne(item);
    res.send(item);
  });

  app.put("/list/:id", (req, res) => {
    const id = req.params.id;
    const body = req.body;

    console.log(id, body);

    dbColl.updateOne({ _id: new ObjectId(id) }, { $set: body });

    res.send("Deu bom!");
  });

  app.delete("/list/:id", async (req, res) => {
    const id = req.params.id;
    const result = await dbColl.deleteOne({ id });
    res.send(result);
  });

  const port = process.env.PORT || 3001;

  app.listen(port, () => {
    console.log(`Server listening on port: ${port}`);
  });
})();
