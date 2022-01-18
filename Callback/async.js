// async & await

async function fetchUser() {
  return "ellie";
}

const user = fetchUser();
user.catch(console.log);
console.log(user);

// 2. await
function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function getApple() {
  await delay(2000);
  return "Apple";
}

async function getBanana() {
  await delay(1000);
  return "banana";
}

// function pickFruits() {
//   return getApple().then((apple) => {
//     return getBanana().then((banana) => `${apple} + ${banana}`);
//   });
// }

// async function pickFruits() {
//   const apple = await getApple();
//   const banana = await getBanana();
//   return `${apple} + ${banana}`;
// }

function pickAllFruits() {
  return Promise.all([getApple(), getBanana()]).then((fruits) =>
    console.log(fruits)
  );
}
// pickFruits().then(console.log);
pickAllFruits().then();

function pickOnlyOne() {
  return Promise.race([getApple(), getBanana()]);
}

pickOnlyOne().then(console.log);
