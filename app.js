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

//배열의 수서를 반대로 나열하기 reverse

// const str = "abcdefghijklmnopqrstuvwxyz";
// const arr = str.split("");
// console.log(arr);

// arr.reverse();

// console.log(arr);

// console.log(arr.join("-"));

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
