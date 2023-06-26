# JS DOM

- dom : document object model
- Js로 원하는 html 요소를 조작하기 위해서는 어떠한 조건을 가지고 요소를 선택해야됨
    
    ⇒ id 사용
    

```jsx

var el = document.getElementById("brand-title")
console.log(el);
>> <h1 id ="brand-title">
			<a href="#"> 모두를 위한 코딩 강의 </a>
	 </h1>

console.log(el.innerHTML);
>><a href="#"> 모두를 위한 코딩 강의 </a>

console.log(el.innerText);
>> 모두를 위한 코딩 강의
//.innerHTML =>html의 태그만 제거함 나머지는 나옴

el.innerText = "안녕하세여:)"
>>html 요소 바뀜

var el = document.getElementsByClassName('sub-title')
//클래스값을 갖는 모든 요소를 가지고 오겠다 
console.log(el);

```
