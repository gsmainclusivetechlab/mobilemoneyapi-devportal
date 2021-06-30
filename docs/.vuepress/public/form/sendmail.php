<?php
require 'vendor/autoload.php';

  $userEmail = '';
  $userFullName = '';
  $userCompany = '';
  $userComment = '';
  $userJobTitle = '';
  $userSubject = '';
  $userContactNumber = '';
  $userCountry = '';
  $userAcceptedConditions = '';

  var_dump($_POST['country']);

  if (isset($_POST['subject']) && is_string($_POST['subject'])) {
   $userSubject = $_POST['subject'];
  } else {
    $userSubject = "Default subject";
  }

  $email = new \SendGrid\Mail\Mail();
  $email->setFrom("agalaguz@justcoded.com", "Anton Galaguz");
  $email->setSubject($userSubject);
  $email->addTo("qa@justcoded.co", "Example User");

  $userFullName   = "<strong>User full name: </strong>" .$_POST['full_name'];
  $userEmail      = "<strong>User email: </strong>" .$_POST['email'];
  $userCompany    = "<strong>User company: </strong>" .$_POST['company'];
  $userComment    = "<strong>User comment: </strong>" .$_POST['comment'];

  if (isset($_POST['conditions']) && $_POST['conditions'] == 'on') {
   $userAcceptedConditions = "User has accepted T&C and Privacy statment";
  }

  if (isset($_POST['job_title']) && is_string($_POST['job_title'])) {
   $userJobTitle = "<strong>User job title: </strong> " .$_POST['job_title'];
  }

  if (isset($_POST['contact_number']) && is_string($_POST['contact_number'])) {
   $userContactNumber = "<strong>User contact number: </strong> " .$_POST['contact_number'];
  }

  if (isset($_POST['country']) && is_string($_POST['country'])) {
   $userCountry = "<strong>User country: </strong> " .$_POST['country'];
  }

  $email->addContent("text/plain", "New message");
  $email->addContent(
  "text/html", "<div>{$userFullName} <br> {$userEmail} <br> {$userCompany} <br> {$userComment} <br> {$userJobTitle} <br> {$userContactNumber} <br> {$userCountry} <br> <br> <br>
   {$userAcceptedConditions}</div>"
  );

  // $sendgrid = new \SendGrid(getenv('SENDGRID_API_KEY'));
  $sendgrid = new \SendGrid('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');

  try {
    $response = $sendgrid->send($email);
    print $response->statusCode() . "\n";
    print_r($response->headers());
    print $response->body() . "\n";
  } catch (Exception $e) {
    echo 'Caught exception: '. $e->getMessage() ."\n";
  }
