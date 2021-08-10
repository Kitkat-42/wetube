import express from "express";
const PORT = 4000;
const app = express(); // express application(서버) 생성

const handleHome = (req, res) => {
  return res.send("I still love you"); // 페이지에 출력
  //   return res.end(); // 그냥 종료시켜버림
};

const handleLogin = (req, res) => {
  return res.send("Login here.");
};

app.get("/", handleHome); //root page( / ) 로 GET request가 왔을 때 어떻게 행동할 건지 함수를 정해주는 것
app.get("/login", handleLogin);
const handleListening = () =>
  console.log(`Server listening on port http://localhost:${PORT} 🚀`);

app.listen(PORT, handleListening); // 몇번 포트를 listening할 건지 정해준다.
// handleListening: 콜백함수.
