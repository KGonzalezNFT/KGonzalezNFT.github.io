// jQuery

$(document).ready(function() {
    $(window).scroll(function() {
        // sticky navbar 
        if (this.scrollY > 20) {
            $('.navbar').addClass("sticky");
        } else {
            $('.navbar').removeClass("sticky");
        }

        // button show/hide 
        if (this.scrollY > 500) {
            $('.scroll-up-btn').addClass("show");
        } else {
            $('.scroll-up-btn').removeClass("show");
        }
    });

    // slide-up 
    $('.scroll-up-btn').click(function() {
        $('html').animate({ scrollTop: 0 });
        // removing smooth scroll on slide-up button click
        $('html').css("scrollBehavior", "auto");
    });

    $('.navbar .menu li a').click(function() {
        // applying again smooth scroll on menu items click
        $('html').css("scrollBehavior", "smooth");
    });

    // toggle menu/navbar
    $('.menu-btn').click(function() {
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    //  text animation
    var typed = new Typed(".typing", {
        strings: ["Programador", "Diseñador", "Marketer"],
        typeSpeed: 90,
        backSpeed: 40,
        loop: true
    });

});



// JS



// Widget whatsapp
popupWhatsApp = () => {

    let btnClosePopup = document.querySelector('.closePopup');
    let btnOpenPopup = document.querySelector('.whatsapp-button');
    let popup = document.querySelector('.popup-whatsapp');

    btnClosePopup.addEventListener("click", () => {
        popup.classList.toggle('is-active-whatsapp-popup')
    })

    btnOpenPopup.addEventListener("click", () => {
        popup.classList.toggle('is-active-whatsapp-popup')
        popup.style.animation = "fadeIn .6s 0.0s both";
    })


    setTimeout(() => {
        popup.classList.toggle('is-active-whatsapp-popup');
    }, 10000);
}

popupWhatsApp();






const filterButtons = document.querySelector('#filter-btns').children;
const items = document.querySelector(".projects-gallery").children;

for (let i = 0; i < filterButtons.length; i++) {
    filterButtons[i].addEventListener("click", function() {
        for (let j = 0; j < filterButtons.length; j++) {
            filterButtons[j].classList.remove("active")
        }
        this.classList.add("active");
        const target = this.getAttribute("data-target")

        for (let k = 0; k < items.length; k++) {
            items[k].style.display = "none";
            if (target == items[k].getAttribute("data-id")) {
                items[k].style.display = "block";
            }
            if (target == "all") {
                items[k].style.display = "block";
            }
        }

    })
}