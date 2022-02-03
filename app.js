// ==는 동등연산자

// let subject = "자바스크립트";

// switch (subject) {
//   case "C언어":
//     console.log("초보자를 위한 C++");
//     break;
//   case "자바스크립트":
//     console.log("초보자를 위한 자바스크립트 200제");
//     break;
// // }

// for (let i = 0; i < 10; i++) {
//   console.log(`${i} 번째 반복 문장입니다.`);
// }

// var hometown = [
//   { name: "남준", place: "일산", city: "고양" },
//   { name: "진", place: "과천" },
//   { name: "호석", place: "광주", city: "전라도" },
//   { name: "지민", place: "부산", city: "경상도" },
// ];

// for (let i = 0; i < hometown.length; i++) {
//   const h = hometown[i];
//   if (!h || !h.city) continue;

//   console.log(`${i} 번째 실행입니다.`);

//   if (h.name === "호석") {
//     console.log(`${h.name} 의 고향은 ${h.city} ${h.place} 입니다.`);
//     break;
//   }

// var store = { snack: 1000, flower: 5000, beverage: 2000 };

// for (const item in store) {
//   if (!store.hasOwnProperty(item)) {
//     continue;
//   }

//   console.log(`${item}는 가격이 ${store[item]} 입니다.`);
// }

// var hometown = [
//   { name: "진", city: "과천" },
//   { name: "남준", place: "일산", city: "고양" },
//   { name: "호석", place: "광주", city: "전라도" },
//   { name: "지민", place: "부산", city: "경상도" },
// ];

// var hometown = [
//   { name: "진", city: "과천" },
//   { name: "남준", place: "일산", city: "고양" },
//   { name: "호석", place: "광주", city: "전라도" },
//   { name: "지민", place: "부산", city: "경상도" },
// ];

// var isHometown = function (h, name) {
//   console.log(`함수가 실행되었습니다. ${h.city} 도시에서 ${name} 을 찾습니다.`);

//   if (h.name === name) {
//     console.log(`${h.name} 의 고향은 ${h.city} ${h.place} 입니다.`);
//     return true;
//   }
//   return false;
// };

// var h;
// while ((h = hometown.shift())) {
//   if (!h.name || !h.place || !h.city) continue;

//   var result = isHometown(h, "호석");
//   if (result) break;
// }

// var i = 0;
// var names = ["남준", "정국", "윤기", "호섭"];
// var cities = ["경기", "부산", "대구", "광주"];
// do {
//   hometown[i] = { name: names[i], city: cities[i] };
//   i++;
// } while (i < 4);

// console.log(hometown);

// var value = null;
// console.log(null);
// console.log(typeof value);

// var values;
// console.log(values);
// console.log(typeof values);

// 동등연산자 ==
// 부등연산자 !=
// 일치연산자 ===
// 불일치연산자 !==

// 논리연산자

// && AND

// || OR

// ! NOT

// 삼항연산자;

// 조건문 ? 표현문1 : 표현문2;

// var condition = 5 > 10;

// condition ? console.log("left") : console.log("right");

// var result = condition
//   ? (console.log("삼항연산식의 첫번째 표현식 입니다."), "표현식1")
//   : (console.log("삼항연산식의 두번째 표현식 입니다."), "표현식2");

// console.log(result);

// 비트연산자

// 비트 연산자는
// >비트 논리 연산자 AND : & , NOT : ~ , OR : | , XOR : ^
// >비트 이동 연산자 >>, <<, >>>

// console.log(14 & 11);
// console.log(~14);
// console.log(14 | 11);
// console.log(14 ^ 11);
// console.log(2 << 2);
// console.log(14 >> 1);
// console.log(14 >>> 2);

// const test = 170;

// console.log(test.toString(2));

// console.log("5" + 1);
// console.log("5" - 1);
// console.log("5" * 2);
// console.log("There is " + 5);
// console.log("Five" * 2);

// console.log("- 연산자를 활용한 자료형 변환");
// var str = 5 + "1";
// console.log(str);
// console.log(typeof str);

// var num = +str;
// console.log(num);
// console.log(typeof num);

// console.log("- 함수를 활용한 자료형 변환");
// str = String(num);
// console.log(str);
// console.log(typeof str);

// num = Number(str);
// console.log(num);
// console.log(typeof num);

// const arr = [1, 2, 3, 4, 5];

// console.log(arr.length);

// arr[7] = 6;

// console.log(arr[4]);
// console.log(arr[5]);
// console.log(arr[6]);
// console.log(arr[7]);

// JSON : 자바스크립트의 객채와 매우 유사한 구조를 지닌 데이터 교환 형식

// "key" : value 의 값으로 이루어져있고 value는 항상 문자열, 숫자, 배열, ture, false, null로만 이루어져있음

// var family = {
//   address: "seoul",
//   members: {},
//   addFamily: function (age, name, role) {
//     this.members[role] = {
//       age: age,
//       name: name,
//     };
//   },
//   getHeadcount: function () {
//     return Object.keys(this.members).length;
//   },
// };

// family.addFamily(30, "chole", "aunt");
// family.addFamily(2, "lynn", "niece");
// family.addFamily(26, "seunghun", "bot");

// console.log(family.getHeadcount());

// var printMembers = function () {
//   let members = family.members;

//   for (const x in members) {
//     console.log(
//       `role => ${x}, name => ${members[x].name}, age => ${members[x].age}`
//     );
//   }
// };

// 206~211 닷 연결로 왜 안되는지 알아보기..

// printMembers();

// const members = family.members;

// members["nephew"] = { age: 3, name: "hyun" };
// members.niece = { age: 50, name: "lyn" };

// delete members.aunt;
// delete members["bot"];

// printMembers();

// 단축 속성명  226 ~ 242로 축약 가능

// const address = "Seoul";
// const members = {};
// const addFamily = function (age, name, role) {
//   this.members[role] = { age, name };
// };
// const getHeadcount = function () {
//   return Object.keys(this.members).length;
// };

// const family = { address, members, addFamily, getHeadcount };

// family.addFamily(30, "chole", "aunt");
// family.addFamily(2, "lynn", "niece");
// family.addFamily(26, "seunghun", "bot");

// console.log(family.getHeadcount());

// 속성 계산명

// var obj = {};

// for (let i = 0; i < 4; i++) {
//   obj[`key${i}`] = i;
// }

// console.log(obj);

// var profile = "chole : 30";

// var person = {
//   [profile]: true,
//   [profile.split(":")[0]]: profile.split(":")[1],
// };

// console.log(person);

// 객채 비구조화 할당

// var obj = { a: 1, b: 2, c: 30, d: 44, e: 5 };

// var { a, c } = obj;

// console.log(`a >>> ${a}`);
// console.log(`c >>> ${c}`);

// var { a: newA = 10, f: newF = 5 } = obj;

// console.log(`newA >>> ${newA}`);
// console.log(`newF >>> ${newF}`);

// 배열 비구조화 할당

// var arr = [1, 2, 30, 44, 5];

// var [b, c, ...rest] = arr;
// console.log(`0) b >>> ${b}`);
// console.log(`0) c >>> ${c}`);
// console.log(`0) rest >>> ${rest}`);

