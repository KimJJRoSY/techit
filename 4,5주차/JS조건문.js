# JS 조건문

- 제어문(control flow)
    - 조건문
    - 반복문

- 조건문
    - 1.If …else문
//if(조건식){조건 실행시 발생하는 코드}else{if가 아닐때 발생하는 코드}

var a = 5;
if(a>2){
	console.log('a>2');
}else{
	console.log('a<=2');
}
>> a>2

var a = 2;
if(a>2){
	console.log('a>2');
}else{
	console.log('a<=2');
}
>> a<=2

    -2.If …else if …else문

//if(조건식){조건 실행시 발생하는 코드}else if {if가 아닐때 새로운 조건발생하는 코드}

var a = 0;
if(a>2){
	console.log('a>2');
}else if (a==2){
	console.log('a==2')
}else if(a==0){
	console.log('a==0')
}else if(a<2){
	console.log('a<2')
}
//else {
	console.log('a<=2');
}//==> 필수 아님
>> a==0

//if 문은 순차적으로 조건식을 평가하기 때문에 먼저 트루인게 나오면 뒤에 있는 조건식 평가 안함

    -3.Switch문

//switch
var mbti= 'INFP';
var val;

switch(mbti){
	case 'INFP':
		val='INFP';
	case 'ENFP':
		val='ENFP';
	case 'ISTJ':
		val='ISTJ';
	default: 
		val='유효한 값이 아닙니다.'     //모든 case를 만족하지 못했을 때
}

console.log(val);
>>유효한 값이 아닙니다.
//break 문 실행하지 않으면 앞에 있는 조건식 만족해도 마지막 default 조건이 출력됨 

switch(mbti){
	case 'INFP':
		val='INFP'
		break;
	case 'ENFP':
		val='ENFP'
		break;
	case 'ISTJ':
		val='ISTJ'
		break;
	default: 
		val='유효한 값이 아닙니다.'
}