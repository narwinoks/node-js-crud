require("dotenv").config();
const express = require("express");
const port = process.env.PORT || 4000;

// console.log(port);
// middleware static file
const usersRoutes = require("./routes/users");

const app = express();
app.use("/assets", express.static("public"));
const middlewareLogRquest = require("./middleware/logs");
const upload = require("./middleware/multer");

// custom middleware
app.use(middlewareLogRquest);
// json middleware
app.use(express.json());

app.use("/users", usersRoutes);
app.post("/upload", upload.single("photo"), (req, res) => {
  res.json({
    message: "upload berhasil",
  });
});

app.use((err, req, res, next) => {
  res.json({
    message: err.message,
  });
});

app.listen(port, () => {
  console.log(`App running on port ${port} `);
});
