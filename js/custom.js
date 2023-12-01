
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function () {
        this.classList.toggle("active");
        var panel = this.nextElementSibling;
        panel.classList.toggle("active");
        if (panel.style.maxHeight) {
            panel.style.maxHeight = null;
        } else {
            panel.style.maxHeight = panel.scrollHeight + 86 + "px";
        }
    });
}


var mySwiper = new Swiper('#sl_1', {
    // Optional parameters
    loop: true,
    slidesPerView: 2,
    centeredSlides: true,
    effect: 'coverflow',
    coverflow: {
        rotate: 0,
        stretch: 0,
        depth: 300,
        modifier: 1,
    },
    nextButton: '.swiper-button-next',
    prevButton: '.swiper-button-prev',

});

var swiper = new Swiper("#sl_2", {
    loop: true,
    slidesPerView: 4,
    spaceBetween: 20,
    freeMode: true,
    nextButton: '.swiper-button-next',
    prevButton: '.swiper-button-prev',
});

Fancybox.bind('[data-fancybox]', {
    compact: false,
    idle: false,
    animated: false,
    showClass: false,
    hideClass: false,
    dragToClose: false,
    contentClick: false,
    Images: {
        // Disable animation from/to thumbnail on start/close
        zoom: false,
    },
    Toolbar: {
        display: {
            left: [],
            middle: ['infobar'],
            right: ['close'],
        },
    },
    Thumbs: {
        type: 'classic',
    },
}); 
