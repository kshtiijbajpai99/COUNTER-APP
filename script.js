// Get the count display element
const countDisplay = document.getElementById("count");

// Get the buttons
const increaseBtn = document.querySelector("button:nth-of-type(1)");
const decreaseBtn = document.querySelector("button:nth-of-type(2)");
const resetBtn = document.querySelector("button:nth-of-type(3)");
let count = 0;

increaseBtn.addEventListener("click", function () {
  count++;
  countDisplay.textContent = count;
});

decreaseBtn.addEventListener("click", function () {
  count--;
  countDisplay.textContent = count;
});

resetBtn.addEventListener("click", function () {
  count = 0;
  countDisplay.textContent = count;
});
const toggleThemeBtn = document.getElementById("toggleTheme");

toggleThemeBtn.addEventListener("click", function () {
  document.body.classList.toggle("dark");
});
