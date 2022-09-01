document
  .getElementById("custom-slider")
  .addEventListener("input", function (event) {
    let value = event.target.value;
    document.getElementById("current-value").innerText = "R$" + value;
    document.getElementById("current-value").classList.add("active");
    document.getElementById("current-value").style.left = `${value / 2}%`;
  });

document
  .getElementById("custom-slider")
  .addEventListener("blur", function (event) {
    document.getElementById("current-value").classList.remove("active");
  });