# JS 배열

- 배열(Array): 복수의 데이터를 순서대로 담고 있는 자료구조
    - [] 대괄호 안에 배열의 요소(element)를 넣어줌
    var mbti =['INFP','ENTJ','INTJ'];

    배열의 요소에는 다양한 데이터 타입 가능 

    - 배열의 순서는 0부터 시작
    - 배열의 요소를 반환 받는 방법
    var mbti =['INFP','ENTJ','INTJ'];

    console.log(mbti[0]);        #배열이름[인덱스]
    >>INFP
    
    console.log(mbti.length);     #배열의 개수 구하는 메소드 == .length
    >>3

    -배열의 데이터 추가, 덮어쓰기
    var mbti =['INFP','ENTJ','INTJ'];

    //데이터 추가
    mbti[3]='ESFP'
    console.log(mbti.length);
    >>4
    console.log(mbti[3]);
    >>ESFP
    
    //데이터 덮어쓰기
    mbti[2]='ISTJ'
    console.log(mbti[2]);
    >>ISTJ
    
    - 배열은 객체!
        - 키 ==인덱스, 값==요소
//push(): 사용자가 전달한 데이터를 가져다 배열의 마지막위치에 값 추가 

var mbti =['INFP','ENTJ','INTJ'];
console.log(mbti.push('ESFP','ISTJ'));
>>5 //push 한 뒤 배열의 길이 반환 ==> 원본 배열의 변화 o

//스프레드 문법 : 원본 배열의 변화 없이 값 반환
var newMbti=[...mbti,'ESFP','ISTJ'];  
console.log(mbti);
>>(3)['INFP','ENTJ','INTJ']
console.log(newMbti);
>>(5)['INFP','ENTJ','INTJ','ESFP','ISTJ']

//pop(): 원본에서 마지막요소를 반환 후 제거

var mbti =['INFP','ENTJ','INTJ'];
console.log(mbti.pop());
	>>INTJ //배열의 마지막 요소가 빠져나옴
console.log(mbti);
	>>(2)['INFP','ENTJ'] 
    