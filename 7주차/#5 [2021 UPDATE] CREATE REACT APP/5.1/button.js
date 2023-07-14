import PropTypes from "prop-types";
import styles from "./button.module.css";

// css 파일 연동하려면 css 파일 불러오고 클래스네임에 {임포트한이름.클래스네임}

function Button({ text }) {
  return <button className={styles.btn}>{text}</button>;
}

Button.propTypes = {
  text: PropTypes.string.isRequired,
};

// App.js에서 Button을 가져갈 수 있게 함
export default Button;

//  만약 global CSS style을 원하지 않는다면
