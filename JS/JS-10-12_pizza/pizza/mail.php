<?php
$name = "не определено";
$phone = "не определен";
$email = "не определен";

if(isset($_POST["name"])){
  
    $name = $_POST["name"];
}
if(isset($_POST["phone"])){
  
    $phone = $_POST["phone"];
}
if(isset($_POST["email"])){
  
    $email = $_POST["email"];
}
echo "Имя: $name <br> Тел: $phone <br> Почта: $email";
?>