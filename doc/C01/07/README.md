# jQuery 사용법
- 자바스크립트 특징 : 코드가 매우 길고 지저분함

- 그게 싫다면 html 조작을 쉽게 바꿔주는 라이브러리들 사용가능

    - React, Vue, jQuery 등 

        - React, Vue는 자바스크립트 문법을 알아야 사용가능

<br>

### 💡 jQuery VS 자바스크립트
- jQuery : JS querySelectorAll, addEventListener, classList.add 등을 이름만 짧게 바꿔주는 라이브러리

    - 즉, 자바스크립트와 다른 언어가 아님

- 코드 읽기에 짧고 좋아서 초보자에게 최고의 코딩입문 도구

    - 굳이 사용하지 않고 querySelectorAll 등 길게 써도 OK

 
<br>

---

<br>
 
jQuery 설치
---
- 구글에 jQuery cdn 검색하면 나오는 사이트 접속

    - jQuery 3.x 버전 \<script> 태그를 찾아서 html 파일에 복붙하면 설치 끝

> html
```javascript
<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js" integrity="sha512-894YE6QWD5I59HgZOGReFYm4dnWc1Qt5NtvYSaNcOP+u1T9qYdvdihz0PPSiiqn/+/3e7Jo4EaG7TubfWGUrMQ==" crossorigin="anonymous" referrerpolicy="no-referrer"></script> 
```

- jQuery 설치한 곳 하단에서 jQuery 문법 사용가능

    - jQuery 설치한 곳 상단에 코드짜면 작동 안됨

 
<br>

---

<br>

jQuery 사용해 html 변경
---
> html
```javascript
<p class="hello">안녕</p>

<script>
  $('.hello').html('바보'); 
</script>
```
- 코드 양이 절반으로 줄어들어서 사용

- $ : querySelector와 동일하게 사용

 

<br>

---

<br>

jQuery 사용해 스타일 변경
---
> html
```javascript
<p class="hello">안녕</p>

<script>
  $('.hello').css('color', 'red');
</script>
```
- css 스타일 변경 가능

<br>


### 💡 주의
- html 셀렉터로 찾으면 html 함수들을 뒤에 붙여야 작동

- jQuery 셀렉터로 찾으면 jQuery 함수들을 뒤에 붙여야 작동

    - $('어쩌구').innerHTML 작동 X

<br>

---

<br>

jQuery 사용해 class 탈부착
---
> html
```javascript
<p class="hello">안녕</p>

<script>
  $('.hello').addClass('클래스명');
  $('.hello').removeClass('클래스명');
  $('.hello').toggleClass('클래스명');
</script>
```
- toggleClass : 왔다갔다 토글

 
<br>

---

<br>

html 여러개를 바꾸려면
---
- \<p> 태그 3개 내용을 일괄적으로 'Hello'로 바꾸려면

> javascript
```javascript
<p class="hello">안녕</p>
<p class="hello">안녕</p>
<p class="hello">안녕</p>

<script>
  document.querySelectorAll('.hello')[0].innerHTML = 'Hello';
  document.querySelectorAll('.hello')[1].innerHTML = 'Hello';
  document.querySelectorAll('.hello')[2].innerHTML = 'Hello';
</script>
```
- 자바스크립트 : 3줄 작성

<br> 

> jQuery
```javascript
<p class="hello">안녕</p>
<p class="hello">안녕</p>
<p class="hello">안녕</p>

<script>
  $('.hello').html('바보');
</script>
```
- $() 셀렉터 : querySelectorAll처럼 여러개가 있으면 전부 찾아줌

    - [0] 이런 식으로 순서지정해줄 필요 X
    
    - .html() 붙이면 셀렉터로 찾은 모든 요소를 한 번에 조작, 변경 가능

- 특정 클래스의 N번째 요소를 선택하려면

    - $('.class').eq(N-1)

        - $('.class'): 클래스명이 class인 모든 요소를 선택

        - .eq(N-1): 0부터 시작하는 인덱스를 기준으로 N번째 요소(인덱스 N-1) 선택
 

<br>

---

<br>

이벤트리스너
---
> html
```javascript
<p class="hello">안녕</p>
<button class="test-btn">버튼</button>

<script>
  $('.test-btn').on('click', function(){
    /* 실행할 코드 */
  });
</script>
```
- addEventListener = on 

    - on : $() 로 찾은 것들에만 붙일 수 있음

 
<br>

---

<br>

UI 애니메이션
---
> html
```javascript
<p class="hello">안녕</p>
<button class="test-btn">버튼</button>

<script>
  $('.test-btn').on('click', function(){
    $('.hello').fadeOut();
  });
</script>
```
- 간단한 애니메이션

    - .hide() : 사라짐    ↔   show() : 나타남

    - .fadeOut() : 서서히 사라짐  ↔   fadeIn() : 서서히 나타남

    - .slideUp() : 요소를 위로 접어올리며 사라짐    ↔   slideDown() : 숨겨진 요소를 아래로 펼치며 표시

    - .fadeToggle() : fadeIn(서서히 나타남)과 fadeOut(서서히 사라짐)을 번갈아가며 실행

<br>

