import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./routes/Home";
import Detail from "./routes/Detail.js";

function App() {
  return (
    <Router>
      <Routes>
        {/* id를 입력하면 Detail을 보여줌 ==> ":" 얘를 꼭 써줘야됨 => 안 쓰면ex) /movie/id로 냅다 보냄*/}
        <Route path="/movie/:id" element={Detail}></Route>
        <Route path="/" element={Home}></Route>
      </Routes>
    </Router>
  );
}

export default App;

// React Router은 동적 url을 지원해주기도 함
//  동적 url이란?  url에 변수를 넣을 수 있음
