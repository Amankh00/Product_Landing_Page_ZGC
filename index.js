

const cart = document.getElementById('cart');
var count = 0;
cart.innerHTML =count;

const handleIncrement = (event) => {
  const button = event.target;
  
  if (button.dataset.clicked === 'true') {
    // button.innerHTML = 'Already added';
    alert("ALREADY ADDED , THANK YOU ")
    return;
  }
  
  count++;
  cart.innerHTML = count;
  button.innerHTML = 'Added';
  button.dataset.clicked = 'true';
};
const buttons = document.querySelectorAll(".sec4 .best_perfume button");
buttons.forEach((button) => {
  button.addEventListener("click", handleIncrement);
})
