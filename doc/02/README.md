# 동적 UI (Alert 박스)
기본적인 UI 만드는 법칙
---
- 웹페이지에선 탭, 모달창, 서브메뉴, 툴팁 등 수백개의 동적 UI 생성 가능

- HTML CSS 로 미리 UI 디자인을 해놓고 필요하면 평소엔 숨김

- 버튼을 누르거나할 경우 UI를 보여달라고 자바스크립트 코드 작성


<br>

### 1. UI 먼저 디자인
- Alert UI 디자인하려면 먼저 html 에 css 연결
    - index.html \<head> 태그 안에 \<link href="main.css" rel="stylesheet"> 첨부 

<br>

> html
```html
<div class="alert-box">알림창</div>
```

> css
```css
.alert-box {
  background-color: skyblue;
  padding: 20px;
  color: white;
  border-radius: 5px;
  display: none;
} 
```
- UI를 평소에 숨기고 싶으면 display : none

    - visibility : hidden 가능

- 다시 보여주고 싶으면 display : block

<br>

### 2. 버튼 누르면 Alert UI 보여주기
- 거의 모든 html 태그 내에 onclick 속성 사용 가능

    - 해당 html 클릭시 onclick 안의 자바스크립트 실행
 
> 버튼을 눌렀을 때 자바스크립트 실행하려면
```html
<button onclick="자바스크립트~~" id='아이디'> 버튼 </button>
```
- onclick 속성 안에 display : block 작성하면 Alert 박스 보임

> html
```html
<button onclick="document.getElementById('아이디').style.display = 'block';"> 버튼 </button>
```
- html을 변경할 땐 항상 document 부터 시작하는 틀 사용

<br>