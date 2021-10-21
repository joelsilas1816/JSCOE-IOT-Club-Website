<?php
$connection=mysqli_connect("127.0.0.1","root","","test");
if($connection){
    echo "connection is established";
}
else{
    echo "error connection failed";
}
<<<<<<< HEAD
mysqli_select_db("$connection,'portfolio');
$nam=$_post['_name'];
$emailbeta=$_post['_email'];
$messagekar=$_post['_message'];
$data="INSERT INTO 2021resume (name,email,message) VALUES('$nam','$emailbeta','$messagekar')";
mysqli_query($connection,$data);
header('location:signupscc.php');
=======
mysqli_select_db($connection,'portfolio');
$nam=$_POST['name'];
$emailbeta=$_POST['email'];
$messagekar=$_POST['message'];
$data="INSERT INTO 2021resume (name,email,message) VALUES("$nam","$emailbeta","$messagekar")";
$result = mysqli_query($connection,$data);
// header('location:signupsucc.php');
if(!$result){
    echo "Error : " .mysqli_error($connection);
    exit;
}
echo "Success";
mysqli_close($connection);
>>>>>>> 6128bd7f7184db7cfed5e84757688b51dbec4d2b
?>