const express = require("express");
const app = express();

app.use(express.urlencoded({ extended: true }));

app.post("/auth", (req, res) => {
  const streamKey = req.body.key;

  if (streamKey === "supersecret") {
    res.status(200).send();
    return;
  }

  res.status(403).send();
});

app.listen(8000, () => {
  console.log(`listening on port 8000`);
});
