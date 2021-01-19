const express = require("express");
const app = express();
const port = 5000;

const mongoose = require("mongoose");
const { User } = require("./models/User");

// application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));
// application/json
app.use(express.json());

mongoose
  .connect(
    "mongodb+srv://yyhun1200:yy1200@boiler-plate.dyx0k.mongodb.net/boiler-plate?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false,
    }
  )
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log(err));

app.get("/", (reg, res) => res.send("Hello World!"));

app.post("/register", (req, res) => {
  // 회원 가입 할때 필요한 정보들을 clinet에서 가져오면
  // 그것들을 데이터베이스에 넣어준다
  const user = new User(req.body);
  user.save((err, userInfo) => {
    if (err) return res.json({ success: false, err });
    return res.status(200).json({
      success: true,
    });
  });
});
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
