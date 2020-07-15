<?php

$recepient = "papikilya@yandex.ru";
$sitename = "premStudio";

$mail = trim($_POST["mail"]);
$subject = trim($_POST["subject"]);
$text = trim($_POST["text"]);
$message = "Mail: $mail \nПредмет обращения: $subject \nТекст: $text";

$pagetitle = "Новая заявка с сайта \"$sitename\"";
mail($recepient, $pagetitle, $message, "Content-type: text/plain; charset=\"utf-8\"\n From: $recepient");