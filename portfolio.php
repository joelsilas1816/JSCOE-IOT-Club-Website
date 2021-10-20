<?php
$connection=mysqli_connect('localhost','root');
if($connection){
    echo "connection is established";
}
else{
    echo "error connection failed";
}
mysqli_select_db($connection,'portfolio');
$nam=$_POST['_name'];
$emailbeta=$_POST['_email'];
$messagekar=$_POST['_message'];
$data="INSERT INTO 2021resume (name,email,message) VALUES('$nam','$emailbeta','$messagekar')";
mysqli_query($connection,$data);
header('location:signupsucc.php');
?>