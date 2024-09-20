

// gallery

let slideNumber = 1;
gallerySlides(slideNumber);
function plusSlides(n) {
    gallerySlides(slideNumber += n);
}
function currentImage(n) {
    gallerySlides(slideNumber = n);
}
function gallerySlides(n) {
    let i;
    let images = document.getElementsByClassName("images");
    let dots = document.getElementsByClassName("dot");
    if (n > images.length) {slideNumber = 1}    
    if (n < 1) {slideNumber = images.length}
    for (i = 0; i < images.length; i++) {
        images[i].style.display = "none";  
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    images[slideNumber-1].style.display = "block";  
    dots[slideNumber-1].className += " active";
};

//end gallery

//checkbox required
(function() {
    const form = document.querySelector('.group-interests');
    const checkboxes = form.querySelectorAll('input[type=checkbox]');
    const checkboxLength = checkboxes.length;
    const firstCheckbox = checkboxLength > 0 ? checkboxes[0] : null;

    function init() {
        if (firstCheckbox) {
            for (let i = 0; i < checkboxLength; i++) {
                checkboxes[i].addEventListener('change', checkValidity);
            }
            checkValidity();
        }
    }
    function isChecked() {
        for (let i = 0; i < checkboxLength; i++) {
            if (checkboxes[i].checked) return true;
        }
        return false;
    }
    function checkValidity() {
        const errorMessage = !isChecked() ? 'At least one checkbox must be selected.' : '';
        firstCheckbox.setCustomValidity(errorMessage);
    }
    init();
})();
//end required checkbox

//top button

// Get the button:
let mybutton = document.getElementById("btn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
} else {
    mybutton.style.display = "none";
}
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}





