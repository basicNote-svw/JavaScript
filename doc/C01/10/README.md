# input, change 이벤트와 and, or 연산자

input 이벤트와 change 이벤트
---
- \<input> 태그에서 발생하는 이벤트들

    - input이벤트와 change 이벤트 
    
        - \<input> 안에 뭔가 입력할 때 발생

- \<input> 값이 변경되었을 때 코드를 실행하고 싶으면 

    - input, change 이벤트리스너를 활용

<br>

> javascript
```javascript
document.getElementById('email').addEventListener('input', function(){
  console.log('안녕')
});
```
- \<input>에 입력된 값이 변경될 때 input 이벤트 발생

    - \<input>에 입력될 때마다 콘솔창에 안녕 출력

<br>

> javascript
```javascript
document.getElementById('email').addEventListener('change', function(){
  console.log('안녕')
});
```
- \<input>에 입력된 값이 변경되고 커서를 다른 곳에 찍으면 change 이벤트 발생

    - \<input>에 입력하고 커서를 다른데 찍으면 안녕 출력 

 
<br>

---

<br>

true/false 자료
---
- if 조건문 자리에는 등호가 아니라 true, false를 넣어야 잘 작동

> javascript
```javascript
if (true){
  console.log('진짜임')
}
```
- boolean 타입

    - true는 참, false는 거짓을 뜻하는 자료형

<br> 

### 💡 1 == 1 넣어도 if문 잘 작동하는 이유
- 1 == 1 쓰면 그 자리에 true 아니면 false 가 자동으로 남음

    - 콘솔창에 출력해보면 확인 가능

<br> 

### 💡 타입
- 자료가 무슨 형식을 가지고 있는지 구분하기 위한 용어

    - 123은 숫자타입 
    
    - '123'은 문자타입 
    
    - true는 boolean타입 
 

<br>

---

<br>

다른지 같은지 비교
---
> javascript
```javascript
console.log(2 != 1)
```
- 다름을 비교하고 싶으면 != 

    - 콘솔창 : true 출력

<br>

> == vs ===
```javascript
console.log(2 == '2')  //true
console.log(2 === '2')  //false
```
- == : 느슨한 비교

    - 자료의 타입변환을 알아서 해보고 동일하면 true라고 판정

- === : 엄격한 비교

    - 자료의 타입까지 동일해야 true라고 판정

<br>
 

if문 안에서 true, false 역할을 하는 자료
---
 
> if문 소괄호 안에서 false랑 같은 역할
```javascript
0
''
null
undefined
NaN
```

<br>
 
> if문 소괄호 안에서 true랑 같은 역할
```javascript
0제외 모든 숫자
'아무문자'
[]
{}
```

<br>

and/or 연산자
---
- if문 소괄호 안에 조건식을 여러개 동시에 입력하고 싶을 때

    - and/or 기호와 함께 작성


> && 기호
```javascript
if (1 == 1 && 2 == 2){
  console.log('안녕')
}
```
- 논리학의 and 역할

    - 왼쪽 오른쪽이 둘 다 true면 전체를 true로 변경

<br>

> ex
```javascript
if (1 == 1 && 2 == 3){
  console.log('안녕')
}
```
- 콘솔창 : 안녕 출력 X 

<br>

> || 기호
```javascript
if (1 == 1 || 2 == 3){
  console.log('안녕')
}
```
- 논리학의 or 역할

    - 왼쪽 오른쪽 둘 중 true가 적어도 1개 있으면 전체를 true로 변경

<br>

> ex
```javascript
if (1 == 4 || 2 == 3){
  console.log('안녕')
}
```
- 콘솔창 : 안녕 출력 X
 

<br>

