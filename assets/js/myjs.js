
let mybutton = document.getElementById("myBtn");
let angle = document.getElementById("angle");

let subButton = document.getElementById("subBut");
let clearButton = document.getElementById("clearBut");

let nameField = document.getElementById("NameEntered");
let emailField = document.getElementById("EmailEntered");
let messField = document.getElementById("MessageEntered");

clearButton.onclick = function() {
  nameField.value = "";
  emailField.value = "";
  messField.value = "";
}

function showAlertMess(){
        alert("Thank you. Your Message has been submitted successfully");
      window.location.href = "https://furry-telegram-swart.vercel.app#contact-sec";
}

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
    mybutton.style.opacity = 1;
    angle.style.opacity = 1;
  } else {
    mybutton.style.opacity = 0;
    angle.style.opacity = 0;
  }
 
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

/*My accordion script starts*/
let mybutton1 = document.getElementById("dtype1");
let mybutton2 = document.getElementById("dtype2");
let mybutton3 = document.getElementById("dtype3");

let mydesc1 = document.getElementById("desctype1");
let mydesc2 = document.getElementById("desctype2");
let mydesc3 = document.getElementById("desctype3");

let ip1 = document.getElementById("sp1");
let ip2 = document.getElementById("sp2");
let ip3 = document.getElementById("sp3");


mybutton1.onclick = function () {

    if (mydesc1.style.display !== "none") {
        mydesc1.style.display = "none";
        ip1.innerHTML = "＋";
    }
    else if (mydesc1.style.display == "none") {
            mydesc1.style.display = "block";
            ip1.innerHTML = "—";
        }
}
mybutton2.onclick = function () {

    if (mydesc2.style.display !== "none") {
        mydesc2.style.display = "none";
        ip2.innerHTML = "＋";


    }
    else if (mydesc2.style.display == "none") {
            mydesc2.style.display = "block";
            ip2.innerHTML = "—";


        }


}
mybutton3.onclick = function () {

    if (mydesc3.style.display !== "none") {
        mydesc3.style.display = "none";
        ip3.innerHTML = "＋";


    }
    else if (mydesc3.style.display == "none") {
            mydesc3.style.display = "block";
            ip3.innerHTML = "—";

        }

}
/*My accordion script ends*/

