const express = require("express");

const app = express();

const APP_STARTED_LOG = `
==== Ywaiter API 🚀💥 =====
PORT: 4332
ENVIRONMENT: ${process.env.NODE_ENV}
STARTED AT: ${new Date()}
Listening...
=======\n`;

app.get("/", (req, res) => {
  res.json({ message: "hii" });
});

app.listen(4332, (err) => {
  if (err) console.log("err", err);

  console.log(APP_STARTED_LOG);
});