// var [a = 10, f = 9] = [1];
// console.log(`1) a >>> ${a}`);
// console.log(`1) f >>> ${f}`);

// [a, f] = [f, a];
// console.log(`2) a >>> ${a}`);
// console.log(`2) f >>> ${f}`);

// function getArr() {
//   return [1, 2, 3, 4, 5, 6];
// }
// [a, , , , , f] = getArr();
// console.log(`3) a >>> ${a}`);
// console.log(`3) f >>> ${f}`);

// 심볼형 이해하기 <조금더 검색해서 보기 211217일 마지막>

// const symbol = Symbol();
// const hello = Symbol("hello");

// console.log(Number(3) === Number(3));
// console.log(Symbol("symbol") === Symbol("symbol"));
// console.log(Symbol() === Symbol());
// console.log(typeof Symbol());

// const nationility = Symbol("nationility");
// const user = {
//   name: "jay",
// };
// user[nationility] = "korean";
// console.log(user[nationility]);

// for (let key in user) {
//   console.log(key);
// }
// console.log(Object.keys(user));
// console.log(Object.getOwnPropertyNames(user));
// console.log(JSON.stringify(user));

// const symbolProperties = Object.getOwnPropertySymbols(user);
// console.log(symbolProperties);
// console.log(user[symbolProperties[0]]);

// 함수 표현식과 함수 선언문

// 예외 처리하기 throw and try-catch-finally

// function checkNumber(val) {
//   if (typeof val !== "number") throw "유효하지 않은 값입니다.";
//   {
//     console.log("숫자형 값으로 확인 되었습니다.");
//   }
// }

// checkNumber(100);
// checkNumber("something");
// console.log("완료");

// function checkNumber(val) {
//   if (typeof val !== "number") throw "유효하지 않은 값입니다.";
//   {
//     console.log("숫자형 값으로 확인되었습니다.");
//   }
// }

// try {
//   checkNumber(100);
//   checkNumber("something");
// } catch (error) {
//   console.log(`에러 <${error}> 가 발생하였습니다. 시스템을 종료합니다.`);
// } finally {
//   console.log("시스템 종료");
// }

// arguments 객체 이해하기

// function sum() {
//   let total = 0;
//   for (let i = 0; i < arguments.length; i++) {
//     total += arguments[i];
//   }
//   console.log(arguments instanceof Array);
//   return total;
// }

// const sum1to3 = sum(1, 2, 3);
// console.log(sum1to3);

// function testArg() {
//   const newArr = Array.prototype.slice.call(arguments);
//   console.log(newArr);
//   console.log(newArr.indexOf("b"));
//   console.log(arguments.indexOf("b"));
// }

// testArg("a", "b");

// 함수 기본 매개변수 설정하기

// function drawChart(width = 200, height = 400) {
//   console.log(`${width} X ${height} 차트`);
// }

// drawChart(100);
// drawChart();

// function drawChart_2(width = 200, height = width / 2) {
//   console.log(`${width} X ${height} 차트`);
// }

// drawChart_2();
// drawChart_2(2500);

// 나머지 매개변수 이해하기

// function sum(...args) {
//   var total = 0;
//   for (let i = 0; i < args.length; i++) {
//     total += args[i];
//   }
//   console.log(args.indexOf(1));
//   return total;
// }

// console.log(sum(1, 2, 3));

// function sum2(a, b, ...others) {
//   var total = 0;
//   for (let i = 0; i < others.length; i++) {
//     total += others[i];
//   }
//   return total;
// }

// console.log(sum2(1, 2));
// console.log(sum2(1, 2, 3, 4));

// 스코프 개념 이해하기

// var a = 10;
// console.log(a);

// function print() {
//   var b = 20;
//   if (true) {
//     var c = 30;
//   }
//   console.log(c);
// }

// print();

// console.log(b);

// 자바스크립트는 렉시컬 스코프로 정적스코프라고 부른다.

// var a = "global";

// function test1() {
//   console.log(a);
// }

// function test2() {
//   var a = "local";
//   test1();
// }

// test1();
// test2();

// 함수 호이스팅 : 함수를 선언하기전에 호출이 가능한 현상을 호이스팅이라고 함.
// 즉 끌어올리기

// hello();

// function hello() {
//   console.log("안녕하세요");
// }

// hello2();

// var hello2 = function (params) {
//   console.log("안녕하세요");
// };

// let은 블럭 단위의 유효범위를 가짐

// let value = "outline";

// if (true) {
//   console.log(value);
//   let value = "inline";
// }

// 객체의 형태는 이름과 새로운 객체로 할당하지 못함. 객체의 내부 상태만 변경 가능함

// const URL = "something";
// URL = "something";

// if (true) {
//   const URL2 = "something";
//   console.log(URL2);
// }

// 2021년 12월 20일 월요일 객체 속성 기술자 이해하기.

// let user = {
//   name: "jeado",
// };
// let descriptor = Object.getOwnPropertyDescriptor(user, "name");
// console.log(descriptor);

// configurable는 속성기술자를 나중에 변경을 할 수 있는가를 확인
// writable는 값을 변경할 수 있는가
// enumerable for~in 또는 Object.keys를 통해서 나열 할 수 있는가를

// let user2 = {};
// Object.defineProperty(user2, "name", {
//   value: "jeado",
//   enumerable: true,
//   configurable: true,
//   writable: false,
// });
// console.log(user2.name);
// user2.name = "bbo";
// console.log(user2.name);

// let user3 = {
//   name: "jeado",
//   toString() {
//     return this.name;
//   },
// };
// Object.defineProperty(user3, "toString", {
//   enumerable: false,
// });

// for (let key in user3) {
//   console.log(key);
// }

// let user4 = {};
// Object.defineProperty(user4, "name", {
//   value: "jeado",
//   configurable: false,
// });
// delete user4.name;
// console.log(user4);
// Object.defineProperty(user4, "name", {
//   writable: true,
// });

// Get, Set을 통한 속성 접근 및 관리하기.

// let user = {};

// Object.defineProperty(user, "age", {
//   get: function () {
//     return this._age;
//   },
//   set: function (age) {
//     if (age < 0) {
//       console.error("0보다 작은 값은 올 수 없습니다.");
//     } else {
//       this._age = age;
//     }
//   },
//   enumerable: true,
// });

// user.age = 10;
// console.log(user.age);
// user.age = -1;

// let user2 = {
//   get name() {
//     return this._name;
//   },
//   set name(val) {
//     if (val.length < 3) {
//       throw new Error("3자 이상이어야 합니다.");
//     }
//     this._name = val;
//   },
// };

// user2.name = "harin";
// console.log(user2.name);
// user2.name = "hi";

//화살표 함수 이해 하기

// const double = (x) => x + x;
// console.log(double(2));

// const add = (a, b) => a + b;

// console.log(add(3, 6));

// const printArguments = () => {
//   console.log(arguments);
// };

// // printArguments(1, 2, 3);

// const sum = (...args) => {
//   let total = 0;
//   for (let i = 0; i < args.length; i++) {
//     total += args[i];
//   }
//   return total;
// };

// console.log(sum(1, 2, 3));

