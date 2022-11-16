const express = require("express");
const port = process.env.PORT || 3001;
const cors = require("cors");

const app = express();
const html = `<html><body><div>Hello world</div></body></html>`;
app.use(cors());
app.get("/", (req, res) => res.type("html").send(html));

const db = require("./dbConfig.js");

const getAll = async () => {
  try {
    const all = await db.any("SELECT * FROM gk");
    return all;
  } catch (error) {
    return error;
  }
};

app.get("/test_db", async (req, res) => {
  const result = await getAll();
  res.json(result);
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
