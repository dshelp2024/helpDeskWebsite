// JavaScript code for handling form submission
document.getElementById('newsletterForm').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent form submission
  const email = document.getElementById('emailInput').value;
  // Here, you can add code to validate the email address, send it to a server for processing, etc.
  alert(`Thank you for subscribing! Email: ${email}`);
  document.getElementById('emailInput').value = ''; // Clear the input field
});
