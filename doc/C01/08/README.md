# 모달창와 간단한 애니메이션

one-way 일방향 애니메이션 만드는 법
---
- A 상태에서 B 상태로만 움직이는 one-way 애니메이션

- 가능하면 CSS 만으로 처리하는게 좋음(성능때문)

### 1. 시작스타일 만들기 (class로)
- 동작 전 스타일

### 2. 최종스타일 만들기 (class로) 
- 동작 후 스타일

> css
```css
.black-bg {
  (생략)
  visibility : hidden;
  opacity : 0;
}
.show-modal {
  visibility : visible;
  opacity : 1;
}
```
- display : none을 주면 애니메이션이 잘 동작하지 않음

    - 비슷한 역할을 할 수 있는 visibility : hidden 사용 

- opacity : 투명도 조절할 수 있는 속성

    - 0이면 투명, 1이면 불투명, 0.5면 반투명 

<br>

### 3. 원할 때 최종스타일로 변하라고 JS 코드 작성
> html
```javascript
<button id="login">로그인</button>
<script>
  $('#login').on('click', function(){
    $('.black-bg').addClass('show-modal');
  });
</script>
```

<br>

### 4. 시작스타일에 transition 추가 
> css
```css
.black-bg {
  (생략)
  visibility : hidden;
  opacity : 0;
  transition : all 1s;
}
.show-modal {
  visibility : visible;
  opacity : 1;
}
```
- transition : 스타일이 변할 때 천천히 변경하라는 뜻

- class 탈부착시 opacity가 변함

    - 천천히 1초에 걸쳐 변경

 
<br>


 

