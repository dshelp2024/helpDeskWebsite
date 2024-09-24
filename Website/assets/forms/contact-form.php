<?php
// GWU Data Science Helpdesk Contact Form

  if ($_SERVER["REQUEST_METHOD"] == "POST") {

    // Retrieve form data
      $name = $_POST["name"];
      $email = $_POST["email"];
      $phone = $_POST["phone"];
      $issueType = $_POST["issue_type"];
      $message = $_POST["message"];
  
      // Recipient email address
      $to = "dshelpdesk@gwu.edu";

      // Subject of the email
      $subject = "Helpdesk Ticket Form Submission";

      // Message body
      $body = "Your Name: $name\n";
      $body .= "Mail: $email\n";
      $body .= "Phone: $phone\n";
      $body .= "Issue Type: $issueType\n";
      $body .= "Message: $message\n";
      $headers = "From: $email";

      // Send email
      if (mail($to, $subject, $body, $headers)) {
          echo "Thank you for contacting the GW Data Science Helpdesk! We will get back to you soon.";
      } else {
          echo "Error sending email. Please try again later.";
      }
  }
?>