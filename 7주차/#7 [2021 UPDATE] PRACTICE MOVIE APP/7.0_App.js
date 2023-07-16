import { useState, useEffect } from "react";

function App() {
  const [toDo, setToDo] = useState("");
  const [toDos, setToDos] = useState([]);

  // setToDo는 toDo값을 수정하는 함수 , toDo 값은 input이랑 연결되어 있음=> toDo값 변경하면 input 값도 변경됨
  const onChange = (event) => setToDo(event.target.value);
  const onSubmit = (event) => {
    event.preventDefault();
    //  만약 toDO가 비어있다면 암것도 return 안함
    if (toDo === "") {
      return;
    }
    //input을 비워줌 => 엔터 누르면 썼던 input값 사라짐
    setToDo("");

    // 직전의 값 =previous value 받아오기
    // => 1. 괄호 안에서 직접적으로 수정,
    // => 2.괄호 안에 함수 넣어서 수정==첫번째 요소는 현재의 state => previous state==current state
    // '...' 없으면 배열 안의 배열임 =>ex)[5,[1,2]] but '...'있음==>ex)[5,1,2]
    setToDos((currentArray) => [toDo, ...currentArray]);
  };
  console.log("toDos", toDos);
  return (
    <div>
      <h1>My To Dos ({toDos.length})</h1>
      <form onSubmit={onSubmit}>
        <input
          onChange={onChange}
          value={toDo}
          type="text"
          placeholder="Write your to do"
        />
      </form>
      <button>Add to do</button>
    </div>
  );
}

export default App;
