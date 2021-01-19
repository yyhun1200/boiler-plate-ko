const express = require("express");
const app = express();
const port = 5000;
const mongoose = require("mongoose");
mongoose
  .connect(
    "mongodb+srv://yyhun1200:yy1200@boiler-plate.dyx0k.mongodb.net/boiler-plate?retryWrites=true&w=majority",
    {
      userNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false,
    }
  )
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log(err));

app.get("/", (reg, res) => res.send("Hello World!"));
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
