# JS event

- event: 정보창 뜨기, 창 줄어들기, 색상 변환, 클릭 등
- Js에서 event 정의 가능

```jsx
onclick="alert(click!);"
```

- event 종류
    - 폼 이벤트  : 어떤 값을 입력 했을 때 발생하는 이벤트
        - 사용자가 제출, 초기화
    - 마우스 이벤트
        - 클릭, 더블클릭, 마우스 이동
    - 키보드 이벤트
        - Keydown :어떤 키를 눌러도 발생하는 이벤트
        - Keypress:문자에 대한 키만 눌렀을 때 작동
        - Keyup: 어떠한 키를 놨을 때
    - 등등
    - On + 이벤트  타입
    
- 이벤트 핸들러

```jsx

1.작업을 희망하는 element를 가져온다 

var el = document.getElementById('brand-title');

2.어떤 작업을 했을 때 이벤트 타입을 넣어줘야됨 (type, 함수)

var myfunc=function(){
	alert('addEventListener');
};

el.addEventListener("click",myfunc);
//el이라는 요소에 대해서 addEventListener를 추가할 건데 click이라는 이벤트 타입에 대해서 myfunc이라는 함수를 실행해 

```
