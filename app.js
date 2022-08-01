let count = 0
let saveEl = document.getElementById("save-el")

function increment() {
  count += 1
  num.textContent = count
}

function save() {
  let countStr = count + " - "
  saveEl.textContent += countStr
  num.textContent = count = 0
}
