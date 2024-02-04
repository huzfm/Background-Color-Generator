const btn = document.querySelector("#button");
var color1 = document.querySelector(".colour");
const div = document.querySelector('#hexdiv')
const hex = [0, 1, 2, 3, 4, 5, 6, "A", "B", "C", "D", "E", "F"];
btn.addEventListener('click', function () {
      let hexColor = "#";
      for (let i = 0; i < 6; i++) {
            hexColor += hex[getRDM()]
      }
      color1.textContent = hexColor;
     // document.body.style.background = hexColor;
     div.style.background = hexColor;
})
function getRDM() {
      return Math.floor(Math.random() * hex.length)
}