Sure, here's the updated `README.md` to reflect the changes made for Level 2:

---

# SEA Salon Application

## Overview

SEA Salon is a premier destination for all your beauty needs. This application helps users browse available services, select their preferred stylist, and book appointments easily.

## Level 1: SEA Salon Home Page

This level involves creating a static homepage for SEA Salon that highlights the salon's name, slogan, services offered, and contact details.

### Features

- **Name**: SEA Salon
- **Slogan**: "Beauty and Elegance Redefined"
- **Services**:
  - Haircuts and Styling
  - Manicure and Pedicure
  - Facial Treatments
- **Contact Details**:
  - **Thomas**: 08123456789
  - **Sekar**: 08164829372

## Level 2: Interactivity

After the initial static homepage, we have now added interactivity by implementing a customer review system.

### New Features

- **Customer Reviews Section**: Users can leave reviews with their name, star rating (1 to 5), and comments.

### Project Structure

- `index.html`: Main HTML file.
- `css/styles.css`: CSS file for styling.
- `js/script.js`: JavaScript file for interactivity.
- `assets/`: Directory containing images and other assets.
- `README.md`: Project documentation.

### Setup

1. Clone the repository.
2. Open `index.html` in a web browser to view the homepage.

### HTML Code Breakdown

- **Header**: Contains the navigation bar with links to Home, Services, and Contact sections.
- **Main**:
  - **Hero Section**: Introduces the salon with a slogan and a call-to-action button.
  - **Services Section**: Displays the services offered with images, descriptions, and links to more details.
  - **Reviews Section**: Allows users to submit reviews and displays the list of customer reviews.
  - **Contact Section**: Provides contact information for key staff members and a contact form for feedback or business inquiries.
- **Footer**: Displays the copyright notice.

### External Dependencies

- [Feather Icons](https://feathericons.com/): Used for icons in the navigation bar.
- Custom styles and scripts are located in `css/styles.css` and `js/script.js`, respectively.

### Form Validation

The contact form includes basic validation to ensure that the name, email, and message fields are filled out before submission. Similarly, the review form includes validation to ensure that all fields are filled before submission.

### Navigation and Interactive Elements

- The navigation bar provides quick links to different sections of the page.
- The services section includes a slideshow to highlight different offerings.
- The reviews section includes a form for submitting reviews and displays a list of customer reviews. Reviews are stored in a state and rendered dynamically.
- The contact section includes a form with fields for the user's name, email, and message, which are validated before submission.

### JavaScript Functionality

- **Review System**: The `js/script.js` file includes the code for handling the review submission and rendering the list of reviews. The reviews are stored in a JavaScript array and dynamically rendered on the page.

```javascript
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
```

### Usage

- Open `index.html` in a web browser.
- Navigate through the sections using the navigation bar.
- Submit a review in the Reviews section and see it appear in the list of customer reviews.

---

-ndaa
