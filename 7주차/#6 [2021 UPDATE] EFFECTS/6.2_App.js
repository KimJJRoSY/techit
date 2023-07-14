import { useState, useEffect } from "react";
function App() {
  const [counter, setValue] = useState(0);
  const [keyword, setKeyword] = useState("");
  const onClick = () => setValue((prev) => prev + 1);
  const onChange = (event) => setKeyword(event.target.value);
  console.log("I run all the time");

  //   빈 array 를 써주면 코드 한 번만 실행됨
  useEffect(() => {
    console.log("I run only once");
  }, []);
  //   keyword가 변화할 때 코드를 실행하고 싶다면 두번째 요소에 적어주면 됨
  useEffect(() => {
    console.log("I run when 'keyword' changes.");
    // 키워드가 비워있지 않고 키워드의 길이가 5보다 클 때! 콘솔창 실행
    if (keyword != "" && keyword.length > 5) {
      console.log("Search for", keyword);
    }
  }, [keyword]);
  useEffect(() => {
    console.log("I run when 'counter' changes");
  }, [counter]);
  useEffect(() => {
    console.log("I run when keyword & counter change");
  }, [keyword, counter]);
  return (
    <div>
      <input
        value={keyword}
        onChange={onChange}
        type="text"
        placeholder="Search Here"
      />
      <h1>{counter}</h1>
      <button onClick={onClick}>Click me</button>
    </div>
  );
}

export default App;
import { useState, useEffect } from "react";
function App() {
  const [counter, setValue] = useState(0);
  const [keyword, setKeyword] = useState("");
  const onClick = () => setValue((prev) => prev + 1);
  const onChange = (event) => setKeyword(event.target.value);
  console.log("I run all the time");

  //   빈 array 를 써주면 코드 한 번만 실행됨
  useEffect(() => {
    console.log("I run only once");
  }, []);
  //   keyword가 변화할 때 코드를 실행하고 싶다면 두번째 요소에 적어주면 됨
  useEffect(() => {
    console.log("I run when 'keyword' changes.");
    // 키워드가 비워있지 않고 키워드의 길이가 5보다 클 때! 콘솔창 실행
    if (keyword != "" && keyword.length > 5) {
      console.log("Search for", keyword);
    }
  }, [keyword]);
  useEffect(() => {
    console.log("I run when 'counter' changes");
  }, [counter]);
  useEffect(() => {
    console.log("I run when keyword & counter change");
  }, [keyword, counter]);
  return (
    <div>
      <input
        value={keyword}
        onChange={onChange}
        type="text"
        placeholder="Search Here"
      />
      <h1>{counter}</h1>
      <button onClick={onClick}>Click me</button>
    </div>
  );
}

export default App;
