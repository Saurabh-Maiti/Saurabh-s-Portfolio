const texts = ["an aspiring Software Engineer", "experienced in Android Development"];
let count = 0;         // Index for `texts`
let index = 0;         // Index for character
let currentText = '';
let isDeleting = false;
const speed = 50;     // Typing speed

function typeWriter() {
  const target = document.getElementById("typing-text");
  currentText = texts[count];

  if (isDeleting) {
    target.innerHTML = currentText.substring(0, index--);
  } else {
    target.innerHTML = currentText.substring(0, index++);
  }

  // Determine speed
  let typeSpeed = speed;

  // If word is completely typed
  if (!isDeleting && index === currentText.length + 1) {
    typeSpeed = 1500; // Pause before deleting
    isDeleting = true;
  }

  // If word is deleted
  else if (isDeleting && index === 0) {
    isDeleting = false;
    count = (count + 1) % texts.length; // Go to next text
    typeSpeed = 500;
  }

  setTimeout(typeWriter, typeSpeed);
}

window.onload = typeWriter;
// Scroll to top function
function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}
