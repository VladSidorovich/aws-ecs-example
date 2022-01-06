const express = require("express");
const app = express();
const port = process.env.port || 3000;

app.use(express.static("public"));

app.get("/test", (_, res) => res.send("test"));

app.listen(port, () => {
  console.log(`CV app listening at http://localhost:${port}`);
});
