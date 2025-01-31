# Switch 문법

- if else 문법 대신 쓸 수 있는 switch 문법

- if else로도 모든걸 할 수 있지만 좀 더 간단하게 적고 싶을 때 switch 사용

<br> 

switch 사용법
---
> js
```js
let 변수 = 2 + 2;

switch (변수){
  case 3 :
    alert('변수가 3이네요');
    break
  case 4 :
    alert('변수가 4네요');
    break
}
```
- switch의 소괄호엔 조건식이 아니라 검사해볼 변수 넣기

- `변수가 3일 때 코드 실행해달라`고 코드 작성시

    - case 문법 저렇게 사용

- 코드실행을 끝내고 싶으면 break 추가

    - switch 중괄호 탈출

<br>

> js
```js
let 변수 = 2 + 5;

switch (변수){
  case 3 :
    alert('변수가 3이네요');
    break
  case 4 :
    alert('변수가 4네요');
    break
  default : 
    alert('다 아니네')
}
```
- else 쓰고 싶으면 default : 추가

    - case에 해당되는게 하나도 없을 때 안에 있는 코드 실행

<br>

---

<br>

switch 사용 이유
---
- 변수값에 따른 조건분기를 만들고 싶을 때 조금 더 간편하게 적을 수 있기 때문

    - if else보다 괄호가 적음

<br>

> ex
```html
<div id="quiz">
  <h4>물에 빠지면 누구먼저 구할 것임?</h4>
  <button>와이프</button>
  <button>부모님</button>
  <button>키우던 개</button>
</div>

<script>
  document.querySelector('#quiz').addEventListener('click', function(e){
    switch (e.target.innerHTML){
      case '와이프':
        alert('와이프를 좋아하시네요');
        break
      case '부모님':
        alert('효자네요');
        break
      case '키우던 개':
        alert('역시 사람보단 동물이 더 낫죠');
        break
    }
  });

</script>
```
- 변수 하나의 값에 따라서 각각 다른 기능을 실행하고 싶을 때 사용

<br> 

 





