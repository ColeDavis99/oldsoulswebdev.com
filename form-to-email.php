<?php
if(!isset($_POST['submit'])){
  include(error.php);
  include(index.html);
  exit;
}
$name = $_POST['name'];
$visitor_email = $_POST['email'];
$type = $_POST['type'];
$paragraph = $_POST['paragraph'];

//Validate
if(empty($name) || empty($visitor_email)){
  echo "<script type='text/javascript'>alert('$message');</script>";
  exit;
}

$email_from = 'oldsoulswebdev@gmail.com';
$email_subject = "New Form submission";
$email_body = "Visitor name: $name. \n".
      "Email Address: $visitor_email\n".
      "Message: \n $paragraph";
$to = "oldsoulswebdev@gmail.com";
$headers = "From: $email_from \r\n";

//Send the Email!
mail($to,$email_subject,$email_body,$headers);
//Done with Email, Next send them to Thank You Page
include('thankYou.html');
 ?>
