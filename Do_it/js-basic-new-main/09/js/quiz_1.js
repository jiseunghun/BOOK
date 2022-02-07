const checked_menu = document.querySelectorAll(".checkbx");
const total_price = document.querySelector(".price");
let large_pizza = 24000;

total_price.value = large_pizza;

function extra_menu() {
  for (let i = 0; i < checked_menu.length; i++) {
    if (this.checked == true) {
      large_pizza += Number(this.value);
      total_price.value = large_pizza;
      return large_pizza;
    } else {
      large_pizza -= Number(this.value);
      total_price.value = large_pizza;
      return large_pizza;
    }
  }
}

for (let i = 0; i < checked_menu.length; i++) {
  checked_menu[i].addEventListener("change", extra_menu);
}
