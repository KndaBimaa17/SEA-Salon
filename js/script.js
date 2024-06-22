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

// Review System
document.addEventListener("DOMContentLoaded", () => {
  const reviewForm = document.getElementById("reviewForm");
  const reviewList = document.getElementById("reviewList");

  // Sample initial reviews
  const reviews = [
    {
      name: "John Doe",
      rating: 5,
      comment: "Excellent service!",
    },
    {
      name: "Jane Smith",
      rating: 4,
      comment: "Very good, will come again.",
    },
    {
      name: "Sam Wilson",
      rating: 3,
      comment: "Good, but room for improvement.",
    },
  ];

  // Function to render reviews
  function renderReviews() {
    reviewList.innerHTML = "";
    reviews.forEach((review) => {
      const reviewItem = document.createElement("div");
      reviewItem.classList.add("review-item");
      reviewItem.innerHTML = `
        <h3>${review.name}</h3>
        <div class="rating">${"★".repeat(review.rating)}${"☆".repeat(
        5 - review.rating
      )}</div>
        <p>${review.comment}</p>
      `;
      reviewList.appendChild(reviewItem);
    });
  }

  // Handle form submission
  reviewForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const rating = parseInt(e.target.rating.value);
    const comment = e.target.comment.value;
    reviews.push({ name, rating, comment });
    renderReviews();
    reviewForm.reset();
  });

  // Initial render
  renderReviews();
});
