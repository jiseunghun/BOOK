const addBtn = document.querySelector(".addBtn");
const textInput = document.querySelector("#item");
addBtn.addEventListener("click", addList);

var itemList = [];

function addList() {
  var itemValue = document.querySelector("#item").value;
  if (itemValue != null) {
    itemList.push(itemValue);
    document.querySelector("#item").value = "";
    textInput.focus();
  }
  showList();
}

function showList() {
  var list = "<ul>";
  for (var i = 0; i < itemList.length; i++) {
    list +=
      "<li>" + itemList[i] + "<span class='close' id=" + i + ">X</span></li>"; // 요소와 삭제 버튼을 <li>~</li>로 묶음
  }
  list += "</ul>"; // 목록을 끝내는 </ul> 태그 저장

  document.querySelector("#itemList").innerHTML = list;
  var remove = document.querySelectorAll(".close");

  for (let i = 0; i < remove.length; i++) {
    remove[i].addEventListener("click", removeList);
  }
}

function removeList() {
  var id = this.getAttribute("id");
  itemList.splice(id, 1);
  showList();
}
