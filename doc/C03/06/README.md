# DOM & load 이벤트
DOM 
---
- Document Object Model 이라는 뜻

- 자바스크립트는 HTML 조작에 특화된 언어

- HTML과 자바스크립트는 다른 언어

    - 자바스크립트에선 \<p>\</p> 이런 html을 직접 해석하고 조작할 수 없음

<br>

> javascript
```js
<script>

  <p></p>.innerHTML = '안녕' (당연히 에러날듯)

</script>
```
- 자바스크립트는 \<p> 못알아들음

- 자바스크립트가 HTML을 조작할 수 있는 이유

    - 자바스크립트가 HTML 조작을 하기 위해선 HTML을 자바스크립트가 해석할 수 있는 문법으로 변환

    - HTML을 자바스크립트가 좋아하는 array 혹은 object 자료형에 담음

        - 실제로 브라우저는 HTML 페이지를 열어줄 때 HTML을 자바스크립트로 쉽게 찾고 바꾸기 위해 object와 비슷한 자료형에 담아줌

<br>

> ex
```html
<div style="color : red">안녕하세요</div>
```
- 브라우저는 이런 HTML을 발견하면 object 자료로 바꿔서 보관

    - var document = { } 변수를 하나 만들어서 거기 넣어둠

> javascript
```js
var document = {
  div1 : {
    style : {color : 'red'}
    innerHTML : '안녕하세요'
  }
}
```
- object 자료에 정리 해놓음

    - 원하는 자료를 출력하고 조작하고 할 수 있음

        - document.div1.innerHTML = '안녕' 작성시 HTML 조작 가능

    - 예제일 뿐, 실제 DOM과 생김새는 다름

- 위 변수를 Document Object Model이라고 함

- DOM 요약 : 자바스크립트가 HTML에 대한 정보들 (id, class, name, style, innerHTML 등)을 object 자료로 정리한 것

<br>

---

<br>

브라우저는 HTML 문서를 위에서부터 읽으며 DOM 생성
---
- 브라우저는 HTML문서를 위에서부터 차례로 읽어내려감

    - 읽을 때 마다 HTML을 발견하면 DOM에 추가

<br>

> html
```html
<script>
  document.getElementById('test').innerHTML = '안녕'
</script>

<p id="test">임시글자</p>
```
- 에러 발생 이유

    - 브라우저는 HTML을 위에서부터 한줄한줄 읽어내려감

    - \<p id="test"> 읽기 전, 자바스크립트로 id="test"인 요소를 DOM에서 찾고 바꾸라고 명령

        - p태그에 대한 DOM이 아직 생성되지 않음

- 자바스크립트는 DOM이 생성된 경우에만 HTML 변경 가능

<br>

---

<br>

자바스크립트 실행을 약간 나중으로 미루는 방법
---
- `이 코드는 HTML 전부 다 읽고 실행해달라`고 코드 작성 가능 

    - 위 예제같은 문제 발생 X

> javascript 
```js
$(document).ready(function(){ 실행할 코드 })
document.addEventListener('DOMContentLoaded', function() { 실행할 코드 }) 
```
- 둘 중 마음에 드는거 사용

    - `HTML을 다 읽어들였는지` 알려주는 이벤트리스너 

<br>

> html
```html
<script>
  document.addEventListener('DOMContentLoaded', function() { 
    document.getElementById('test').innerHTML = '안녕'
  })
</script>

<p id="test">임시글자</p>
```
- 자바스크립트 미루는 코드 안에 `밑에있는 <p id="test"> 변경해달라`고 코드 짜도 잘 동작

- 요즘은 자바스크립트를 \<body>태그 끝나기 전에 전부 작성

    - 자바스크립트 위치를 내가 정할 수 없을 경우에만 유용한 방법

<br>

---

<br>

load 이벤트리스너
---
- load 라는 이벤트리스너를 사용시 DOM 생성 및 이미지, css, js파일이 로드가 됐는지 체크가능

    - 이미지 같은게 로드되면 load라는 이벤트가 발생하기 때문

<br>

> javascript 
```js
셀렉터로찾은이미지.addEventListener('load', function(){
  //이미지 로드되면 실행할 코드 
})
```
- 외부 자바스크립트 파일에 작성하면

    - 그 js 파일보다 이미지가 더 먼저 로드되는 경우도 있으니 이벤트 발생체크를 못할 수도 있음

<br>

> javascript
```js
$(window).on('load', function(){
  //document 안의 이미지, js 파일 포함 전부 로드가 되었을 경우 실행할 코드 
});

window.addEventListener('load', function(){
  //document 안의 이미지, js 파일 포함 전부 로드가 되었을 경우 실행할 코드
})
```
- window에 붙여도 OK

    - document에 포함된 이미지, CSS파일 등 모든것이 로드가 되었는지 체크 

- .ready() : DOM 생성만 체크하는 함수

- load 이벤트리스너 : 모든 파일과 이미지의 로드상태를 체크

<br>

---

<br>

Virtual DOM
---
- 원래는 자바스크립트 변수가 바뀐 후 그걸 html에 반영하고 싶으면 

    - `변수값을 기존에 있던 html 안에 집어넣어달라`고 코드 작성해야함

- 요즘은 React, Vue 라이브러리를 쓰는 경우가 많음

    - 자바스크립트 변수가 바뀌면 그걸 html에 자동으로 반영해주는 라이브러리

        - html을 부드럽게 바꾸는게 많이 들어가야하면 사용

-  React, Vue는 html을 자주 바꾸기 때문에 html을 직접 바꾸지 않고 효율적으로 바꾸는 방법을 고민하다가 Virtual DOM 개발

    - html DOM의 복사본

    - html 변경사항이 일어나야하면 Virtual DOM에 먼저 반영하고 거기서 꼭 필요한 내용만 실제 DOM에 반영

        - 2010년대엔 DOM 조작 줄일 수 있어서 성능이 좋았음

- 요즘은 직접 DOM을 조작하는 식으로 코드짜놔도 성능저하 X

    - Svelte 라이브러리가 그런 식으로 동작
 
<br>
 

 