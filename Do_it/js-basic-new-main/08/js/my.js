const inputBtn = document.querySelector(".inputBtn");
const userName = document.querySelector("#userName");
const nameList = document.querySelector("#nameList");

function nameRegister(event) {
  event.preventDefault();
  const userNameValue = userName.value;
  const makeElp = document.createElement("p");
  const makeTextName = document.createTextNode(userNameValue);

  makeElp.appendChild(makeTextName);
  nameList.insertBefore(makeElp, nameList.childNodes[0]);

  const delBtn = document.createElement("span");
  const delBtn_X = document.createTextNode("X");
  delBtn.setAttribute("class", "del");
  delBtn.appendChild(delBtn_X);
  makeElp.appendChild(delBtn);

  userName.value = "";

  delEventMake();
}

function delEventMake() {
  var removeBtnList = document.querySelectorAll(".del");

  for (let i = 0; i < removeBtnList.length; i++) {
    removeBtnList[i].addEventListener(
      "click",
      function () {
        if (this.parentNode.parentNode) {
          this.parentNode.parentNode.removeChild(this.parentNode);
        }
      },
      false
    );
  }
}

inputBtn.addEventListener("click", nameRegister);
