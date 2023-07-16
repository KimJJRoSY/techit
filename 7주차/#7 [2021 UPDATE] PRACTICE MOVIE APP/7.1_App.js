import { useState } from "react";

function App() {
  const [toDo, setToDo] = useState("");
  const [toDos, setToDos] = useState([]);
  const onChange = (event) => setToDo(event.target.value);
  const onSubmit = (event) => {
    event.preventDefault();
    if (toDo === "") {
      return;
    }
    // setToDo가 비어있는 str값으로 불려짐 ==> toDo도 비어있는 str값으로 변함
    setToDo("");
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
        <button>Add to do</button>
      </form>
      {/* hr: horizontal rule */}
      <hr />
      <ul>
        {toDos.map((item, index) => (
          // key는 고유의 값이어야됨
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;

// map은 자바스크립트 함수 ==map(value, index)
//  array.map() ==> array의 개수만큼 맵 함수 실행
//  ==> 괄호 안에 값/함수 넣으면 그 값으로 array에 있는 값들 바뀜
//  [1,2,3,4,5].map(() => ":)")
//  ==> [:),:),:),:),:),:)]
// [a,b,c,d].map((item) => item.toUpperCase()) ==>[A,B,C,D]
