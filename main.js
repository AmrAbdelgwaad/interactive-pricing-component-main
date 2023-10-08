const range = document.getElementById("range");
const checkbox = document.getElementById("checkbox");

const page = document.querySelector(".page");
const price = document.querySelector(".price");

const pages = ["10K", "50K", "100K", "500k", "1m"];
const prices = ["8.00", "12.00", "16.00", "24.00", "36.00"];

range.oninput = function () {
  page.innerHTML = pages[this.value];

  if (checkbox.checked) {
    price.innerHTML = `$${(prices[this.value] * 0.75).toFixed(2)}`;
  } else {
    price.innerHTML = `$${prices[this.value]}`;
  }
};

range.oninput();

checkbox.addEventListener("change", function () {
  if (checkbox.checked) {
    price.innerHTML = `$${(prices[range.value] * 0.75).toFixed(2)}`;
  } else {
    price.innerHTML = `$${prices[range.value]}`;
  }
});
