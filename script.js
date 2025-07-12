setTimeout(() => {
  document.querySelector('.loader').style.display = 'none';
  document.querySelector('.main-content').style.display = 'block';
}, 3000);

const text = "અહી તમે કામદાર નથી, પરિવારનો હિસ્સો છો.";
const speed = 70;
let i = 0;

function typeWriter() {
  if (i < text.length) {
    document.getElementById("typewriter-text").innerHTML += text.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}

setTimeout(() => {
  document.querySelector('.loader').style.display = 'none';
  document.querySelector('.main-content').style.display = 'block';
  typeWriter(); // Start typing after loader
}, 3000);

