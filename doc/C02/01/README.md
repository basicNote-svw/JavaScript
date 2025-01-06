# setTimeout 타이머주는 법
setTimeout()
---
- 자바스크립트 기본 함수 

- X초 후에 코드를 실행

<br>

> 사용법
```javascript
setTimeout(function(){ 실행할코드~ }, 기다릴시간);

```
- 시간은 ms 단위로 작성 (1ms : 1000분의 1초)

<br>

> ex
```javascript
setTimeout(function(){ 
  console.log('안녕')
}, 1000);
```
- 1초 후에 콘솔창에 '안녕' 출력


<br>

- 페이지 방문 5초 후에 \<div> 숨기기
> 방법1
```javascript
<style>
    .hidden {
        display: none;
    }
</style>

<div class="alert alert-danger">
  5초 이내 구매시 사은품 증정
</div>

<script>
  setTimeout(function(){
    document.getElementsByClassName('alert')[0].classList.add('hidden');
  }, 5000)
</script>
```

> 방법2
```javascript
<div class="alert alert-danger">
  5초 이내 구매시 사은품 증정
</div>

<script>
  setTimeout(function(){
    $('.alert').hide();
  }, 5000)
</script>
```
- \<script> 안에 적은 코드는 페이지 새로고침시 1회 실행

<br>
 
---
 
<br>

X초마다 코드를 실행하고 싶으면 setInterval()
---
- X초마다 코드를 실행하고 싶으면

    - setTimeout() 을 연달아서 여러개 사용

    - setInterval(function(){ 실행할코드~ }, 기다릴시간);

        - X초마다 안에 있는 코드를 실행

<br>

> ex
```javascript
setInterval(function(){ 
  console.log('안녕')
}, 1000);
```
- 1초 마다 콘솔창에 '안녕' 출력

<br>
 
### 💡 자바스크립트 문법 vs 브라우저 사용법
- 자바스크립트 프로그래밍 문법
 
    - var, let, const 
    
    - if 
    
    - function

- 웹브라우저 사용법
 
    - document.querySelector()

    - alert()

    - setTimeout()

    - addEventListener()

- 웹개발 잘하려면 자바스크립트 문법 + 웹브라우저 사용법 

    - 웹브라우저 사용법가지고 코드짜다가 

        - 코드 약간 줄이고 싶으면 function

        - 자료를 잠깐 보관하고 싶으면 var

        - 코드를 조건부로 실행하고 싶으면 if

<br>

---

<br>
 

콜백함수관련 짧은 테크닉
---
- 콜백함수 : 함수 파라미터 자리에 들어가는 함수

- addEventListener(), setTimeout() 등은 안에 콜백함수 요구함

- 콜백함수도 일종의 함수기 때문에 다른 곳에서 만든 함수를 넣어도 잘 작동

<br>

> ex
```javascript
setTimeout(함수, 1000);

function 함수(){ 
  console.log('안녕')
}
```
- 콜백함수자리에 있는 코드가 길다면

    - 다른 곳에서 함수로 만들어놓고 그 함수 이름만 콜백함수자리에 넣어도 OK

<br> 


### 💡 타이머 삭제
> javascript
```javascript
var 타이머 = setInterval(어쩌구);
```
- 변수에 저장 후 타이머 삭제하고 싶을 때 clearTimeout(타이머) 코드 실행

 
<br>
 