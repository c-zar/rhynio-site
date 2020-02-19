function myFunction() {
    var x = document.getElementById("navDemo");
    if (x.className.indexOf("w3-show") == -1) {
        x.className += " w3-show";
    } else {
        x.className = x.className.replace(" w3-show", "");
    }
}

var slideLeft = {
    distance: '100%',
    origin: 'right',
    duration: 1500,
    opacity: 0,
    delay: 100
};

var slideRight = {
    distance: '100%',
    origin: 'left',
    duration: 1500,
    opacity: 0,
    delay: 100
};

$(document).ready(function () {
    console.log("ready")
    ScrollReveal({ reset: true });
    ScrollReveal().reveal('#c1', slideLeft);
    ScrollReveal().reveal('#c2', slideRight)

});

$(window).scroll(handleOnScroll);

function handleOnScroll() {
    console.log($("#c1").offset());

    //    if ($("#c1").position().top < 650){
    //     ScrollReveal().reveal('#c1', {
    //         origin: 'right',
    //         duration: 2000
    //     });
    //    }
};

