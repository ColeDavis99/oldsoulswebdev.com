<?php  $name = "";  $visitor_email= "";  $phone= "";  $paragraph= "";  $name = filter_input(INPUT_POST, 'name');  $visitor_email = filter_input(INPUT_POST, 'email');  $phone = filter_input(INPUT_POST, 'phone');  $paragraph = filter_input(INPUT_POST, 'paragraph');  $email_from = "$visitor_email";  $email_subject = "Website Request";
  $email_body = "Visitor Name: $name\n" .				"Visitor Phone: $phone\n" .                "Message: $paragraph\n";
  $to = "oldsoulswebdev@gmail.com";
  $headers = "From: $email_from \r\n";
  //Done with Email, Next send them to Thank You Page
  try {
    mail($to,$email_subject,$email_body,$headers);
  }
  catch (Exception $e) {
      echo 'Caught exception: ',  $e->getMessage(), "\n";
  };
  include('thankYou.php'); ?>