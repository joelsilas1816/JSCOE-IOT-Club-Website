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

if(!$result){
    echo "Error : " .mysqli_error($conn);
    exit;
}
// echo "Request submitted successfully";
//OR use the following :


?>
<script>
    alert("Request submitted successfully");
    </script>
<?

mysqli_close($conn);
?>