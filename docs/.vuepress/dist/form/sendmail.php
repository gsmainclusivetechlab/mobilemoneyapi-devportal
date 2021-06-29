<?php
$to_email = 'akoroteeev@justcoded.co';
$subject = 'Testing PHP Mail';
$message = 'This mail is sent using the PHP mail function';
$headers = 'From: artyom.koroteev@gmail.com';
mail($to_email,$subject,$message,$headers);
?>
