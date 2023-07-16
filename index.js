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

  fetch("/submit", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email: email }),
  })
    .then((response) => {
      if (response.ok) {
        console.log("Email sent successfully!");
        successMessage.classList.remove("hidden"); // Show success message
      } else {
        console.error("Failed to send email.");
        // Optionally, show an error message to the user
      }
    })
    .catch((error) => {
      console.error("Error:", error);
      // Handle any network or fetch API related errors
    });
});
