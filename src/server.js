import express from "express";

const PORT = 4000;

const app = express(); //express(): creates express application

const handleHome = (req, res) => {
  return res.send("<h1>I still love you.</h1>");
};
// potato: req, banana: res

const handleLogin = (req, res) => {
  return res.send({ message: "Login here." });
};

app.get("/", handleHome);
// I want "/" this page to do the () function
app.get("/login", handleLogin);

const handleListening = () =>
  console.log(`✅ Sever Listening on port http://localhost:${PORT} 🏂`);

app.listen(PORT, handleListening);
