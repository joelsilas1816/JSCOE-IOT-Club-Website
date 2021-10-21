<?php
$connection=mysqli_connect("127.0.0.1","root","","test");
if($connection){
    echo "connection is established";
}
else{
    echo "error connection failed";
}
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
?>