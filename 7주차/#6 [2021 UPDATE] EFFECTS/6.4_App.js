import { useState, useEffect } from "react";

function Hello() {
  // function byeFn() {
  //   console.log("Bye :< ");
  // }

  // function hiFn() {
  //   console.log("Hi :> ");
  //   return byeFn;
  // }
  // useEffect(hiFn, []);
  // // useEffect(() => {
  // //   console.log("created :>");
  // //   // Hello 가 실행 되지 않을 때 콘솔 창에서 destroyed 실행됨
  // //   return () => console.log("destroyed :<");
  // // }, []);

  // 사람들이 자주 쓰는 방법 => 거의 useEffect 안에 함수 넣음 아래의 코드 2개 같은 기능 코드임 작성
  useEffect(function () {
    console.log("hi");
    return function () {
      console.log("bye");
    };
  }, []);

  useEffect(() => {
    console.log("hi");
    return () => console.log("bye");
  }, []);

  return <h1>Hello</h1>;
}

function App() {
  const [showing, setShowing] = useState(false);
  // setShowing을 통해 이전 value를 받아 온 다음에 그 value의 반댓값을 return
  const onClick = () => setShowing((prev) => !prev);
  return (
    <div>
      {/* 자바스크립트 쓸 때 중괄호{} 써야됨 */}
      {showing ? <Hello /> : null}

      {/* 조건절 => 우리가 showing 한다면 Hide 글자 보여줌 아니면 Show 글자 보여줌 */}
      <button onClick={onClick}>{showing ? "Hide" : "Show"}</button>
    </div>
  );
}

export default App;
