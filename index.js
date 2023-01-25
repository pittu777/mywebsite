const form = document.getElementById("contact-form");
const popup = document.getElementById("popup");

popup.style.display = "none";

form.addEventListener("submit", (event) => {
  event.preventDefault();
  popup.style.display = "block";
});

  