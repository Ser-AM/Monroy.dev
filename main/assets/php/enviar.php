<?php 

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require './../../vendor/PHPMailer-6.6.5/src/PHPMailer.php';
require './../../vendor/PHPMailer-6.6.5//src/SMTP.php';
require './../../vendor/PHPMailer-6.6.5//src/Exception.php';
require './../../../../credentials.php';

try {
	$mail = new PHPMailer;
	$mail->isSMTP();
	$mail->Host = $SMTP_CONFIG['HOST'];
	$mail->Port = $SMTP_CONFIG['PORT'];
	$mail->SMTPAuth = true;
	$mail->Username = $SMTP_CONFIG['USERNAME'];
	$mail->Password = $SMTP_CONFIG['PASSWORD'];
	$mail->setFrom($SMTP_CONFIG['FROM_EMAIL'], $SMTP_CONFIG['FROM_NAME']);
	$mail->addAddress($SMTP_CONFIG['TO_EMAIL'], $SMTP_CONFIG['TO_NAME']);
	$mail->isHTML(true);
	$mail->Subject = $_POST['asunto'];
	$mail->Body = "
					<html>
						<body>
							<p>Nombre : ".$_POST['nombre']."</p>
							<p>Email : ".$_POST['email']."</p>
							<p>Teléfono : ".$_POST['telefono']."</p>
							<hr>
							<p>Mensaje: </p>
							<p>".$_POST['mensaje']."</p>
						</body>
					</html>";

	ini_set('display_errors', '1');
} catch (Exception $e) {
	echo "Mailer Error: ".$mail->ErrorInfo;
}
if (!$mail->send()) {
    echo 'Mailer Error: ' . $mail->ErrorInfo;
} else {
    echo 'The email message was sent.';
}
?>