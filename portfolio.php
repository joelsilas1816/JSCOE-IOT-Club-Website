<?php
$connection=mysqli_connect('localhost','root');
if($connection){
    echo "connection is established";
}
else{
    echo"error connection failed";
}
mysqli_select_db("$connection,'portfolio');
$nam=$_post['_name'];
$emailbeta=$_post['_email'];
$messagekar=$_post['_message'];
$data="INSERT INTO 2021resume (name,email,message) VALUES('$nam','$emailbeta','$messagekar')";
mysqli_query($connection,$data);
header('location:signupscc.php');