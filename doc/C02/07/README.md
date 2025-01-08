# 이벤트 버블링과 이벤트관련 함수들

모달창 배경을 누르면 닫히는 기능
---
- 모달창의 검은 배경을 누르면 모달창이 닫히는 기능 추가

<br>

> html
```html
<div class="black-bg">
  <div class="white-bg">
    모달창 내용
  </div>
</div>
```

<br>

> 모달창을 show-modal 클래스명 넣어서 오픈했다면 
```js
document.querySelector('.black-bg').addEventListener('click', function(){
  document.querySelector('.black-bg').classList.remove('show-modal');
})
```
- 검은배경, 흰배경, input, 글자 등 모달창 내부의 모든걸 눌러도 다 닫힘

<br>

---

<br>

이벤트 버블링
---
- 어떤 HTML 태그에 이벤트가 발생하면 그의 모든 상위요소까지 이벤트가 실행되는 현상

    - ex) click 이벤트

        - HTML 태그에 클릭이 발생하면 그의 모든 상위요소까지 자동으로 클릭됨 

<br>

```html
<div>
  <div>
    <p>안녕</p>
  </div>
</div>
```
- p태그 안녕 클릭하면 브라우저는 사용자가 클릭을 총 3번 했다고 인지

    - p + 그 위의 div + 그 위의 div

<br>

> 위에서 작성한 `검은배경 누르면 모달창 닫아달라`는 코드
```html
<div class="black-bg"> (← 이거 누르면 모달창 닫으라고 코드짰음)
  <div class="white-bg">
    모달창 내용
  </div>
</div>
```
- \<div class="white-bg"> 클릭

    - 이벤트 버블링 때문에 \<div class="black-bg"> 도 클릭한 것

        - 거기 붙어있던 이벤트리스너가 동작해서 모달창 닫아줌

<br>

---

<br>

이벤트리스너 안에서 쓰는 이벤트 함수들 
---
> 이벤트 버블링 해결시 자주 사용하는 이벤트 관련 함수들
```js
document.querySelector('.black-bg').addEventListener('click', function(e){
  e.target;
  e.currentTarget;
  e.preventDefault();
  e.stopPropagation();
})
```
- 이벤트리스너의 콜백함수에 파라미터 아무거나 추가하면  이벤트관련 함수들 사용 가능

    - 파라미터 이름은 아무렇게나 작명
    
        - 보통 e 라고 함

- e.target : 실제 클릭한 요소 알려줌 (이벤트 발생한 곳)

    - 이벤트 버블링 발생시 사용자가 실제로 클릭한 요소는 이 문법으로 찾을 수 있음

- e.currentTarget : 지금 이벤트리스너가 달린 곳 알려줌 (this라고 써도 똑같음)

- e.preventDefault() 실행하면 이벤트 기본 동작을 막아줌

- e.stopPropagation() 실행하면 내 상위요소로의 이벤트 버블링을 중단해줌

<br>

---

<br>

모달창 닫기 버그 해결
---
> 해결 방법
```js
document.querySelector('.black-bg').addEventListener('click', function(e){
   지금 실제로 클릭한게 검은 배경일 때만 닫아라
})
```
- 한글먼저 짜놓고 자바스크립트로 번역하면 코드 작성하기 더 좋음

<br> 

> 수정 코드
```js
document.querySelector('.black-bg').addEventListener('click', function(e){
  if (지금 실제로 클릭한거 == 검은 배경) {
    document.querySelector('.black-bg').classList.remove('show-modal');
  }
})
```
- `이거 해달라`고 코드짜려면 if문 밖에 없음

    - 조건식안에 들어가는건 거의 등호/부등호 

- 실제로 클릭한거 = e.target

- 검은배경 = document.querySelector('.black-bg') 

<br>

> 최종 코드
```js
document.querySelector('.black-bg').addEventListener('click', function(e){
  if ( e.target == document.querySelector('.black-bg') ) {
    document.querySelector('.black-bg').classList.remove('show-modal');
  }
})
```
- e.currentTarget 출력해보면 `검은배경`

- e.target == e.currentTarget OR e.target == this 도 OK

    - $(e.target).is($('.black-bg')) 역시 가능

- jQuery 셀렉터로 찾은 결과와 querySelector 셀렉터로 찾은 결과는 다르게 생김

    - jQuery 셀렉터 : object 

        - e.target == $('.black-bg') 사용 불가능

        - jQuery 셀렉터끼리 등호비교는 불가능

            - 비교용 함수 사용 : $('.black-bg').is($('.black-bg')) 
    
    - querySelector 셀렉터 :  \<html>


<br>

---

<br>

결론
---

1. 이벤트 버블링은 항상 발생

2. 이벤트 관련 유용한 함수들 사용 가능

<br>