const form = document.getElementById(
  "newsletterForm"
);
const emailInput =
  document.getElementById("emailInput");
const successMessage = document.getElementById(
  "successMessage"
);

form.addEventListener("submit", function (event) {
  event.preventDefault();
  const email = emailInput.value;
  const xhr = new XMLHttpRequest();
  xhr.open("POST", "/submit");
  xhr.setRequestHeader(
    "Content-Type",
    "application/json"
  );
  xhr.onload = function () {
    if (xhr.status === 200) {
      console.log("Email sent successfully!");
      successMessage.classList.remove("hidden"); // Show success message
    } else {
      console.error("Failed to send email.");
      // Optionally, show an error message to the user
    }
  };
  xhr.send(JSON.stringify({ email: email }));
});
