//Get the button
let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
    mybutton.style.opacity = 1;
  } else {
    mybutton.style.opacity = 0;
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

let ip1 = document.getElementById("itypep1");
let ip2 = document.getElementById("itypep2");
let ip3 = document.getElementById("itypep3");

let im1 = document.getElementById("itypem1");
let im2 = document.getElementById("itypem2");
let im3 = document.getElementById("itypem3");

mybutton1.onclick = function () {

    if (mydesc1.style.display !== "none") {
        mydesc1.style.display = "none";
        ip1.style.display = "inline-block";
    }
    else if (mydesc1.style.display == "none") {
            mydesc1.style.display = "block";
            im1.style.display = "inline-block";

        }
}
mybutton2.onclick = function () {

    if (mydesc2.style.display !== "none") {
        mydesc2.style.display = "none";
        ip2.style.display = "inline-block";
        ip2.style.display = "inline-block";

    }
    else if (mydesc2.style.display == "none") {
            mydesc2.style.display = "block";
            im2.style.display = "inline-block";

        }


}
mybutton3.onclick = function () {

    if (mydesc3.style.display !== "none") {
        mydesc3.style.display = "none";
        ip3.style.display = "inline-block";
        ip3.style.display = "inline-block";

    }
    else if (mydesc3.style.display == "none") {
            mydesc3.style.display = "block";
            im3.style.display = "inline-block";

        }

}
/*My accordion script ends*/
