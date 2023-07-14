import Button from "./button";
import styles from "./App.module.css";
function App() {
  return (
    <div>
      <h1 className={styles.title}>Welcome back!!!</h1>
      {/* 마우스를 button에 올려놓으면 사용할 수 있는 속성 알 수 있음  */}
      <Button text={"Continue"} />
    </div>
  );
}

export default App;
