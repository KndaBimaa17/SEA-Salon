let currentIndex = 0;
const slides = document.querySelectorAll(".slide");
const totalSlides = slides.length;
const dots = document.querySelectorAll(".dot");

document.querySelector(".prev").addEventListener("click", () => {
  moveSlide(-1);
});

document.querySelector(".next").addEventListener("click", () => {
  moveSlide(1);
});

dots.forEach((dot, index) => {
  dot.addEventListener("click", () => {
    goToSlide(index);
  });
});

function moveSlide(direction) {
  currentIndex += direction;
  if (currentIndex < 0) {
    currentIndex = totalSlides - 1;
  } else if (currentIndex >= totalSlides) {
    currentIndex = 0;
  }
  updateSlidePosition();
}

function goToSlide(index) {
  currentIndex = index;
  updateSlidePosition();
}

function updateSlidePosition() {
  const slideWidth = document.querySelector(".slide").offsetWidth;
  document.querySelector(".slides").style.transform = `translateX(-${
    currentIndex * slideWidth
  }px)`;
  updateDots();
}

function updateDots() {
  dots.forEach((dot) => dot.classList.remove("active"));
  dots[currentIndex].classList.add("active");
}

updateSlidePosition();

document
  .getElementById("contactForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    var isValid = true;

    var nameInput = document.getElementById("YourNameInput");
    var emailInput = document.getElementById("yourEmailInput");
    var messageTextarea = document.getElementById("messageTextarea");

    if (!nameInput.value) {
      nameInput.nextElementSibling.style.display = "block";
      isValid = false;
    } else {
      nameInput.nextElementSibling.style.display = "none";
    }

    if (!emailInput.value) {
      emailInput.nextElementSibling.style.display = "block";
      isValid = false;
    } else {
      emailInput.nextElementSibling.style.display = "none";
    }

    if (!messageTextarea.value) {
      messageTextarea.nextElementSibling.style.display = "block";
      isValid = false;
    } else {
      messageTextarea.nextElementSibling.style.display = "none";
    }

    if (isValid) {
      alert("Form submitted successfully!");
    }
  });
