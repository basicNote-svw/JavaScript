# 이벤트 버블링 응용과 dataset

- 이벤트버블링을 알면 이벤트리스너를 줄여가며 개발 가능

    - 필수는 아니고 알면 언젠가 도움되는 내용

<br>

> 전에 만들어둔 탭기능 코드
```js
for (let i = 0; i < $('.tab-button').length; i++){

  $('.tab-button').eq(i).on('click', function(){
    $('.tab-button').removeClass('orange');
    $('.tab-button').eq(i).addClass('orange');
    $('.tab-content').removeClass('show');
    $('.tab-content').eq(i).addClass('show');
  })

});
```

<br> 

---

<br>

탭기능 함수로 축약
---
- 함수쓰면 긴 코드를 짧은 단어하나로 축약 가능

    - 탭만들 때 썼던 4줄의 코드를 함수로 축약

        - 재사용 편리, 나중에 남이 읽었을 때도 이해하기 쉬움

<br> 

> 축약 코드
```js
for (let i = 0; i < $('.tab-button').length; i++){

  $('.tab-button').eq(i).on('click', function(){
    탭열기(i)
  })

});


function 탭열기(구멍){
  $('.tab-button').removeClass('orange');
  $('.tab-button').eq(구멍).addClass('orange');
  $('.tab-content').removeClass('show');
  $('.tab-content').eq(구멍).addClass('show');
}
```
- 파라미터 문법 사용 이유

    - 함수로 코드를 싸맬 때 안에 변수가 들어있으면 변수를 전부 파라미터로 바꾸는게 좋음

        - i 부분을 전부 파라미터로 바꿈

- 함수 사용시

    - 탭열기(0) : 0번 탭이 열림

    - 탭열기(1) : 1번 탭이 열림

    - 탭열기(2) : 2번 탭이 열림

<br>

---

<br>

이벤트버블링을 알면 이벤트리스너 줄일 수 있음
---
- 탭 만들 때 이벤트리스너를 3개나 부착

    - 버튼이 3개이기 때문에

- 생각해보면 이벤트리스너 1개만 써도 충분히 기능 구현 가능

    - 버튼 3개의 부모인 \<ul class="list"> 에 이벤트리스너 1개만 있어도 탭기능 구현 가능

        - 버튼 뭘 누르든 간에 \<ul class="list">에 붙은 이벤트리스너 동작

            - 이벤트버블링이 항상 일어나기 때문

<br>

> 해결 방법
```js
$('.list').click(function(){
  지금 누른게 버튼 0이면 탭열기(0) 실행
  지금 누른게 버튼 1이면 탭열기(1) 실행
  지금 누른게 버튼 2이면 탭열기(2) 실행
})
```
- 탭기능 잘 동작

    - jQuery 셀렉터엔 .click() 써도 click 이벤트리스너 부착 가능

<br>

---

<br>

### 💡 이벤트리스너 줄여서 코드 작성 이유
- 버튼이 많다면 이렇게 짜는게 덜 복잡

- 이벤트리스너를 줄이면 램용량 절약 가능

    - 성능 개선의 일환

<br>

> 수정 코드
```js
$('.list').click(function(e){
  if (e.target == document.querySelectorAll('.tab-button')[0] ){
    탭열기(0)
  }
  if (e.target == document.querySelectorAll('.tab-button')[1] ){
    탭열기(1)
  }
  if (e.target == document.querySelectorAll('.tab-button')[2] ){
    탭열기(2)
  }
})

function 탭열기(){
  생략
}
```
- 탭기능 잘 동작

    - 코드 양 동일

        - dataset 문법을 알면 위 코드를 조금 더 짧게 변경 가능
 
<br>

---

<br>

dataset 문법
---
- dataset 문법이 인터넷익스플로러 11+ 에서 동작

- 옛 브라우저까지 호환 잘되는 jQuery 함수 이용하는 방법

    - $(셀렉터).data('데이터이름', '값') 저장

    - $(셀렉터).data('데이터이름') 출력

<br>

```html
<div data-데이터이름="값"></div> 
```
- html 안에 유저 몰래 정보를 숨겨놓을 수 있음

    - 데이터이름 아무렇게나 작명 후 값도 넣으면 됨

        - 일반 유저들은 모름 

<br>

```js
document.querySelector().dataset.데이터이름;
```
- html 요소에 숨겨놨던 데이터가 이 자리에 남음


<br>
 
> 탭 버튼들에 데이터 숨기기
```html
<li class="tab-button" data-id="0">Products</li> 
<li class="tab-button orange" data-id="1">Information</li> 
<li class="tab-button" data-id="2">Shipping</li> 
```
- 이전 코드에서는 if문이 3개 

<br>

> 축약 코드
```js
$('.list').click(function(){
  탭열기(지금누른버튼에 숨어있던 data-id)
});
```
- if문 필요없이 한 줄로 해결

<br>
 
> 지금누른버튼에 숨어있던 data-id를 알려주는 코드 활용
```js
$('.list').click(function(e){
  탭열기(e.target.dataset.id)
});
```
- 지금누른 버튼을 찾고 싶으면 e.target

- 거기 숨어있는 data-id 꺼내고 싶으면 .dataset.id

그래서 위처럼 코드짜도 탭기능 완성인 것입니다.

<br>

---
 
<br>

결론
---
1. 함수로 축약할 때 변수같은게 있으면 파라미터로 바꾸는게 좋음 

2. 이벤트리스너 줄이면 이점이 있음

3. dataset 알면 이벤트리스너 적게 사용할 때 내가 뭐 눌렀는지 쉽게 파악 가능

<br>

 
