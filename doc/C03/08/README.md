# position : sticky
- [참고사이트](apple.com/apple-tv-4k)


|apple TV|
|-|
|![01](https://github.com/user-attachments/assets/6ec44212-893b-4a9a-b179-2183d819c09e)|

<br>

position : sticky 
---
- Edge 이상에서 사용가능

- 스크롤이 되었을 때 화면에 고정되는 요소를 만들고 싶을 때 사용할 수 있는 CSS 속성

- position : fixed 

    - 항상 화면에 고정이 되는 요소를 만들 때 사용

- position : sticky

    - 스크롤이 되어서 **이 요소가 화면에 나오면** 고정

<br>

> html
```html
<body style="background : grey; height : 3000px">

<div class="grey">
  <div class="image">
    <img src="appletv.jpg" width="100%">
  </div>

  <div style="clear : both"></div>
  <div class="text">Meet the first Triple Camera System</div>
    
</div>

</body>
```

> css
```css
.grey {
  background: lightgrey;
  height: 2000px;
  margin-top: 500px;
}
.text {
  float: left;
  width : 300px;
}
.image {
  float: right;
  width : 400px;
  position: sticky;
  top: 100px;
}
```
- 검고 긴 화면에 텍스트와 이미지가 하나씩 보임

- 이미지에 position : sticky

    - 스크롤이 되어서 이미지가 보이는 순간

    - viewport의 맨 위에서부터 100px 위치에서 고정

    - 부모 박스를 넘어서 스크롤 되면 이미지도 같이 사라짐

<br>

---

<br>

주의점
---

- 스크롤을 할 만한 부모 박스가 있어야 함

- top 등 좌표속성과 함께 써야 제대로 보임


<br>

