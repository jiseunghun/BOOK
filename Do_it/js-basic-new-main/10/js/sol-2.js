function changeBg() {
  var x = Math.floor(Math.random() * 256);
  var y = Math.floor(Math.random() * 256);
  var z = Math.floor(Math.random() * 256);
  var bgColor = "rgb(" + x + "," + y + "," + z + ")";
  document.body.style.background = bgColor;
}

changeBg();

reload_btn = document.querySelectorAll("#container button");

function reload_page() {
  window.location.reload();
}

reload_btn[0].onclick = reload_page;
