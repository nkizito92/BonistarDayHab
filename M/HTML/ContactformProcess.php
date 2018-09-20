<?php 

// define variables and set to empty values
$name_error = $phone_error = $email_error = "";
$name = $email = $phone = $message = $success = "";

//form is submitted with POST method
if ($_SERVER["REQUEST_METHOD"] == "POST") {
  if (empty($_POST["name"])) {
    $name_error = "Name is required";
  } else {
    $name = test_input($_POST["name"]);
    // check if name only contains letters and whitespace
    if (!preg_match("/^[a-zA-Z ]*$/",$name)) {
      $name_error = "Only letters and white space allowed"; 
    }
  }

  if (empty($_POST["email"])) {
    $email_error = "Email is required";
  } else {
    $email = test_input($_POST["email"]);
    // check if e-mail address is well-formed
    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
      $email_error = "Invalid email format"; 
    }
  }
    if (empty($_POST["phone"])) {
    $phone_error = "Phone number is required";
  } else {
    $phone = test_input($_POST["email"]);
    // check if phone number is well-formed
    if (!filter_var($phone, FILTER_VALIDATE_EMAIL)) {
      $phone_error = "Invalid phone number format"; 
    }
  }

  if (empty($_POST["message"])) {
    $message = "";
  } else {
    $message = test_input($_POST["message"]);
  }
  
  if ($name_error == '' and $email_error == '' and $phone_error ''){
      $message_body = '';
      unset($_POST['submit']);
      foreach ($_POST as $key => $value){
          $message_body .=  "$key: $value\n";
      }
      
      $to = ' kizito@nkizitos.com';
      /* change subject text to blank when everything works*/
      $subject = test_input($_POST["subject"]);
      if (mail($to, $subject, $email, $phone, $message)){
          $success = "Message sent, thank you for contacting us!";
          $name = $phone = $email =  $message = '';
      }
  }
  
}

function test_input($data) {
  $data = trim($data);
  $data = stripslashes($data);
  $data = htmlspecialchars($data);
  return $data;
}