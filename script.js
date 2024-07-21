// script.js

document.addEventListener("DOMContentLoaded", () => {
  const ctaBtn = document.getElementById("cta-btn");
  const subscriptionForm = document.getElementById("subscription-form");

  ctaBtn.addEventListener("click", () => {
    alert("Thank you for showing interest!");
  });

  subscriptionForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const email = document.getElementById("email").value;
    if (validateEmail(email)) {
      alert("Thank you for subscribing!");
    } else {
      alert("Please enter a valid email address.");
    }
  });

  function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  }
});
