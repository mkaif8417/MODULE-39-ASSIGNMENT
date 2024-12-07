//initiating zero for count
let count = 0;

// Select the elements which targeting
const decrementBtn = document.querySelector(".decrement");
const incrementBtn = document.querySelector(".increment");
const resetBtn = document.querySelector(".reset");
const display = document.querySelector(".display");

//  function for displayed value for span
function updateDisplay() {
  display.innerText = count;
}

//  for decrement button
decrementBtn.addEventListener("click", () => {
  count--;
  if(count>0){
  updateDisplay();}
  else{
    alert("Negative number not allowed")
  }
});

//  for increment button
incrementBtn.addEventListener("click", () => {
  count++;
  updateDisplay();
});

//  for reset button
resetBtn.addEventListener("click", () => {
  count = 0;
  updateDisplay();
});
