# 정규식으로 이메일형식 검증

문자 검사 방법 
---
> javascript
```javascript
'문자'.includes('찾을단어')
```
- 아무 문자나 뒤에 .includes()

    - 문자에 찾을 단어가 들어있는지 검사
    
        - 있으면 true 

        - 없으면 false 

- 한계 (includes() 만으로 검사 불가능한 항목)

    - 한글이 들어있는가

    - 영어가 들어있는가

    - A로 끝나는가

    - 마침표 다음에 영어가 있는가

<br>

---

<br>

정규표현식 (regular expression)
---
- 정규식 : 문자를 검사하고 싶을 때 사용하는 식

    - `어떤 문자에 'abc'라는 단어가 들어가있는가?` 확인시 사용

<br>
 
> 자바스크립트로 정규식 표현
```javascript
/abc/
```
- abc라는 단어가 있냐고 물어볼 준비 완료

 
<br>
 
> abcdef 문자에 abc라는 단어가 있는지 검사
```javascript
/abc/.test('abcdef')
```
- /정규식/.test(정규식으로 검사해볼문자)

    - 들어있으면 true / 없으면 false


<br>

---

<br>

정규식 문법
---
- 정규식 문법은 너무 많아서 필요할 때 찾아쓰기

<br> 

> javascript
```javascript
/a/.test('abcde')  //true 
```
- 영어나 한글의 경우 그냥 쓰면 글자가 있는지 없는지 검사 

<br>

> javascript
```javascript
/[a-d]/.test('aefg')  //true
/[가-다]/.test('다라마바')  //true
```
- \[ ] 기호를 이용해서 문자 범위를 지정 가능

    - [a-z] : a부터 z까지 아무문자 하나를 의미

- a부터 d까지의 아무 문자하나가 저기 있는지 검사

<br>

> javascript
```javascript
/[a-zA-Z]/.test('반가워요')  //false
/[a-zA-Z]/.test('반가워요a') //true
/[ㄱ-ㅎ가-힣ㅏ-ㅣ]/.test('반가워요')  //true
```
- [a-zA-Z] : 아무 알파벳 하나라는 뜻

- [ㄱ-ㅎ가-힣ㅏ-ㅣ] : 아무 한글 하나라는 뜻

<br>

> javascript
```javascript
/\S/.test('abcde')   //true  
```
- 백슬래시S : 특수문자 포함 아무문자 1개라는 뜻 

    - 자판의 원화기호가 백슬래시

<br>

> javascript
```javascript
/^a/.test('abcde')   //true
/e$/.test('abcde') //true  
```
- ^a : a로 시작하는지 검사

- e$ : e로 끝나는지 검사

<br>

> javascript
```javascript
/(e|f)/.test('abcde')   //true
```
- | : or 기호

- e 또는 f중 아무거나 한 문자가 있나 검사

    - 정규식에선 괄호맘대로 칠 수 있음

<br>

> javascript
```javascript
/a+/
```
- + 기호 : 뒤에 오는 글자들도 a와 일치하면 반복해서 쭉 찾아달라는 뜻

    - aaaaa 찾고 싶으면 /a+/ 사용

- /a/ : a를 다 찾으라는게 아니라 a 한개를 찾으라는 뜻


<br>

> javascript
```javascript
/\S+t/
```
- 모든 문자 여러개 다음에 t라는 글자가 있냐를 검사

    - aaaaat, bbt 등


<br>

---

<br>

이메일 정규식 
---
- 이메일 : 어쩌구@어쩌구.어쩌구

    - 모든 문자 사이에 @ 그리고 .이라는 특수문자 존재

 
> javascript
```javascript
/\S+@\S+\.\S+/
```
- \\. 사용 이유

    - 마침표는 정규식에서 특수한 문법

    - 마침표 문법을 쓰는게 아니라 진짜 마침표를 찾아달라라는 의미로 쓰려면 백슬래시를 앞에 붙여야함

<br>

폼전송시 이메일 형식 검증
---
- 공백검사랑 별 차이 X

    - 공백검사 부분 대신에 이메일 정규식과 부합하는지 검사

<br>

> javascript
```javascript
$('form').on('submit',function(e){

  var 입력한값 = document.getElementById('email').value;
  if ( /\S+@\S+\.\S+/.test(입력한값) ){
    alert('이메일형식아님')
    e.preventDefault();
  }

});
```
- form 전송시

- 유저가 \<input>에 입력한걸 찾아서

- 정규식으로 이메일 테스트했을 때 false가 나오면 

- 폼 전송을 막거나 alert() 띄우기

<br>