// setTimeout(() => {
//   console.log("화살표함수!");
// }, 2);

// 자바스크립트 객체 지향 프로그래밍 이해

// const teacherJay = {
//   name: "제이",
//   age: 40,
//   teachJavascript: function (student) {
//     student.gainExp();
//   },
// };

// const studentBbo = {
//   name: "뽀",
//   age: 20,
//   exp: 0,
//   gainExp: function () {
//     this.exp++;
//   },
// };
// console.log(studentBbo.exp);
// teacherJay.teachJavascript(studentBbo);
// console.log(studentBbo.exp);

// const studentProto = {
//   gainExp: function (exp) {
//     this.exp++;
//   },
// };

// const harin = {
//   name: "하린",
//   age: 10,
//   exp: 0,
//   __proto__: studentProto,
// };

// const bbo = {
//   name: "뽀",
//   age: 20,
//   exp: 10,
//   __proto__: studentProto,
// };

// bbo.gainExp();
// harin.gainExp();
// harin.gainExp();
// console.log(harin);
// console.log(bbo);

// 생성자 함수 이해하기 2021월 12월 21일

// function Teacher(name, age, subject) {
//   this.name = name;
//   this.age = age;
//   this.subject = subject;
//   this.teach = function (student) {
//     console.log(`${student} 에게 ${this.subject}를 가르칩니다.`);
//   };
// }

// const jay = new Teacher("jay", 26, "java");
// console.log(jay);

// jay.teach("bo");

// console.log(jay.constructor);
// console.log(jay instanceof Teacher);

// const jay2 = Teacher("jay", 30, "java");

// console.log(jay2);

// console.log(age);

// 프로토타입 기반 상속 이해하기 >> 생활코딩 강의 듣고 이해하기

// function Storage() {
//   this.dataStore = {};
// }

// Storage.prototype.put = function (key, data) {
//   this.dataStore[key] = data;
// };

// Storage.prototype.getData = function (key) {
//   return this.dataStore[key];
// };

// const productStorage = new Storage();

// productStorage.put("id001", { name: "키보드", price: 2000 });
// console.log(productStorage);
// console.log(productStorage.getData("id001"));

// function RemovableStorage() {
//   Storage.call(this);
// }

// RemovableStorage.prototype = Object.create(Storage.prototype);

// RemovableStorage.prototype.removeAll = function () {
//   this.dataStore = {};
// };

// const productStorage2 = new RemovableStorage();

// productStorage2.put("id001", { name: "키보드", price: 2000 });

// productStorage2.removeAll();
// const item2 = productStorage2.getData("id001");
// console.log(item2);

// 클래스 정의하기

// class Cart {
//   constructor() {
//     this.store = {};
//   }

//   addProduct(product) {
//     this.store[product.id] = product;
//   }

//   getProuduct(id) {
//     return this.store[id];
//   }
// }

// const cart1 = new Cart();

// cart1.addProduct({ id: 1, name: "노트북" });
// console.log(cart1.store);

// const p = cart1.getProuduct(1);
// console.log(p);

//클래스 상속 이해하기

// class Chart {
//   constructor(width, height) {
//     this.height = height;
//     this.width = width;
//   }

//   drawLine() {
//     console.log("draw line");
//   }
// }

// class BarChart extends Chart {
//   constructor(width, height) {
//     super(width, height);
//   }

//   draw() {
//     this.drawLine();
//     console.log(`draw ${this.width} X ${this.height} barChart`);
//   }
// }

// const barchart1 = new BarChart(100, 100);
// barchart1.draw();

// 클래스 정적 메소드와 속성 정의하기

//정적 메소드는 클래스를 통해서 직업 호출하는 메소드

// class Product {
//   static build(name, price) {
//     const id = Math.floor(Math.random() * 1000);
//     return new Product(id, name, price);
//   }

//   static getTaxPrice(Product) {
//     return Product.price * 0.1 + Product.price;
//   }

//   constructor(id, name, price) {
//     this.id = id;
//     this.name = name;
//     this.price = price;
//   }
// }

// class DeposableProduct extends Product {
//   depose() {
//     this.deposed = true;
//   }
// }

// const gum = Product.build("껌", 1000);
// console.log(gum);

// const clothes = new DeposableProduct(1, "옷", 2000);
// console.log(clothes);
// const taxPrice = DeposableProduct.getTaxPrice(clothes);
// console.log(taxPrice);

//클래스를 정의할 때 static 과 get 키워드를 통해서 정의할 수 있음

// class ProductWithCode {
//   static get CODE_PREFIX() {
//     return "PRODUCT-";
//   }

//   constructor(id) {
//     this.id;
//     this.code = ProductWithCode.CODE_PREFIX + id;
//   }
// }

// const product1 = new ProductWithCode("001");

// console.log(ProductWithCode.CODE_PREFIX);
// console.log(product1.code);

// this.valueA = "a";
// console.log(valueA);
// valueB = "b";
// console.log(this.valueB);

// function checkThis() {
//   console.log(this);
// }
// function checkThis2() {
//   "use strict";
//   console.log(this);
// }
// checkThis();
// checkThis2();

// function Product(name, price) {
//   this.name = name;
//   this.price = price;
// }
// const product1 = new Product("가방", 2000);
// console.log(window.name);
// console.log(window.price);

// const product2 = {
//   name: "가방2",
//   price: 3000,
//   getVAT() {
//     return this.price / 10;
//   },
// };
// const valueOfProduct2 = product2.getVAT();
// console.log(valueOfProduct2);

// const calVAT = product2.getVAT;
// const VAT2 = calVAT();
// console.log(VAT2);

// const newCalVAT = calVAT.bind(product2);
// const VAT3 = newCalVAT();
// console.log(VAT3);

// const counter1 = {
//   count: 0,
//   addAfter1Sec() {
//     setTimeout(function () {
//       this.count += 1;
//       console.log(this.count);
//     }, 1000);
//   },
// };
// counter1.addAfter1Sec();

// const counter2 = {
//   count: 0,
//   addAfter1Sec() {
//     setTimeout(() => {
//       this.count += 1;
//       console.log(this.count);
//     }, 1000);
//   },
// };
// counter2.addAfter1Sec();

// 모듈 이해하기 12월 24일

// const namespace = (function () {
//   var privateVariable = "비공개변수";
//   return {
//     publicApi: function () {
//       console.log(`${privateVariable}를 접근할 수 있습니다.`);
//     },
//   };
// })();

// namespace.publicApi();

// import { hello } from "./hello.js";

// hello("es6 module");

// import Hello from "./hello.js";

// const koreanHi = new Hello("안녕하세요.");
// koreanHi.hi("하린");

// import { add, version, personA, Person } from "./hello.js";

// const result = add(1, 2);

// const harin = new Person("하린");

// console.log(result);
// console.log(harin.name);
// console.log(version);
// console.log(personA.name);

// import { version as moduleVersion } from "./version.js";

// const version = "v0";
// console.log(moduleVersion);

// import { test } from "./version.js";
// console.log(test);

//중급 시작

//표준 내장 객체 이해하기  12월 25일

// const str = new String("자바스크립트");
// const num = new Number(200);
// const bool = new Boolean(true);
// const date = new Date();
// const map = new Map();
// const set = new Set();

