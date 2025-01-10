# array에 자주 쓰는 sort, map, filter 함수

상품 가격순 정렬버튼과 기능
---
- products라는 변수안에 있던걸 가격순으로 정렬

- products 변수에 있던 순서대로 카드 재생성 


<br>
 
---

<br>

array 정렬
---

- array 자료는 순서개념이 있다보니 정렬도 가능

    - 문자 가나다순으로 정렬하려면 .sort()

> 오름차순 정렬
```js
var 어레이 = [7,3,5,2,40];
어레이.sort(function(a, b){
  return a - b
});

console.log(어레이);
```

<br>

> sort() 동작원리
```js
어레이.sort(function(a, b){
  return a - b
});
``` 
1. a, b는 array 안의 자료들

2. return 오른쪽이 양수면 a를 오른쪽으로 정렬

3. return 오른쪽이 음수면 b를 오른쪽으로 정렬

4. array 안의 자료들을 계속 뽑아서 a, b에 넣어줌

<br> 

- ex) a, b가 7과 3일 경우 7 - 3 = 4

    - 4는 양수 → 7을 3보다 오른쪽으로 이동

        - 숫자 오름차순 (123순) 정렬 완성

<br>

### 💡 array 안의 숫자 내림차순 (321순) 정렬
 
> 내림차순 정렬
```js
var 어레이 = [7,3,5,2,40];

어레이.sort(function(a, b){
  return b - a 
}); 
```
- return 우측이 음수면 b를 오른쪽으로 보냄

- a, b가 7과 3일 경우 return -4 라서 3을 더 오른쪽으로 보냄


<br>

### 💡 문자정렬과 문자역순정렬
> 문자 정렬
```js
var arr = ['다', '가', '나']

arr.sort(); // 가나다순
```

<br>

> 문자역순정렬
```js
var arr = ['가', '다', '나']

arr.sort(function(a, b){
  if (a < b) {
    return 1 
  } else {
    return -1
  }
});

console.log(arr);
```
- sort 함수 작동원리에서 중요한 것은 return 우측

  - (1) a, b가 '가', '다' 일 경우 return 우측에 양수가 들어가야 다나가순 정렬

  - (2) a, b가 '다', '나' 일 경우 return 우측에 음수가 들어가야 다나가순 정렬

  - (3) a, b가 '가', '나' 일 경우 return 우측에 양수가 들어가야 다나가순 정렬

- a < b 일 경우 return 우측에 양수, a > b 일 경우 return 우측에 음수

  - 자바스크립트는 문자끼리 부등호비교가 가능 (ㄱ < ㅎ)

<br>

---

<br>

버튼누르면 products 가격순 정렬
---
- var products 라는 array

    - `[ { }, { }, { } ]` 이렇게 생김

        - 안에 있는 `{ }` 이것들을 가격 낮은순으로 정렬

<br> 

> 기존 오름차순 정렬
```
products.sort(function(a, b){
  return a - b 
});
``` 
- .sort 뒤에 붙이는건 맞는데 콜백함수 안의 식이 좀 달라져야함

    - products는 `[ { }, { }, { } ]` 구조

- a, b는 지금 `{ }, { }` 

    - object 두개를 a - b 이렇게 빼봤자 음수나 양수가 나오지 않음

    - `{ } 안에 있는 가격 - { } 안에 있는 가격` 

        - 양수가 나오면 a를 오른쪽으로 보내기 

<br>

> 오름차순 정렬
```js
products.sort(function(a, b){
  return a.price - b.price 
});

console.log(products); 
```
- object 안에 있는 가격끼리 빼니 정렬 완료

<br>

---

<br>

products 자료는 정렬했지만 html은 정렬 X
---
- html도 새로 만들라고 코드 작성해야 하 ㅁ

    - 가격순 정렬버튼 누르면

    - products 자료를 가격순으로 정렬

    - 지금 있는 카드 3개 지우고 products 갯수만큼 카드를 재생성 

<br>

> html 변경
```js
var products = 생략;

$('#price').click(function(){

      products.sort(function(a, b){
        return a.price - b.price
      });

      $('.row').html('');

      products.forEach((a, i)=>{
        var 템플릿 = 
        `<div class="col-sm-4">
          <img src="https://via.placeholder.com/600" class="w-100">
          <h5>${products[i].title}</h5>
          <p>가격 : ${products[i].price}</p>
        </div>`;
        $('.row').append(템플릿)
      })
}); 
```
1. id="price" 인 버튼 생성

2. 누르면 products 자료 정렬

3. 상품목록 html 초기화 및 3개 재생성 + 데이터바인딩

<br>

---

<br>

array에 자주 쓰는 filter 함수 
---
- filter 함수 : array 자료에서 원하는 자료만 필터링하고 싶을 때 사용

<br>

> 사용법
```js
var 어레이 = [7,3,5,2,40];

var 새어레이 = 어레이.filter(function(a){
  return 조건식
}); 
```
1. a라고 작명한건 array 에 있던 데이터

2. return 우측에 조건식을 넣으면 조건식에 맞는 a 반환

3. filter는 원본 변형 X → 새로운 변수에 담아 사용

<br>

