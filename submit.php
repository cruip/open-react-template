<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
  $to = "ali@openminddi.co.za";
  $subject = "New newsletter subscription";
  $email = $_POST["email"];
  $message = "A new user subscribed to the newsletter:\n\nEmail: $email";

  // Additional email headers if needed
  $headers = "From: newsletter@example.com\r\n";
  $headers .= "Reply-To: $email\r\n";

  // Send the email
  mail($to, $subject, $message, $headers);

  // Optionally, redirect the user to a thank you page
  header("Location: thank-you.html");
  exit();
}
?>