// console.log(Math.PI);
// console.log(Date.parse("2019-01-01"));
// console.log(JSON.parse("{}"));

// console.log(str);
// console.log(str[2]);
// console.log(num);
// console.log(bool);

// console.log(Math.PI);
// console.log(Date.parse("2019-01-01"));
// console.log(JSON.parse("{}"));

// const str1 = "자바스크립트 200제";
// const str2 = new String("자바스크립트 200제");

// console.log(typeof str1);
// console.log(typeof str2);

// const str = "JavaScript";
// const strObj = new String("JavaScript");
// const num = 200;
// const numObj = new Number(200);
// const bool = true;
// const boolObj = new Boolean(true);
// const func = function () {};
// const arr = [10, 200, 4000];
// const obj = { a1: "test" };
// const empty = null;
// const notCalled = undefined;

// console.log(typeof str === "string");
// console.log(typeof strObj === "object");
// console.log(typeof num === "number");
// console.log(typeof numObj === "object");
// console.log(typeof bool === "boolean");
// console.log(typeof boolObj === "object");
// console.log(typeof func === "function");
// console.log(typeof arr === "object");
// console.log(typeof obj === "object");
// console.log(typeof empty === "object");
// console.log(typeof notCalled === "undefined");

// console.log(str instanceof String);
// console.log(strObj instanceof String);
// console.log(num instanceof Number);
// console.log(numObj instanceof Number);
// console.log(bool instanceof Boolean);
// console.log(boolObj instanceof Boolean);
// console.log(arr instanceof Array);
// console.log(obj instanceof Object);
// console.log(func instanceof Function);
// console.log(empty instanceof Object);
// console.log(notCalled instanceof undefined);

// NaN 값 확인하기

// console.log(Number.isNaN(NaN));
// console.log(Number.isNaN(undefined));
// console.log(Number.isNaN("Is it Number?"));
// console.log(Number.isNaN(0));
// console.log(Number.isNaN(null));
// console.log(Number.isNaN(-1));
// console.log(Number.isNaN(0 / 0));
// console.log(Number.isNaN(new Date()));
// console.log(Number.isNaN(new Date().toString));
// console.log(Number.isNaN("Infinity"));

// function verifyNumber(n) {
//   if (!n || Number.isNaN(n)) {
//     return 0;
//   }
//   return n;
// }
// const num1 = verifyNumber(15); // 15
// const num2 = verifyNumber(undefined); // 0
// const num3 = verifyNumber(null); // 0
// const num4 = verifyNumber(NaN); // 0
// console.log(num1 + num2 + num3 + num4);

// function callRoll(students) {
//   if (!Array.isArray(students)) {
//     return;
//   }
//   {
//     students.forEach((students) => {
//       console.log(`Are you here, ${students}`);
//     });
//   }
// }

// const students = ["jun", "Ail", "Murry", "Toby"];

// callRoll(students);

// const sentences = [
//   "   ABC abc",
//   "ABC abc   ",
//   ` first
// second third
//         forth
// sentence

// `,
// ];

// const filterSentence = (sentences) => {
//   const filtered = [];
//   sentences.forEach((s) => {
//     filtered.push(s.trim());
//   });
//   return filtered;
// };
// console.log(filterSentence(sentences));

// const sentence = "The sun will shine on us again";
// console.log(sentence.slice(13));
// console.log(sentence.slice(13, 24));
// console.log(sentence.slice(0));
// console.log(sentence.slice(0, -23));
// console.log(sentence.slice(50));
// console.log(sentence.slice(7, 2));

// const sentence2 = "This will be the end of Wakanda";
// console.log(sentence2.substring(13));
// console.log(sentence2.substring(13, 20));
// console.log(sentence2.substring(0));
// console.log(sentence2.substring(0, -20));
// console.log(sentence2.substring(50));
// console.log(sentence2.substring(20, 13));

// const sentence3 = "Wakanda Forever!!!";
// console.log(sentence3.substr(8));
// console.log(sentence3.substr(8, 7));
// console.log(sentence3.substr(0));
// console.log(sentence3.substr(-10));
// console.log(sentence3.substr(0, -3));
// console.log(sentence3.substr(30));
// console.log(sentence3.substr(0, 30));

//문자열 길이 구하기 짧은 문자 배열에 넣기 연습

// const arr = [
//   "short",
//   "long sentence, it is not appropriate",
//   "something",
//   "seunghun",
// ];

// const shortArr = [];
// arr.forEach((str) => {
//   if (str.length < 10) {
//     console.log(str);
//     shortArr.push(str);
//   }
// });

// console.log(shortArr);

//문자열로 변환하기

// const num = 5;
// const bool = true;
// const str = "문자열 값";
// const arr = [1, 2, 3];
// const obj = { a: 15 };

// console.log(num.toString());
// console.log(bool.toString());
// console.log(str.toString());
// console.log(arr.toString());
// console.log(obj.toString());

// num.__proto__.toString = () => {
//   return "toString 덮어쓰기";
// };
// console.log(num.toString());

// 특정 문자열 위치 확인하기 indexOf lastIndexOf

// const str = "Carpe diem, seize the day";
// console.log(`"e" 는 ${str.indexOf("e")} 번째 인덱스에 있습니다.`);
// console.log(`대문자 "C" 는 ${str.indexOf("C")} 번째 인덱스에 있습니다.`);
// console.log(`소문자 "c" 는 ${str.indexOf("c")} 번째 인덱스에 있습니다.`);
// console.log(`문자열 ", se" 는 ${str.indexOf(", se")} 번째 인덱스에 있습니다.`);

// const arr = ["Carpe", "diem", "seize", "the", "day"];

// const howManyHasE = (arr) => {
//   let count = 0;
//   arr.forEach((str) => {
//     if (str.indexOf("e") > -1) {
//       count++;
//     }
//   });
//   return count;
// };

// console.log(`${arr}에 "e"가 있는 요소는 모두 ${howManyHasE(arr)}개 입니다.`);

//특정 문자열 포함 여부 확인하기. includes
//문자열 대소문자 변환하기..

// const str = "Make your lives extradordinary";
// const upperStr = str.toUpperCase();

// const findUpper = "make".toUpperCase();

// console.log(str.includes("Make"));
// console.log(upperStr.includes(findUpper));
// console.log(str.includes("Make", 1));

//배열 요소를 분할 및 변환하기 12월 27일

// const str = "12345678";

// const distributedArr = Array.from(str);
// console.log(distributedArr);

// const modifiedArr = Array.from(distributedArr, (el) => el * 2);
// console.log(modifiedArr);

//문자열을 특정 구분자에 의해 배열로 나누기(split)

// const capitals = `Prague,Czech Republic
// Copenhagen,Denmark
// Paris,France
// Madrid,Spain
// Rome,Italy`;

// capitals.split("\n").forEach((s) => {
//   const capital = s.split(",")[0];
//   const country = s.split(",")[1];
//   console.log(`${capital} is in ${country}`);
// });

//배열 뒤에 요소 추가하기(push, unshift)

// const festa = ["mang"];
// festa.push("chimy");
// festa.unshift("jk roll");

