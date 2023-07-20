import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./routes/Home";
import Detail from "./routes/Detail.js";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/hello">
          <h1>Hello</h1>
        </Route>
        <Route path="/movie" element={<Detail />}></Route>
        <Route path="/" element={<Home />}></Route>
      </Routes>
    </Router>
  );
}

export default App;

// HashRouter : url이 보통의 웹사이트랑 조금 다르게 생김  ex) localhost:3000/#/movie
// BrowserRouter : url이 보통의 웹  사이트 처럼 생김 ex) localhost:3000/movie

//npm install react-router-dom@6

// 1) 더이상 Switch는 쓰이지 않는다(버젼 6이상).
// 이제 그역할은 Routes가 대신할 것이다 (공식문서 참조),
// 또한 Route 태그의 exact 속성도 더이상 쓰이지 않으며
// Routes가 알아서 최적의 경로배정을 해주기 때문에 Switch를 썼을 때의 고민을 말끔히 해결해 준다

// Link 는 브라우저 새로고침 없이도 유저를 다른 페이지로 이동시켜주는 컴포넌트임
