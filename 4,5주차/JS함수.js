# JS 함수

- 함수: 어떠한 데이터를 입력받아 일련의 과정을 거치고 결과값 반환하는 코드 덩어리
    - 작업의 묶음
    - 코드를 반복해서 작성함 ⇒ 효율적

//function 함수명(매개변수){함수코드}

//함수 선언
function multiply(a,b){
	return a*b;
}
console.log(mutiply(10,5));
>>50

var result = multiply(435,24);
console.log(result);
>>10440

//함수 표현식  
var multiply=function(a,b){
	return a*b;
};
console.log(multiply(10,5));
>>50
//함수의 이름은 변수로서 할당되고 값은 이름이 없는 함수로 정의내려서 함수명에서 매개변수로 주면 함수 작동함

var multiply=function clac (a,b){
	return a*b;
};
console.log(multiply(10,5));
>>50
console.log(clac(10,5));
>>Uncaught ReferenceError: clac is not defined


-변수

var a =10;
while (true){
	var a =1000;
	break;
}
console.log(a);
>>1000
//변수는 걍 전역변수 


//호이스팅
console.log(word);
word='happy';
>>word is not defined

console.log(word);
word='happy';
var word;
>>undefined

word='happy';
console.log(word);
var word;
>>happy
//나중에 쓰든 중간에 쓰든 변수 위치는 상관 없음 but출력할때는 해당 변수는 콘솔함수 전에 할당되어야함

-Let

//let: let으로 변수 선언하면 전역변수와 지역변수 나뉨 ==global
//let : 재할당 가능 but 중복 X

console.log(word);
word='happy';
console.log(word);
let word;
>>Error

let word;
console.log(word);
word='happy';
console.log(word);
>>undefined
>>happy

let a =10;
while (true){
	let a =1000;
	break;
}
console.log(a);
>>10

-const

//const로 선언한 변수는 값을 덮어 쓸수 없음 
//const : 재할당,중복 X
const b;
>>Error 발생 =>why? 초기값 할당되지 않음 

const b=2;
console.log(b);
>>2

const b=2;
console.log(b);
const b=3;
>>Error

consrt PI=3.14;
consrt TIME=어떤값;
consrt Time_date=3.14;

//const로 선언된 변수에 할당된 객체 
const student = {
	grade:1,
	class:3
};
student.grade=2;
console.log(student);
>>{grade:2, class:3}
	class:3
	grade:2

=============================
const student = {
	grade:1,
	class:3
};
student={
	num:20123,
	grade:2}
console.log(student);
>>Error ==>why?객체속성 변경 가능 but 재할당은 불가능 

SO,각각의 동작 방식이 다름 but var 추천 안함


-화살표 함수 

let plus =(a,b)=>{
	return a+b;
};

console.log(plus(2,3));
>>5

let plus=(a,b)=>a+b;
console.log(plus(2,3));
>>5
//return 없이도 반환 가능 

let print= word=>{
	console.log(word);
};
print('Hello!');
>>Hello!

//매개변수 없어도 1을 반환함 
let myfunc = () =>{
	return 1;
}

console.log(myfunc());
>>1