// console.log(festa[0]);

//배열 길이 구하기를 통한 승객 인원 수 측정

// const ship = {
//   max: 4,
//   passengers: [],
//   onBoard: function (name) {
//     if (this.passengers.length === this.max) {
//       console.log(`full ship now sorry ${name} can not OnBoard this ship`);
//     }
//     {
//       this.passengers.push(name);
//       console.log(`${name} is OnBoard`);
//     }
//   },
// };

// ship.onBoard("jim");
// ship.onBoard("kum");
// ship.onBoard("kim");
// ship.onBoard("seung");
// ship.onBoard("nanacon");

// console.log(ship.passengers);

//배열 합치기 (concat)

// const prevList = [1, 2, 3];
// const currentList = [4, 5, 6];
// const nextList = [7, 8, 9];

// console.log(prevList.concat(currentList));
// console.log(prevList.concat(currentList, nextList));

// console.log(["배열"].concat("합치기"));
// console.log(["배열"].concat("합치기", "JavaScript200"));

//배열에 특정 구분자 넣어 문자형 변환하기 (join)

// const dialogue = [
//   "Fear is the path to the dark side",
//   "Fear leads to anger",
//   "Anger leads to hate",
//   "Hate leads to suffering",
//   "I sense much fear in you.",
// ];

// console.log(dialogue.join(". "));
// console.log(dialogue.join(".\n"));

//배열 마지막 요소 추출 하기 pop
//맨앞 요소 추출 하기 shift

// const arr = [1, 2, 3];

// console.log(arr.pop());

// console.log(arr);

//배열 특정 위치 요소 추출하기

// const arr = ["melon", "lemon", "source", "apple", "juice"];
// console.log(
//   `과일이 아닌 요소는 ${arr.slice(2, 3)} 와 ${arr.slice(4, 5)} 입니다.`
// );
// console.log(arr.slice(0, 10));

// 배열 인덱스로 특정 요소 수정하기

// const fruits = ["melon", "lemon", "source", "apple", "juice"];

// fruits.splice(4, 1);
// fruits.splice(4, 0, "grape");
// fruits.splice(2, 1, "mandarin", "strawberry", "watermelon");
// console.log(fruits);

//배열의 특정 요소 위치 확인하기 (indexOf)

// const arr = ["spring", "summer", "fall", "winter", "is", "down"];

// console.log(`"winter" is in this index ${arr.indexOf("winter")}`);
// const notThing = function (name) {
//   if (arr.indexOf(name, 4) === -1) {
//     console.log(`${name} can not found`);
//   } else {
//     console.log(`${name} is in ${arr.indexOf(name)}`);
//   }
// };

// notThing("winter");
// notThing("is");
// notThing("down");

//배열 순환하기 forEach

// const arr = [
//   { id: 0, name: "혜림", age: 6 },
//   { id: 1, name: "현일", age: 3 },
//   { id: 2, name: "현아", age: 5 },
//   { id: 3, name: "우림", age: 2 },
// ];

// arr.forEach((el) => {
//   console.log(el.name);
// });

//배열 정렬하기 sort

// const numArr1 = [2, 0, 3, 4, 1, 8];
// const numArr2 = [2, 0, 3, 4, 1];
// const objArr = [
//   { id: 2, name: "Leo" },
//   { id: 0, name: "Daniel" },
//   { id: 3, name: "Asher" },
//   { id: 4, name: "Chloe" },
//   { id: 1, name: "Chloe" },
// ];
// const objArr2 = [
//   { id: 2, name: "Leo" },
//   { id: 0, name: "Daniel" },
//   { id: 3, name: "Asher" },
//   { id: 4, name: "Chloe" },
//   { id: 1, name: "Chloe" },
// ];

// numArr1.sort(function (a, b) {
//   return a - b;
// });
// numArr2.sort(function (a, b) {
//   return b - a;
// });
// objArr.sort(function (a, b) {
//   return a.name > b.name ? 1 : b.name > a.name ? -1 : 0;
// });

// console.log(objArr);

// const sortId = "id";

// objArr2.sort(function (a, b) {
//   return a[sortId] - b[sortId];
//   //   return a.id - b.id; 이렇게 해도 됨..
// });
// // 아직 모름.. 해결해야함.. 문법문제인듯.. a.sortId로 하면 왜 안되는가..

// console.log(objArr2[0][sortId]); //대괄호를 이용해야지만 변수가 적용되는듯.

// console.log(`오름차순 : ${numArr1}`);
// console.log(`내림차순 : ${numArr2}`);
// console.log(objArr2);

//변수를 설정하는 다양한 방법과 축약어를 저장할 수 있음.

// let str = "Na";
// let bat = "BatMan";

// let batman = `${str.repeat(8)} ${bat}`;

// console.log(batman);

// const person = {
//   first: "Alberto",
//   last: "Montalesi",
//   links: {
//     social: {
//       facebook: "http://www.facebook.com",
//     },
//   },
// };

// const { first, last } = person;
// const { facebook: FB } = person.links.social;

// console.log(first);
// console.log(FB);

// const nameAge = ["Alberto", "Montalesi", 25];

//2022년 1월 8일

//배열의 수서를 반대로 나열하기 reverse

// const str = "abcdefghijklmnopqrstuvwxyz";
// const arr = str.split("");
// console.log(arr);

// arr.reverse();

// console.log(arr);

// console.log(arr.join("-"));

//배열 요소가 특정 조건을 만족하는지 확인하기.
//callback 함수가 무엇인지 찾아보기.
//

// const arr = [
//   { id: 0, name: "혜림", age: 6 },
//   { id: 1, name: "현일", age: 3 },
//   { id: 2, name: "현아", age: 5 },
//   { id: 3, name: "우림", age: 2 },
// ];

// const isHyunAHere = arr.some((el) => el.name == "현아");
// const olderThanSix = arr.some((el) => el.age > 6);

// console.log(isHyunAHere);
// console.log(olderThanSix);

//모든 배열 요소가 특정 조건을 만족하는지 확인하기.

// const arr = [
//   { id: 0, name: "혜림", age: 6 },
//   { id: 1, name: "현일", age: 3 },
//   { id: 2, name: "현아", age: 5 },
//   { id: 3, name: "우림", age: 2 },
// ];

// const isAllHyuna = arr.every((el) => el.name == "현아");

// console.log(isAllHyuna); //모든 배열요소를 확인하는 것이기 때문에 false를 반환함
// // 첫번째 array가 혜림이어서.

// const isAllAgeYoungerThanSeven = arr.every((ag) => ag.age < 7);

// console.log(isAllAgeYoungerThanSeven);

//배열의 특정 조건을 기준으로 필터링하기
//callback 함수는 무조건 boolean으로만 반환되어야함

// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// const fillteredTwo = arr.filter((a) => {
//   console.log(`현재 위치는 ${a} 입니다.`);
//   return a % 2 === 0;
// });

// console.log(fillteredTwo);

// fillteredTwo.reverse();

// console.log(fillteredTwo);

// const filteredThree = arr.filter((a) => a % 3 === 0);
// console.log(filteredThree);

