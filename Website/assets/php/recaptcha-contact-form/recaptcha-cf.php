<?php
  $recaptcha_response = $_POST['g-recaptcha-response']; // Captcha response from the form
  $secret_key = 'YOUR_PRIVATE_KEY'; // Your private key obtained from Google's Recaptcha
  $ip = $_SERVER['REMOTE_ADDR']; // IP address of the GW

  // Make a request to the reCAPTCHA API
  $url = 'https://www.google.com/recaptcha/api/siteverify';
  $data = array(
    'secret' => $secret_key,
    'response' => $recaptcha_response,
    'remoteip' => $ip
  );

  $options = array(
    'http' => array(
      'header' => "Content-type: application/x-www-form-urlencoded\r\n",
      'method' => 'POST',
      'content' => http_build_query($data)
    )
  );
  
  $context = stream_context_create($options);
  $result = file_get_contents($url, false, $context);
  
  // Check the result from the API
  $response = json_decode($result, true);
  if ($response['success'] == true) {
    // Captcha validation passed, process the form data
    // Your code here
  } else {
    // Captcha validation failed, show an error message
    // Your code here
  }
?>
