<?php
$conn=mysqli_connect("127.0.0.1","root","","iotclub");
if(!$conn){
    echo "Connection failed".mysqli_connect_error();
    exit;
}

$name=$_POST['name'];
$email=$_POST['email'];
$message=$_POST['message'];
$data="INSERT INTO viewers (name,email,message) VALUES('$name','$email','$message')";
$result = mysqli_query($conn,$data);
// header('location:signupsucc.php');
if(!$result){
    echo "Error : " .mysqli_error($conn);
    exit;
}
echo "Request submitted successfully";
mysqli_close($conn);
?>