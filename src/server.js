import express from "express";
const PORT = 4000;
const app = express();

const logger = (req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
};
const privateMiddleware = (req, res, next) => {
  const url = req.url;
  if (url === "/protected") {
    return res.send("<h1>Not Allowed</h1>");
  }
  console.log("Allowed, you may continue.");
  next();
};
app.use(logger); // app.use: global middleware를 사용할 수 있게 해준다.
app.use(privateMiddleware);

const handleHome = (req, res) => {
  return res.send("I still love you");
};
const handleProtected = (req, res) => {
  return express.send("<h1>Not Allowed</h1>");
};

app.get("/", handleHome);
app.get("/protected", handleProtected);

const handleListening = () =>
  console.log(`Server listening on port http://localhost:${PORT} 🚀`);

app.listen(PORT, handleListening);
