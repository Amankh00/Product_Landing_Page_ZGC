const cart = document.getElementById('cart');
var count = 0;
cart.innerHTML = count;

const handleIncrement = () => {
  count++;
  cart.innerHTML = count;
};

const buttons = document.querySelectorAll(".sec4 .best_perfume button");
buttons.forEach((button) => {
  button.addEventListener("click", handleIncrement);
});
