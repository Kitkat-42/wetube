import express from "express";
const PORT = 4000;
const app = express();

const routerLogger = (req, res, next) => {
  console.log("PATH", req.path);
  next();
};
const methodLogger = (req, res, next) => {
  console.log("METHOD", req.method);
  next();
};
const home = (req, res) => {
  console.log("I will respond.");
  res.send("hello");
};
const login = (req, res) => {
  return res.send("login");
};

app.use(methodLogger, routerLogger); // 위에 있어야 "/", "/login" 모두에 적용이 됨
app.get("/", home);
app.get("/login", login);

const handleListening = () =>
  console.log(`✅ Server listening on port http://localhost:${PORT} 🚀`);

app.listen(PORT, handleListening);
