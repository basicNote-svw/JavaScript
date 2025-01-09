# Ajax
- Ajax : 서버와 데이터주고받는 법 중 하나

- https://basicnote-svw.github.io/file/hello.txt 여기로 GET요청하면 인삿말

- https://basicnote-svw.github.io/file/price.json 여기로 GET요청하면 가격정보

<br>

---

<br>

서버
---
- 서버 : 유저가 데이터달라고 요청을 하면 데이터를 보내주는 프로그램

    - 네이버웹툰 서버 : 유저가 웹툰 달라고 하면 웹툰 보내주는 프로그램

    - 유튜브 서버 : 유저가 영상 달라고 하면 영상 보내주는 프로그램

- 서버에 데이터를 요청할 때

    1. 어떤 데이터인지 url로 기재

    2. 어떤 방법으로 요청할지 결정 (GET/POST 등)

- ex. 화산귀환 네이버웹툰 보고싶으면

    - https://comic.naver.com/webtoon/list?titleId=769209&tab=wed 여기로 GET요청하면 보내줌

<br>

---

<br>

GET/POST 요청하는 법
---
- GET요청 : 서버에 있던 데이터를 읽고싶을 때 주로 사용

- POST요청 : 서버로 데이터를 보내고 싶을 때 사용

    - 서버는 유저데이터를 DB에 저장해주는 역할도 수행

- 그 외 PUT, DELETE 요청

 
<br>
 
### GET 요청
- 브라우저 주소창

    - 주소창에 url 적으면 그 곳으로 GET요청

<br>

### POST요청
- \<form action="요청할url" method="post"> 태그 이용

    - 폼이 전송되었을 때 POST요청

<br>

### GET, POST 요청 방법 단점
- 브라우저가 새로고침됨

<br>

---

<br>

AJAX
---
- 서버에 GET, POST 요청을 할 때 새로고침 없이 데이터를 주고받을 수 있게 도와주는 브라우저 기능

    - 새로고침 없이도 쇼핑몰 상품 더 가져오기 있음

    - 새로고침 없이도 댓글을 서버로 전송 가능

<br>

---

<br>

jQuery로 AJAX요청하기 
---
- $.get() 함수를 쓰고 안에 url 기입 

- https://basicnote-svw.github.io/file/hello.txt 여기로 GET요청

    - 인삿말 하나 가져올 수 있음

> get 요청
```js
$.get('https://basicnote-svw.github.io/file/hello.txt');
```
- 안되면 html파일 미리보기가 제대로 안떠있는 것

    - 브라우저 주소창 127.0.0.1:~

    - VScode는 live server 익스텐션 설치 

<br>

> .done 
```js
$.get('https://basicnote-svw.github.io/file/hello.txt').done(function(data){
  console.log(data)
});
```
- 가져온 데이터가 들어있는 위치

    - .done 또는 .then 뒤에 붙이고 콜백함수넣고 파라미터 하나 만들면 거기에 들어있음

<br>

> post 요청
```js
$.post('url~~', {name : 'kim'})
```
- 서버로 데이터를 보낼 수 있는 POST요청을 날리고 싶을 때

    - url 잘 적고 뒤에 서버로 보낼 데이터 작성

<br>

> .done
```js
$.get('https://codingapple1.github.io/hello.txt')
  .done(function(data){
    console.log(data)
  })
  .fail(function(error){
    console.log('실패함')
  });
```
- ajax 요청 성공시 .done 안에 있는 코드를 실행

- ajax 요청 실패시 .fail 안에 있는 코드를 실행

- error 출력해보면 에러관련 정보를 출력

    - 정보 보고 디버깅

    - ex. 404 에러코드는 url 이 잘못되었다는 뜻 

- done/fail 대신 then/catch 써도 OK 

<br>

### 💡 다음 url로 GET요청을 해서 가격정보를 가져와 콘솔창에 출력

- https://basicnote-svw.github.io/file/price.json  여기로 GET요청

    - 오늘의 상품가격을 알려줌

    - 콘솔창에 5000이 뜨면 성공

```js

```
 
<br>
 
---

<br>

자바스크립트는 fetch 사용해 AJAX 요청가능
---
> javascript
```js
fetch('https://basicnote-svw.github.io/file/price.json ')
  .then(res => res.json())
  .then(function(data){
    console.log(data)
  })
  .catch(function(error){
    console.log('실패함')
  });
```
- fetch 함수는 Edge 브라우저 이상에서만 동작

- 코드가 한 줄 더 필요한 이유

    - 서버와 데이터를 주고받을 때는 문자만 주고받을 수 있음

        - array, object 전송불가능 

    - { price : 5000 } object 받아오려면

        - object를 JSON으로 바꿔서 전송

<br>

### JSON
- array 또는 object에 따옴표를 쳐서 '{ "price" : 5000 }' 이렇게 만들면 JSON 자료

    - JSON은 문자로 인식
    
        - 서버와 데이터 주고받기 가능

- jQuery의 $.get() : JSON으로 자료가 도착하면 알아서 array/object 자료로 바꿔줌

- 기본함수 fetch() : JSON으로 자료가 도착하면 알아서 array/object 자료로 바꿔주지 않음

    - fetch() 로 가져온 결과를 array/object로 바꾸려면
    
        - res.json() 코드 한 줄 추가

- jQuery나 axios 라이브러리 설치하면 ajax가 약간 더 간편

<br>

---

<br>

응용
---
- 자바스크립트를 이용해서 카드레이아웃을 3개 생성

- var products 에 있던 데이터도 html에 잘 들어와야 함

<br>

