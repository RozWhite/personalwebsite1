<?php
  

    $visitor_name = $_POST['visitor_name'];
    $visitor_email =$_POST['visitor_email'];
    $visitor_message = $_POST['visitor_message'];
    $email_from = "rsoleimany@yahoo.com";
    $email_subject = "New Form Submission";
    $email_body="User Name: $visitor_name.\n". 
        "User Email: $visitor_email.\n".
            "User Message: $visitor_message.\n";

    $to="rozita.soleimani@gmx.de";
    $headers  = "From: $email_from. \r\n";
    $headers .= "Reply-To: $visitor_email. \r\n";
    mail($to, $email_subject, $email_body,$headers );
    header("Location: contact.ejs");


?>