//배열의 특정 고건을 충족하는 요소 찾기
//조건을 만족하는 첫번째 요소를 반환함.
//callback 함수는 무조건 boolean으로만 반환되어야함

// const arr = [
//   { name: "우림", age: 2 },
//   { name: "현아", age: 5 },
//   { name: "탄이", age: 30 },
//   { name: "현일", age: 3 },
//   { name: "혜림", age: 6 },
// ];

// const myFriend = arr.find((a) => a.age == 30);

// console.log(myFriend);

// console.log(myFriend.name);
// console.log(myFriend.age);

//배열 요소 일괄 변경하기
//callback 함수의 리턴값들을 재조합해서 새로운 배열로 저장함.

// const arr = [
//   { id: 0, name: "혜림", age: 6 },
//   { id: 1, name: "현일", age: 3 },
//   { id: 2, name: "현아", age: 5 },
//   { id: 3, name: "우림", age: 2 },
// ];

// const arr2 = arr.map((el) => {
//   el.age = el.age + 1;
//   return el;
// });
// //마지막에 객체를 반환했기 때문에 age가 변경된 객체가 반환됨
// console.log(arr2);

// const arr3 = arr.map((el) => {
//   const newName = `김${el.name}`;
//   return newName;
// });

// //arr3에는 이름만 반환했기때문에  문자열만 나열된 배열이 새로 만들어짐

// console.log(arr3);

// 2022년 1월 9일
// 배열 내에 값을 누적시키기

// reduce( (누적된 값, 현재 인덱스) =>{
//   return 누적값으로 반환되는 값
// }, 초기값)

// const numArr = [1, 2, 3, 4, 5];

// const result = numArr.reduce((acc, el) => {
//   return acc + el;
// }, 0);

// console.log(result);

//reduce를 이용해 중첩된 배열을 단일화 시키기

// concat은 배열을 합칠때 사용됨 acc 배열과 el을 합침

// const arr = [1, [2, 3], [4, 5, 6], ["배열", "나열하기"], "JavaScript"];

// const result = arr.reduce((acc, el) => {
//   return acc.concat(el);
// }, []);

// console.log(result);

// 객체에서 키값 추출하기

// const obj = {
//   movie: "Sunny",
//   music: "Like Sugar",
//   style: "Retro",
//   price: Infinity,
// };

// const arr = Object.keys(obj);

// console.log(arr);

//객체에서 값 value 만 추출하기

// const obj = {
//   movie: "Sunny",
//   music: "Like Sugar",
//   style: "Retro",
//   price: Infinity,
// };

// const arr = Object.values(obj);

// console.log(arr);

//객체를 배열로 변환하기

// const obj = {
//   movie: "Sunny",
//   music: "Like Sugar",
//   style: "Retro",
//   price: Infinity,
// };

// const modifiedObj = Object.entries(obj);
// console.log(modifiedObj);

//객체가 변경되지 않도록 하기

// let obj = {};

// obj.title = "IDOL";
// obj = Object.freeze(obj);
// obj.title = "Euphoria";

// console.log(obj);

// const changeUntilNum = (obj, num) => {
//   "use strict";

//   while (true) {
//     console.log(obj);

//     if (obj.age >= num) {
//       obj = Object.freeze(obj);
//     }
//     obj.age += 1;
//   }
// };

// let profile = { name: "지연", age: 25 };
// changeUntilNum(profile, 30);

//객체에 속성 추가 못하게 만들기
//seal을 엄격모드 use strict가 선언된 상태면 에러가 발생함.
//크롬 자체에서 엄격모드를 실행하든듯?

// const album = {
//   name: "LOVE YOURSELF",
// };

// album.song = "Euphoria";
// album.singer = "RM";

// console.log(album);

// Object.seal(album);

// album.comment = "Answer";
// album.singer = "JK";
// delete album.name;

// console.log(album);

//객체 병합 확장하기

// const obj1 = { one: 1, two: 2, three: 3 };
// const obj2 = { name: "탄이", age: 5, address: "Seoul" };
// const obj3 = { friends: ["혜림", "현아", "현일", "우림"] };

// const newObj1 = Object.assign({}, obj1);
// const newObj2 = Object.assign({}, obj1, obj2);
// newObj1.four = 4;

// console.log(obj1);
// console.log(newObj1);
// console.log(newObj2);

// console.log("\n");

// const newObj3 = Object.assign(obj1, obj3);

// console.log(obj1);
// console.log(newObj1);
// console.log(newObj2);
// console.log(newObj3);

//진수 변환하기
// const dec = 531;

// const binByDex = dec.toString(2);
// const octByDex = dec.toString(8);
// const hexByDex = dec.toString(16);

// console.log(binByDex);
// console.log(octByDex);
// console.log(hexByDex);

//parseInt로 10진수가 아닌 진법을 다른 진법으로 변환가능함.

// const bin = 1000010011;
// const oct = 1023;
// const hex = 213;

// const dexByBin = parseInt(bin, 2);
// const dexByOct = parseInt(oct, 8);
// const dexByhex = parseInt(hex, 16);
// const hexByOct = parseInt(oct, 8).toString(16);

// console.log(dexByBin);
// console.log(dexByOct);
// console.log(dexByhex);
// console.log(hexByOct);

// Math 객체에서 무작위 값을 구하는 random
//random은 0~1사이의 무작위 실수값을 반환함

// const generateRandom = (min, max) => {
//   return Math.floor(Math.random() * (max - min + 1) + min);
// };

// for (let i = 0; i < 5; i++) {
//   console.log(generateRandom(1, 10));
// }

// for (let i = 0; i < 5; i++) {
//   console.log(generateRandom(10, 100));
// }

// const ran = Math.random();

// console.log(ran);

// 특정 자리수에서 반올림하기.

// const val = 573.926;

// console.log(Math.round(val));
// console.log(Math.round(val * 10) / 10);
// console.log(Math.round(val * 100) / 100);
// console.log(Math.round(val / 10) * 10);
// console.log(Math.round(val / 100) * 100);

//특정 자리수에서 올림하기

// const positiveNum = 93.54;
// const negativeNum = -39.27;

// console.log(Math.ceil(positiveNum));
// console.log(Math.ceil(negativeNum));
// console.log(Math.ceil(positiveNum * 10) / 10);
// console.log(Math.ceil(positiveNum / 10) * 10);
// console.log(Math.ceil(negativeNum * 10) / 10);
// console.log(Math.ceil(negativeNum / 10) * 10);

//특정 자리수에서 내림하기

// const positiveNum = 93.54;
// const negativeNum = -39.27;

// console.log(Math.floor(positiveNum));
// console.log(Math.floor(negativeNum));
// console.log(Math.floor(positiveNum * 10) / 10);
// console.log(Math.floor(positiveNum / 10) * 10);
// console.log(Math.floor(negativeNum * 10) / 10);
// console.log(Math.floor(negativeNum / 10) * 10);

//현재 시간을 원하는 포맷으로 출력하기

// Date.prototype.yyyymmdd = function () {
//   const yyyy = this.getFullYear();
//   const mm =
//     this.getMonth() < 9 ? `0${this.getMonth() + 1}` : this.getMonth() + 1;
//   const dd = this.getDate() < 10 ? `0${this.getDate()}` : this.getDate();
//   return "" + yyyy + mm + dd;
// };