> list.html
```html
<div class="container">
  <div class="row">

      <!-- <div class="col-sm-4">
        <img src="https://via.placeholder.com/600" class="w-100">
        <h5>Card title</h5>
        <p>가격 : 70000</p>
      </div> -->

  </div>
</div> 
```
- 상품목록 html을 비우고 위 코드로 재시작

    - 새로운 카드 레이아웃

- \<div class="col-sm-4"> 덩어리가 카드 1개

<br>

```js
<script>
    var products = [
    { id : 0, price : 70000, title : 'Blossom Dress' },
    { id : 1, price : 50000, title : 'Springfield Shirt' },
    { id : 2, price : 60000, title : 'Black Monastery' }
    ];

    products.forEach((a, i)=>{
        var card = 
        `<div class="col-sm-4">
            <img src="https://via.placeholder.com/600" class="w-100">
            <h5>${products[i].title}</h5>
            <p>가격 : ${products[i].price}</p>
        </div>`;
        $('.row').append(card);
    })

</script>
```

<br>

---

<br>

상품 더보기 버튼누르면 상품3개 가져오기
---
- 버튼하나 만들고 그거 누르면 상품을 더 가져오기

- https://basicnote-svw.github.io/file/more1.json 여기로 GET요청하면 상품 3개 데이터 보내줌

- 버튼누르면 상품데이터 가져와서 콘솔창에 출력

<br>

```html
<div class="container">
  <button class="btn btn-danger" id="more">더보기</button>
</div>

<script>
  $('#more').click(function(){
    $.get('https://basicnote-svw.github.io/file/more1.json')
      .done((data)=>{
        console.log(data)
      });
  });
</script>
```

<br>

---

<br>

가져온 데이터로 카드 3개 만들기
---
- 버튼누르면 가져온 데이터로 카드레이아웃을 3개 더 생성 

<br>

```html
<div class="container">
  <button class="btn btn-danger" id="more">더보기</button>
</div>

<script>
  $('#more').click(function(){
    $.get('https://basicnote-svw.github.io/file/more1.json')
      .done((data)=>{
        
        data.forEach((a, i)=>{
          var 템플릿 = 
          `<div class="col-sm-4">
            <img src="https://via.placeholder.com/600" class="w-100">
            <h5>${data[i].title}</h5>
            <p>가격 : ${data[i].price}</p>
          </div>`;
          $('.row').append(템플릿)
        })
        
      });
  });
</script>
```
- .done() 안에 카드 3개를 추가해달라고 코드 작성 

    - 카드 레이아웃 만들고 그걸 append() 하는 코드를 3번 반복

- data[0].title 이것도 제목란에 끼워넣기

<br>

---

<br>

응용
---

### 1. 더보기버튼을 2번째 누르면 7,8,9번째 상품을 더 가져와서 html로 보여주기

- https://basicnote-svw.github.io/file/more2.json 여기로 GET요청하면 7,8,9번째 상품 도착

- 유저가 더보기버튼을 몇 번 눌렀는지를 기록

    - 버튼 누를 때마다 어디로 GET요청할 지 판단 가능

- 10,11,12번 상품은 없으니 버튼을 3번은 못누르게 버튼 숨기기

<br>

> css
```css
.hide {
    display: none;
}
```

> javascript
```js
<script>
    var count = 0;

    $('.more').click(function(){
        ++count;
        if(count == 1){
            $.get('https://basicnote-svw.github.io/file/more1.json')
            .done((data)=>{
                console.log(data);
                data.forEach((a, i)=>{
                    var card = 
                    `<div class="col-sm-4">
                        <img src="https://via.placeholder.com/600" class="w-100">
                        <h5>${data[i].title}</h5>
                        <p>가격 : ${data[i].price}</p>
                    </div>`;
                    $('.row').append(card);
                })
            })
            .fail(()=>{
                console.log('실패');
            })
        }
        if(count == 2){
            $.get('https://basicnote-svw.github.io/file/more2.json')
            .done((data)=>{
                console.log(data);
                data.forEach((a, i)=>{
                    var card = 
                    `<div class="col-sm-4">
                        <img src="https://via.placeholder.com/600" class="w-100">
                        <h5>${data[i].title}</h5>
                        <p>가격 : ${data[i].price}</p>
                    </div>`;
                    $('.row').append(card);
                })
            })
            .fail(()=>{
                console.log('실패');
            })
            $('.btn').addClass('hide');
        }
    });
</script> 
```

<br>

### 2. 유사한 코드 축약

- forEach() 반복문을 2번 사용(매우 유사)

    - 함수로 축약
 
- 함수로 축약할 때 안에 미지의 변수 있으면 파라미터로 바꾸는게 좋음

    - a, i 이런 변수는 이미 콜백함수에 의해 파라미터화가 되어있음

<br>

```js
<script>
    var count = 0;

    $('.more').click(function(){
        ++count;
        if(count == 1){
            getRequest(count);
        }
        if(count == 2){
            getRequest(count);
            $('.btn').addClass('hide');
        }
    });

    function getRequest(num) {
        $.get(`https://basicnote-svw.github.io/file/more${num}.json`)
        .done((data)=>{
            console.log(data);
            data.forEach((a, i)=>{
                var card = 
                `<div class="col-sm-4">
                    <img src="https://via.placeholder.com/600" class="w-100">
                    <h5>${data[i].title}</h5>
                    <p>가격 : ${data[i].price}</p>
                </div>`;
                $('.row').append(card);
            })
        })
        .fail(()=>{
            console.log('실패');
        })
    }
</script> 
```

<br>