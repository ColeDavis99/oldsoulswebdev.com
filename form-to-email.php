<?php$name = "";
$visitor_email = "";
$phone = "";
$paragraph = "";

$name = filter_input(INPUT_POST, 'name');
$visitor_email = filter_input(INPUT_POST, 'email');$phone = filter_input(INPUT_POST, 'phone');
// $type = filter_input(INPUT_POST, 'type');
$paragraph = filter_input(INPUT_POST, 'paragraph');// foreach ($_POST as $key => $value) {//   echo '<p>'.$key.'</p>';//   foreach($value as $k => $v)//   {//   echo '<p>'.$k.'</p>';//   echo '<p>'.$v.'</p>';//   echo '<hr />';//   }//// }
//Validate//
// if(empty($name) || empty($visitor_email)){//
//   echo "<script type='text/javascript'>alert('$message');</script>";//
//   exit;//
// }


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
include('thankYou.php');
 ?>