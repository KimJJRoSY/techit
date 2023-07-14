import { useState } from "react";
function App() {
  // counter 시작 할 때 0 부터 시작
  const [counter, setValue] = useState(0);
  const onClick = () => setValue((prev) => prev + 1);
  console.log("render");
  return (
    <div>
      <h1>{counter}</h1>
      <button onClick={onClick}>Click me</button>
    </div>
  );
}

export default App;

// onClick 함수 이전의 counter에 1 더해서 리턴 prev == previous
// create react app과 vs code를 사용하고 있기 때문에 on으로 시작하는 이벤트 볼수 있음