////date는 Date 객체에서 상속받은 객체 인스턴트임 new로 만들어냈댜.

// const date = new Date();
// console.log(date.yyyymmdd());

//UTC 기준 날짜 출력하기

// const date = new Date();
// const dateUTC = Date.UTC(
//   date.getUTCFullYear(),
//   date.getUTCMonth(),
//   date.getUTCDate(),
//   date.getUTCHours(),
//   date.getUTCMinutes(),
//   date.getUTCSeconds()
// );

// console.log(new Date(dateUTC));

//두개의 날짜 사이의 경과 시간 계산하기

// Date.daysDiff = (date1, date2) => {
//   if (!(date1 instanceof Date) || !(date2 instanceof Date)) return "";

//   const d1 = date1.getTime();
//   const d2 = date2.getTime();

//   let diff = d2 - d1;

//   console.log(diff);
//   const seconds = Math.floor((diff = diff / 1000) % 60);
//   console.log(diff);
//   const minutes = Math.floor((diff = diff / 60) % 60);
//   console.log(diff);
//   const hours = Math.floor((diff = diff / 60) % 24);
//   console.log(diff);
//   const days = Math.floor(diff / 24);
//   return `${days} days, ${hours} hours, ${minutes} minutes, and ${seconds} seconds`;
// };

// var from = new Date(2000, 0, 1);
// var to = new Date(
//   from.getFullYear() + 1,
//   from.getMonth() + 3,
//   from.getDate() + 5,
//   from.getHours() + 4,
//   from.getMinutes() + 30,
//   from.getSeconds() + 50
// );

// console.log(`From   > ${from}`);
// console.log(`To     > ${to}`);
// console.log(Date.daysDiff(from, to));

//2022년 1월 11일

// JSON을 문자열로 변환하기

// const testStringify = {
//   stringifiedNum: JSON.stringify(13.1),
//   stringifiedStr: JSON.stringify("Kiss Carnival"),
//   stringifiedBln: JSON.stringify(false),
//   stringifiedArr: JSON.stringify([2003, 2017]),
// };

// for (let key in testStringify) {
//   console.log(`----------${key}-----------`);
//   console.log(typeof testStringify[key]);
//   console.log(testStringify[key]);
// }

// console.log(`------------stringifyObj------------`);
// const obj = {
//   drama: "PET",
//   season: 2017,
//   casting: ["koyuki", "matsumoto jun"],
//   character: ["sumire", "momo"],
// };
// console.log(typeof JSON.stringify(obj));
// console.log(JSON.stringify(obj));
// console.log(JSON.stringify(obj, ["drama", "season"]));
// console.log(JSON.stringify(obj, null, 4));
// console.log(
//   JSON.stringify(
//     obj,
//     (key, val) => {
//       if (key === "season") return 2003;
//       return val;
//     },
//     4
//   )
// );

//2022년 1월 12일

//JSON 문자열을 다시 JSON 객체로 변환하기.

// const jsonStr =
//   '{"drama":"PET","season":2017,"casting":' +
//   '["koyuki","matsumoto jun"],"character":["sumire","momo"]}';

// console.log(jsonStr);

// console.log(JSON.parse(jsonStr));
// console.log(
//   JSON.parse(jsonStr, (key, val) => {
//     if (key === "season") val = 2003;
//     return val;
//   })
// );

// console.log(JSON.parse("13.1"));
// console.log(typeof JSON.parse("13.1"));
// console.log(JSON.parse("false"));
// console.log(typeof JSON.parse("false"));

// console.log(JSON.parse("Kiss Carnival"));
// console.log(JSON.parse("[2003, 2017]"));

//정규 표현식으로 대응되는 문자열 위치 확인하기.
//정규 표현식 공부하기.

// const str = "To lose your path is the way to find that path";

// const regex1 = /path/;
// const regex2 = /q/;
// const regex3 = /t/g;
// const regex4 = /t/gi;

// console.log(str.search(regex1));
// console.log(str.search(regex2));
// console.log(str.search(regex3));
// console.log(str.search(regex4));

//정규 표현식으로 문자열 확인하기.

// const str = "To lose your path is the way to find that path";

// const sensitiveCaseRegex = /to/;
// const ignoreAllCaseRegex = /to/gi;
// const findRangeRegex = /([a-f])\w+/i;
// const findAllRangeRegex = /([a-f])\w+/gi;

// console.log(str.match(sensitiveCaseRegex));
// console.log(str.match(ignoreAllCaseRegex));
// console.log(str.match(findRangeRegex));
// console.log(str.match(findAllRangeRegex));

//정규 표현식으로 특정 문자의 포함 여부 확인하기.

// const numRegExp = /[0-9]+/;
// const phoneRegExp = /\d{3}-\d{3,4}-\d{4}$/;
// const emailRegExp = /^([-_.]?[0-9a-zA-Z]{6,13})+\@([0-9a-z]+)\.([a-z]{2,3})$/i;

// console.log(numRegExp.test(12345));
// console.log(numRegExp.test("test"));
// console.log(phoneRegExp.test("010-3003-0046"));
// console.log(phoneRegExp.test("02-8844-1234"));
// console.log(emailRegExp.test("test123@javascript.org"));
// console.log(emailRegExp.test("test-javascript"));

// 정규표현식을 통해서 문자열 배열로 반환하기

// const str = "Java is not in Javascript";

// const result1 = /java/gi.exec(str);
// console.log(result1[0]);
// console.log(result1.index);
// console.log(result1.input);

// const nums = '"1", "2", "3"';
// const regex = /\d+/g;
// while ((result2 = regex.exec(nums))) {
//   console.log(result2, regex.lastIndex);
// }

//정규표현식으로 문자열 치환하기

// console.log("2018-08-03 07-23-14".replace("-", ":"));
// console.log("2018-08-03 07-23-14".replace(/-/g, ":"));
// console.log("2018-08-03 07-23-14".replace(/\d/g, "9"));

// const littleWomen = "Meg March, Jo March, Beth March, Amy March, March Amy ";
// console.log(littleWomen.replace(/\w+ March/gi, "Mrs.$&"));
// console.log(
//   littleWomen.replace(/\w+ March/gi, (str, d1, d2, d3, d4, offset, s) => {
//     let tag = "";
//     if (/Meg/.test(str)) tag = "첫째";
//     else if (/Jo/.test(str)) tag = "둘째";
//     else if (/Beth/.test(str)) tag = "셋째";
//     else if (/Amy/.test(str)) tag = "넷째";

//     console.log(`원작 "작은 아씨들"에서 주인공 ${str}은 ${tag}입니다.`);
//     console.log(d1);
//     console.log(d2);
//     console.log(d3);
//     return tag;
//   })
// );

// const name = "March Amy";
// console.log(name.replace(/(March) (Amy)/, "$2 $1"));
// console.log(
//   name.replace(/(March) (Amy)/, (str, d1, d2, offset, s) => {
//     console.log(`${d2} is name, ${d1} is first name.`);
//     return `${d2} ${d1}`;
//   })
// );

//2022sus 01월 17일