> ex. 4 미만인 숫자
```js
var 어레이 = [7,3,5,2,40];

var 새어레이 = 어레이.filter(function(a){
  return a < 4
}); 
```
- 출력 결과 :`[2, 3]`

- 응용하면 쇼핑몰에서 `6만원 이하 상품만 보기` 같은 필터기능 가능

    - products라는 자료에서 6만원 이하만 필터
    
    - 새로 html 생성

<br>

---

<br>

array에 자주 쓰는 map 함수
---
- map 함수 : array 안의 자료들을 전부 변형할 때 사용

<br>

> 사용법
```js
var 어레이 = [7,3,5,2,40];

var 새어레이 = 어레이.map(function(a){
  return 수식
}); 
```
1. a라고 작명한건 array 에 있던 데이터

2. return 우측에 변경될 수식

3. map은 원본 변형 X → 새로운 변수에 담아 사용

<br>

> ex. array 안의 숫자들을 전부 * 4
```jx
var 어레이 = [7,3,5,2,40];

var 새어레이 = 어레이.map(function(a){
  return a * 4
}); 
```
- 출력 결과 : `[28, 12, 20, 8, 160]`
 
- 응용하면 쇼핑몰에서 `달러 -> 원화로 변환하기` 기능 가능

    - array 안에 있는 숫자들을 달러가격이라 가정
    
        - 원화가격으로 변경하려면 map 써서 환율 곱해주기

<br>


### 💡 sort 함수는 원본 변형
- 원본을 변형시켜버리면 나중에 원본으로 되돌아갈 수 없음

- array/object 자료 조작시엔 원본을 따로 복사해두고 조작하는 경우도 있음

<br>

---

<br>

응용
---
### 1. "상품명 다나가순 정렬" 버튼과 기능
- 누르면 상품이 '다나가' 순으로 정렬

> html
```html
<div class="container my-3">
  <button class="btn btn-danger" id="sort1">다나가순정렬</button>
</div>
```

> javascript
```js
var products = 생략;

$('#sort1').click(function(){
  
  products.sort(function(a, b){
    if (a.title < b.title) {
      return 1
    } else {
      return -1
    }
  });
  
  console.log(products)

  $('.row').html(''); // 기존 카드 다 없애기
  products.forEach((a, i)=>{
    var 템플릿 = `<div>상품명은 ${products[i].title}</div>`;
    $('.row').append(템플릿)
  })
});
```

<br>

### 2. "6만원 이하 상품보기" 버튼과 기능
- 누르면 6만원 이하 상품만 노출
> html
```html
<div class="container my-3">
  <button class="btn btn-danger" id="filter">6만원이하</button>
</div>
```

> javascript
```js
var products = 생략;

$('#filter').click(function(){
  
  var newProduct = products.filter(function(a){
    return a.price <= 60000
  });
  
  console.log(newProduct)

  $('.row').html(''); // 기존 카드 다 없애기
  products.forEach((a, i)=>{
    var 템플릿 = `<div>상품명은 ${products[i].title}</div>`;
    $('.row').append(템플릿)
  })
});
```
- 6만원 이하인 상품만 newProduct라는 변수에 남음

<br>

> arrow function
```js
//일반함수
var newProduct = products.filter(function(a){
  return a.price <= 60000
}); 

//화살표함수
var newProduct = products.filter(a => a.price <= 60000);
```
- 가독성보다는 그냥 코드를 줄이고 싶으면 arrow function 사용

- 함수에 파라미터가 1개면 소괄호 생략이 가능

- 함수 { } 안에 return 한 줄 밖에 없으면 중괄호와 return 동시에 생략가능

<br>

### 3. \<input>을 이용해 유저가 직접 가격을 입력해서 필터하는 기능
> html
```html
<div class="d-flex justify-center mt-3">
    <input type="search" class="search-price">
    <button type="submit" class="search-price-btn">가격검색</button>
</div>
```

> javascript
```js
<script>
    $('.search-price-btn').click(function(){
        console.log($('.search-price').val());
        var searchPrice = $('.search-price').val();
        var newProducts = products.filter(function(a){
            return a.price == searchPrice;
        });

        $('.row').html('');

        newProducts.forEach((a, i)=>{
            var card = 
            `<div class="col-sm-4">
                <img src="https://via.placeholder.com/600" class="w-100">
                <h5>${newProducts[i].title}</h5>
                <p>가격 : ${newProducts[i].price}</p>
            </div>`;
            $('.row').append(card);
        }) 
    });
</script>
```

<br>

### 4. 원래 순서대로 되돌리기 버튼과 기능
> html
```html
<div class="d-flex justify-left mt-3">
    <button class="btn btn-secondary m-1 reset">되돌리기</button>
</div>
```

> javascript
```js
<script>
    $('.reset').click(function(){
        var productsCopy = JSON.parse(JSON.stringify(products));
        productsCopy.sort((a, b)=>{
            return a.id - b.id;
        });
        
        $('.row').html('');

        productsCopy.forEach((a, i)=>{
            var card = 
            `<div class="col-sm-4">
                <img src="https://via.placeholder.com/600" class="w-100">
                <h5>${productsCopy[i].title}</h5>
                <p>가격 : ${productsCopy[i].price}</p>
            </div>`;
            $('.row').append(card);
        })  
    });
</script>
```

<br>