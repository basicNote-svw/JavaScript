# 자바스크립트 개발환경 및 근본
개발환경 셋팅 
---
- 에디터 설치

    - Brackets 

    - VSCode 

- 작업폴더를 바탕화면에 생성

- 작업할 폴더 open

    - 파일 - 폴더열기

    - 파일의 주소탐색기 cmd - code . (VSCode)

- 좌측에서 index.html 파일 생성 후 코딩 시작

- html 파일을 미리보기 띄우고 싶으면

    - Brackets 에디터 : 우측상단 실시간 미리보기 띄우기 버튼 클릭

    - Visual Studio Code : 왼쪽 Extensions 메뉴에서 live server 설치
    
        - html 파일 우클릭 - live server 클릭

    - 에디터에서 작업폴더를 안열고 시작하면 HTML 미리보기 실행 X

<br>

---

<br>

자바스크립트 사용 목적  
---
- HTML 조작을 위해 사용

- html 파일 안에서 html 조작과 변경을 담당하는 언어

- 조작 이유

    - 탭, 모달 등 웹페이지 UI 생성 가능

    - 유저가 입력한 데이터 검사 가능

    - 유저가 버튼누르면 서버로 데이터 요청 가능

<br>

---

<br>

html 조작, 변경
---
> html
```html
<h1 id="hello">안녕하세요</h1>

<script>
  document.getElementById('hello').innerHTML = '안녕';
</script>
```
- html 파일 안에 html 먼저 작성

- 자바스크립트 코드를 짜고 싶으면 \<script> 태그 안에 작성 

- 위처럼 작성하면 안녕하세요였던 \<h1>태그가 안녕으로 변경됨

    - \<script> 안에 적은 코드는 브라우저 새로고침시 1번 실행

<br>

- 자바스크립트는 영어 알면 누구나 해석가능한 쉬운 언어

    - document → 문서(여기선 html 웹문서)

    - 마침표 → ~의 

    - getElementById('아이디이름') → 아이디가 '아이디이름'인 html 요소(element)를 찾아라

    - innerHTML → 내부 HTML

    - = → 등호는 프로그래밍에서 오른쪽에 있는걸 왼쪽에 대입하라는 뜻

    - '안녕' → 안녕이라는 문자 
    
        - 큰따옴표, 작은따옴표안에 담겨있으면 항상 문자

<br>
 
> 코드 해석 연습
```javascript
document.getElementById('hello').innerHTML = '안녕'; 
```
- → 웹문서의 id="hello"찾아서 내부 HTML에 '안녕' 넣기

- 응용
    - 'hello' 이 부분을 바꾸면 다른 html 요소도 맘대로 바꿀 수 있음

    - innerHTML과 '안녕' 이 부분을 바꾸면 html 요소의 다른 내용도 바꿀 수 있음

<br>

> 결론
```javascript
document.getElementById('???').??? = '???'; 
```
- 물음표만 바꿔주면 html의 모든걸 변경, 조작 가능 

    - document.getElementById('???').src = 'profile.jpg'; 

        - 원하는 요소에 src="profile.jpg" 추가

    - document.getElementById('???').style.color = 'red'; 

        - 원하는 요소에 style="color : red" 추가


<br>
 
> 하단 \<h1> 내부의 글자를 'JS 고수에요'로 바꾸려면
```javascript
<h1 id="hi">JS 초보에요</h1> 
```


<details>
<summary>정답</summary>

```javascript
document.getElementById('hi').innerHTML = 'JS 고수에요';
```

</details> 

<br>


> 위의 \<h1> 내부의 글자를 초록색으로 바꾸려면

<details>
<summary>정답</summary>

```javascript
document.getElementById('hi').style.color = 'green';
```

</details> 

<br>

### 💡 셀렉터

- .getElementById() : 셀렉터

    - html 요소를 찾기 위해 사용

- .innerHTML / .style / .color 이렇게 점찍는데 괄호없는것 : 메소드(or 함수)

- html 요소의 어떤 속성을 변경할지 결정하기 위해 사용

 

 

 

 

<br>

---

<br>

프로그래밍 하는 법
---
- 프로그래밍 : 컴퓨터에게 일시키는 것

    - 코드를 작성해 컴퓨터에게 명령내리는 것

- 컴퓨터와 사람처럼 대화 X

    - 사람은 "너 저기가서 저것좀 바꿔와" 하면 이해 O

    - 컴퓨터는 "너 저기가서 저것좀 바꿔와" 하면 이해 X

        - 컴퓨터는 사람처럼 유추, 상상 불가능
        
        - 정말 정확히 설명해줘야 이해함

        - "너 id가 hello인 html요소 찾아서 안의 내용을 안녕으로 바꿔"

<br>

