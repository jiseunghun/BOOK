const user_id = document.querySelector("#user_id");
const pw_first = document.querySelector("#user_pw1");
const pw_second = document.querySelector("#user_pw2");

function checked_id() {
  if (user_id.value.length < 4 || user_id.value.length > 15) {
    alert("4~15자리의 영문과 숫자로 입력");
    user_id.value = "";
    user_id.select();
  }
}

function checked_pw() {
  if (pw_first.value < 8) {
    alert("비밀번호를 다시 입력하세요 ");
  }
}
function compare_pw() {
  if (pw_first.value != pw_second.value) {
    alert("비밀번호를 확인하세요");
    pw_first.value = "";
    pw_second.value = "";
    pw_first.select();
  }
}

user_id.addEventListener("change", checked_id);
pw_first.addEventListener("change", checked_pw);
pw_second.addEventListener("change", compare_pw);
