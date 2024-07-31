document.getElementById("btn").addEventListener(
  "click",
  function () {
    this.style.backgroundColor = `#${randomColor()}`;
    call();
    document.getElementById("note").style.display = "none";
  },
  { once: true }
);

function call() {
  setInterval(function () {
    document.getElementById(
      "background"
    ).style.backgroundColor = `#${randomColor()}`;
  }, 2000);
}

function randomColor() {
  return Math.floor(Math.random() * 16666666).toString(16);
}
