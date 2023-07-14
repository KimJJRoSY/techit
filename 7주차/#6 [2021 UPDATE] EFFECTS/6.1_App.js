import { useState, useEffect } from "react";
function App() {
  const [counter, setValue] = useState(0);
  const onClick = () => setValue((prev) => prev + 1);
  // state가 변경될 때 마다 계속 실행됨
  console.log("I run all the time");
  // 아래 코드는 한 번만 실행 => why? 함수 또 함수 있고 그 안에 콘솔 창 있어서
  // const onlyOnce = () => {
  //   console.log("I run only once.");
  // };

  useEffect(() => {
    console.log("Call the Api..");
  }, []);

  return (
    <div>
      <h1>{counter}</h1>
      <button onClick={onClick}>Click me</button>
    </div>
  );
}

export default App;

// useEffect : 2개의 agrment를 가지는 함수 ===useEffect( , )
// ==> 첫번째 요소는 딱 한 번만 실행하고 싶은 코드