//반복 가능한 객체와 반복자 이해하기

// const items = ["j", "a", "v", "a", "s", "c", "r", "i", "p", "t"];
// const seq = {
//   [Symbol.iterator]() {
//     let i = 0;
//     return {
//       next() {
//         const value = items[i];
//         i++;
//         const done = i > items.length;
//         return { value, done };
//       },
//     };
//   },
// };

// for (let s of seq) console.log(s);
// // const [a, b, c, ...arr] = seq;
// console.log("a >>> ", a);
// console.log("b >>> ", b);
// console.log("c >>> ", c);
// console.log("arr >>> ", arr);

// const str = "hello";

// for (const item of str) {
//   console.log(item);
// }

// const iter = str[Symbol.iterator]();
// console.log(iter.next());
// console.log(iter.next());
// console.log(iter.next());
// console.log(iter.next());
// console.log(iter.next());
// console.log(iter.next());

// map 객체 순환하기

// const map = new Map();

// map.set("one", 1);
// map.set("two", 2);

// console.log("키 정보만 출력합니다");
// for (let key of map.keys()) {
//   console.log(key);
// }

// console.log("값 정보만 출력합니다");
// for (let value of map.values()) {
//   console.log(value);
// }

// console.log("[for..of, entries] 키,값 정보를 동시에 출력합니다");
// for (let [key, value] of map.entries()) {
//   console.log(`키는 ${key}, 값은 ${value} 입니다`);
// }
// console.log("[for..of] 키,값 정보를 동시에 출력합니다");
// for (let [key, value] of map) {
//   console.log(`키는 ${key}, 값은 ${value} 입니다`);
// }
// console.log("[forEach] 키,값 정보를 동시에 출력합니다");
// map.forEach((value, key) => {
//   console.log(`키는 ${key}, 값은 ${value} 입니다`);
// });

// const map = new Map();

// for (let num of [1, 2, 3, 4, 5]) {
//   map.set((value) => value * 2, num);
// }

// console.log(map);

// for (let [func, value] of map) {
//   console.log(func(value));
// }

// const s = new Set();

// s.add("one");
// s.add("two");
// s.add("three");

// console.log(s.has("one"));
// s.delete("one");
// console.log(s.has("one"));
// console.log(s.has("two"));

// const s = new Set();

// s.add("one");
// s.add(2);
// s.add([1, 2, 3]);
// s.add({ a: "A", b: "B" });
// s.add(function () {});

// console.log(s);

// console.log(s.size);
// s.clear();
// console.log(s.size);

// const arr = ["one", "two", "three", "two", "one", "four"];
// const s = new Set(arr);
// console.log(s);
// console.log([...s]);

// const s = new Set();

// s.add("one");
// s.add("two");
// s.add("three");

// const keys = s.keys();
// console.log(keys);
// const values = s.values();
// console.log(values);
// const entries = s.entries();

// console.log(keys.next().value);
// console.log(keys.next().value);
// console.log(keys);

// console.log(values.next().value);
// console.log(values);

// console.log(entries.next().value);

// console.log(keys);
// console.log(values);
// console.log(entries);

// const s = new Set();

// s.add("one");
// s.add("two");

// console.log("키 정보만 출력합니다");
// for (let key of s.keys()) {
//   console.log(key);
// }

// console.log("값 정보만 출력합니다");
// for (let value of s.values()) {
//   console.log(value);
// }

// console.log("[for..of, entries] 키,값 정보를 동시에 출력합니다");
// for (let [key, value] of s.entries()) {
//   console.log(`키는 ${key}, 값은 ${value} 입니다`);
// }
// console.log("[forEach] 키,값 정보를 동시에 출력합니다");
// s.forEach((value, key) => {
//   console.log(`키는 ${key}, 값은 ${value} 입니다`);
// });

// const timer = {
//   run: function () {
//     if (this.t) console.log("이미 실행된 타이머가 있습니다.");

//     this.t = setTimeout(function () {
//       console.log("1초 뒤에 실행됩니다.");
//     }, 1000);
//   },
//   cancel: function () {
//     if (this.t) clearTimeout(this.t);
//     this.t = undefined;
//   },
// };

// timer.run();
// timer.cancel();
// timer.run();

// let count = 0;

// const timer = setInterval(() => {
//   console.log(`${count++} 번째 함수가 실행됩니다.`);
// }, 1000);

// clearInterval(timer);

// function promiseForHomework(mustDo) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("doing homework");
//       if (mustDo) {
//         resolve({
//           result: "homework-result",
//         });
//       } else {
//         reject(new Error("Too lazy!"));
//       }
//     }, 3000);
//   });
// }

// const promiseA = promiseForHomework(true);
// console.log("promiseA created", promiseA);

// const promiseB = promiseForHomework();
// console.log("promiseB created");

// promiseA.then((v) => console.log(v));
// promiseB.then((v) => console.log(v)).catch((e) => console.error(e));

// let myFirstPromise = new Promise((resolve, reject) => {
//   // 우리가 수행한 비동기 작업이 성공한 경우 resolve(...)를 호출하고, 실패한 경우 reject(...)를 호출합니다.
//   // 이 예제에서는 setTimeout()을 사용해 비동기 코드를 흉내냅니다.
//   // 실제로는 여기서 XHR이나 HTML5 API를 사용할 것입니다.
//   setTimeout(function () {
//     resolve("123"); // 와! 문제 없음!
//   }, 250);
// });

// myFirstPromise.then((successMessage) => {
//   // successMessage는 위에서 resolve(...) 호출에 제공한 값입니다.
//   // 문자열이어야 하는 법은 없지만, 위에서 문자열을 줬으니 아마 문자열일 것입니다.
//   console.log("와! " + successMessage);
// });

// function doJob(name, person) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (person.stamina > 50) {
//         resolve({
//           result: `${name} success`,
//           loss: 30,
//         });
//       } else {
//         reject(new Error(`${name} failed`));
//       }
//     }, 1000);
//   });
// }

// const harin = { stamina: 100 };

// doJob("work", harin)
//   .then((v) => {
//     console.log(v);
//     console.log(v.result);
//     harin.stamina -= v.loss;
//     console.log(harin);
//     return doJob("study", harin);
//   })
//   .then((v) => {
//     console.log(v);
//     console.log(v.result);
//     harin.stamina -= v.loss;
//     return doJob("work", harin);
//   })
//   .then((v) => {
//     console.log(v.result);
//     harin.stamina -= v.loss;
//     return doJob("study", harin);
//   })
//   .catch((e) => console.error(e));

// function doJob(name, person) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (person.stamina > 50) {
//         person.stamina -= 30;
//         resolve({
//           result: `${name} success`,
//         });
//       } else {
//         reject(new Error(`${name} failed`));
//       }
//     }, 1000);
//   });
// }

// const harin = { stamina: 100 };

// const execute = async function () {
//   try {
//     let v = await doJob("work", harin);
//     console.log(v.result);
//     v = await doJob("study", harin);
//     console.log(v.result);
//     v = await doJob("work", harin);
//     console.log(v.result);
//     v = await doJob("study", harin);
//   } catch (e) {
//     console.log(e);
//   }
// };

// execute();
