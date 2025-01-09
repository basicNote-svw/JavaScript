# Array 와 Object 자료형
> 여러 데이터들을 변수에 저장해야할 때
```js
var car = '소나타';
var carPrice = 50000;
var carColor = 'white';
```
- 위 방법은 자료가 많아지면 변수도 많이 만들어야 함

    - 한 변수에 여러개의 자료를 저장하는 방법 존재

        - array, object 사용

<br>

---

<br>

Array 자료형 
---
- 여러가지 자료를 한곳에 저장하고 싶을 때 사용하는 자료형
 
> array
```js
var car = ['소나타', 50000, 'white'];
```
- **대괄호**를 열고 자료를 콤마로 구분해 넣기

    - 여러 자료를 엑셀처럼 저장 가능

<br>

> array 자료 데이터 추출
```js
var car = ['소나타', 50000, 'white'];
console.log(car[1]);
```
- array 자료에서 데이터 추출시 인덱스 대괄호 붙이기

    - \[x] 라고 쓰면 x번째 자료 출력

<br>

> array 자료 수정
```js
var car = ['소나타', 50000, 'white'];
car[1] = 60000;
console.log(car[1]);
```
- 등호 이용해 수정

    - 자료 추가도 가능

<br>

---

<br>

Object 자료형 
---
-  여러가지 자료를 한곳에 저장하고 싶을 때 사용하는 자료형

<br>

> object
```js
var car2 = { name : '소나타', price : 50000 };
```
- **중괄호**를 열고 자료를 콤마로 구분해 넣기

    - 자료 왼쪽에 자료의 이름을 붙여서 저장

    - 자료의 이름은 key, 실제 자료는 value

- object 자료형은 key : value 형태로 자료 저장 가능

<br>
 
> object 자료 데이터 추출
```js
var car2 = { name : '소나타', price : 50000 };
console.log(car2['name']);
console.log(car2.name);
```
- object 자료에서 자료이름 대괄호 or . 붙이기

    - [자료이름] 
    
    - .자료이름 
 
<br>
 
> object 자료 수정
```js
var car2 = { name : '소나타', price : 50000 };
car2['name'] = '그랜저';
console.log(car2['name']);
```
- 등호 이용해 수정

    - 자료 추가도 가능

<br>

---

<br>

Array/Object 차이
---
- `상품명, 가격, 연식, 색상, 옵션여부, 카드할인여부 ...` 데이터를 변수하나에 보관한다면

    - array?
    
    - object? (☑️)

<br>

> array
```js
var car = ['소나타', 50000, 2030, 'white', false];
```
- 저장시엔 간단하지만 나중에 자료 뽑을 때 어려움

    - 가격뽑을 때 `가격자료가 몇번째 위치에 있었는지` 기억해내야함

<br>

> object
```js
var car = { name : '소나타', price : 50000, year : 2030 };
```
- 저장은 번거롭지만 나중에 자료 뽑을 때 편함

    - 가격뽑을 때 `가격의 key 이름이 무엇인지`만 기억하면 됨

        - 순서보다 key값 기억하는게 더 쉬움 

<br>

---

<br>

Array/Object 차이 2
---
- array : 순서개념 O 

    - 왼쪽에 적을 수록 더 앞에 있는 자료임

        - array자료.sort() : 가나다순 정렬 가능

        - array자료.slice(x, y) : x번 자료부터 y번 자료까지 자르기 가능

        - x번 자료 바꾸기 가능

        - 맨 뒤, 맨 앞에 자료 넣기 가능

            - array자료.push(x) : 맨 뒤에 입력 가능

        - 원하는 자료가 들어있나 검색 가능

- object : 순서개념 X 

    - 가장 왼쪽에 적었다고 해도 앞 자료라고 보장 X

<br>

---

<br>

object 자료 뽑아서 html에 넣기
---
 
> html
```html
<div class="container mt-3">
  <div class="card p-3">
    <span>상품명</span>
    <span>가격</span>
  </div>
</div> 

<script>
  var car2 = { name : '소나타', price : 50000 } 
</script>
```
- car2 에 저장된 소나타(상품명), 50000(가격)을 뽑아서 html에 넣어보기

<br>

> 정답
```js
document.querySelector('.name').innerHTML = car2.name;
$('.price').html(car2.price);
```

<bs>

 