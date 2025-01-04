# function의 파라미터 문법

function에 사용가능한 파라미터 문법 
---
- 파라미터 = 구멍

- 함수내에 구멍을 뚫어줄 수 있음

> javascript
```javascript
function 알림창열기(구멍){
  document.getElementById('alert').style.display = 구멍;
}
```
- 구멍을 뚫는 법

    - () 소괄호 내에 글자 기재

    - {} 중괄호 내에도 같은 글자 기재

- 파라미터 사용 이유

    - → 구멍을 뚫으면 함수를 업그레이드해서 사용 가능

        - 함수를 쓸 때 소괄호 내에 문자나 숫자등을 입력해서 사용가능

<br>

> javascript
```javascript
function 알림창열기(구멍){
  document.getElementById('alert').style.display = 구멍;
}

알림창열기('안녕');
알림창열기('JS');
```
- 업그레이드 된 함수를 사용할 때

    - 소괄호 구멍자리에 내가 원하는 문자 입력 가능

    - 문자를 입력하면 {} 중괄호 내부의 '구멍'자리에 문자가 들어감

- 알림창열기('안녕') 실행시

    - `document.getElementById('alert').style.display = '안녕';` 코드 실행

 
<br>

> javascript
```javascript
function 알림창열기(구멍){
  document.getElementById('alert').style.display = 구멍;
}

알림창열기('none');     // 실행시 알림창 닫힘
알림창열기('block');    // 실행시 알림창 열림
```
- 알림창열기('block') 실행시

    - `document.getElementById('alert').style.display = 'block';` 코드 실행

        - 알림창 열림

- 알림창열기('none') 실행시

    - `document.getElementById('alert').style.display = 'none';` 코드 실행

        - 알림창 닫힘 

- 함수 2개나 만들 필요 없어짐

<br>

---

<br>

구멍 문법 사용처
--- 
- 비슷한 함수가 여러개 필요하면 하나가지고 구멍만 뚫어 사용

  - 함수 하나로 다양한 기능 실행 가능

<br>

---

<br>

파라미터 문법 이해를 위한 예 
---
> javascript
```javascript
function plus(){
  2 + 1
}
```
- 코드 작성시 어렵고 복잡한 수식을 함수로 축약해서 사용 가능


> 2 + 2 도 필요하고 2+ 3 도 필요하다면?
```javascript
function plus(){
  2 + 1
}

function plus2(){
  2 + 2
}

function plus3(){
  2 + 3
}
```
- 이렇게 작성해도 되나, 비슷한 함수들은 굳이 많이 만들 필요 X

  - 파라미터 문법 활용

> javascript
```javascript
function plus(구멍){
  2 + 구멍
}
```
- 가변적인 부분에 구멍뚫어주면 함수 하나로 해결 가능

  - plus(1) 하면 2 + 1

  - plus(2) 하면 2 + 2 


<br>

---

<br>

파라미터 문법 특징
---
- 파라미터 문법 세부사항 2개 존재

<br>

### 1. 파라미터는 자유롭게 작명가능
> javascript
```javascript
function plus(a){ 
  2 + a
}
```

<br>

### 2. 파라미터는 2개 이상 사용가능
> javascript
```javascript
function plus(a, b){ 
  a + b
}
plus(2, 5);
```
- 콤마로 구분

- 함수 사용할 때도 자료 2개 입력가능

<br>

#### 💡 함수

|함수|
|-|
|![이미지](./img/01.png)|


- 원래 수학에서 온 것

- 수학시간의 함수 vs 자바스크립트의 함수는 둘 다 같은 역할

  - 수학에서 함수는 `input 넣으면 규칙에 따라 output을 출력해주는 마법의 모자` 만들 때 사용
  
  - 자바스크립트도 마찬가지

<br>

> 수학시간
```
f(x) = x + 1 일때

f(3)은 뭘까요? -> 4
f(5)는 뭘까요? -> 6
```
- x를 구멍으로 바꾸면 자바스크립트랑 똑같음

<br>

