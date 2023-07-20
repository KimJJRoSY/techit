import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./routes/Home";
import Detail from "./routes/Detail.js";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/movie/:id" element={Detail}></Route>
        <Route path="/" element={Home}></Route>
      </Routes>
    </Router>
  );
}

export default App;

// gh-page : 결과물을 깃허브 페이지에 업로드 할 수 있게 해주는 패키지
// package.json 파일에서 하라는대로 하셈
// 방법1
// 파일의 마지막 부분에서
//   ]
//   },
// "homepage": "https://깃허브 아이디.github.io/코드가 들어있는 깃허브 레포명/ "
// }
//  git remote -v 터미널에 치면 현재 레포 이름 알 수 있음

// 방법2
// "scripts": {
//   "start": "react-scripts start",
//   "build": "react-scripts build",
//   "test": "react-scripts test",
//   "eject": "react-scripts eject",
//   "deploy": "gh-pages -d build",
//   "predeploy": "npm run build"
// },
// deploy는 gh-pages를 실행시키고 "build"라는 디렉토리를 가져감
//  build를 하고 난 뒤에 deploy 해야되기 귀찮으니까 predeploy 만들어줌
// ==> deploy 실행시키면 predeploy가 자동으로 먼저 실행 되고 predeploy는 npm run build를 실행시킴

// 혹시 React router 6버전(react-router-dom 6 이상 버전)으로 진행하시는 분들 중 gh-pages로 배포 후,
// 빈 화면이 나온다면 Route컴포넌트의 path경로 앞에 process.env.PUBLIC_URL을 추가해서 수정해야 됨

// ```
// Route path={`${process.env.PUBLIC_URL}/`} element={< Home />}
// ```
