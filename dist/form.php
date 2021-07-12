<?php
file_put_contents('test.txt', file_get_contents('php://input'));

$to      = 'info@acalista.com';
$from = 'acalista@gmail.com';
$subject = 'Acalista Form';
$message = 'Name: '.$_POST['name'].'<br>'.'Email: '.$_POST['email'].'<br>'.'Phone: '.$_POST['phone'].'<br>'.'Message: '.$_POST['msg'];

$headers  = 'MIME-Version: 1.0' . "\r\n";
$headers .= 'Content-type: text/html; charset=iso-8859-1' . "\r\n";
$headers .= 'From: '.$from."\r\n".
    'Reply-To: '.$from."\r\n" .
    'X-Mailer: PHP/' . phpversion();


mail($to, $subject, $message, $headers);
?>