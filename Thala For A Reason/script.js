const word = document.getElementById("word");
const num = document.getElementById("num");
const submit1 = document.getElementById("submit1");
const submit2 = document.getElementById("submit2");
const thalabox = document.getElementById("thala-box");
const audio = document.getElementById("audio");
const tryBtn = document.getElementById("tryBtn");

function reloadPage() {
  location.reload();
}

tryBtn.addEventListener("click",reloadPage);

submit1.addEventListener("click",() => {
  
    if (word.value.length === 7) {
      tryBtn.style.display = "block";
      thalabox.style.display = "block";
      audio.play();
    } else if (word.value.length === 0) {
      tryBtn.style.display = "block";
      thalabox.innerHTML = "Enter Text First!";
      thalabox.style.display = "block";
    } else {
      tryBtn.style.display = "block";
    }

    num.value = "";
  
});



submit2.addEventListener("click", () => {
  let digits = num.value.toString();
  let sum = 0;

  for (let digit of digits) {
    sum += parseInt(digit);
  }

  if (sum === 7) {
    tryBtn.style.display = "block"
    thalabox.style.display = "block";
    audio.play();
  } else if (num.value.length === 0) {
    tryBtn.style.display = "block"
    thalabox.innerHTML = "Enter Number First!";
    thalabox.style.display = "block";
  } else {
    tryBtn.style.display = "block"
  }
  
  word.value = "";
});
