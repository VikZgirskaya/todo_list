const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const port = 8000;

const router = require("./routes");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use("/api", router);

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
