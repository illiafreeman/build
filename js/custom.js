
const teamGal = new Swiper('.team-gal', {
    slidesPerView: 'auto',
    spaceBetween: 30,
    freeMode: true,
    loop: true,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    }
});
const reviewGal = new Swiper('.review-gal', {
    slidesPerView: 3,
    spaceBetween: 30,
    freeMode: true,
    loop: true,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
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

ymaps.ready(init);

function init () {
    var myMap = new ymaps.Map("map", 
        {
            center: [59.984976, 30.318303],
            zoom: 16
        }
    ),
    pos = new ymaps.Placemark([59.984976, 30.318303], 
        {
            hintContent: 'ул. Лисичанская, д. 6'
        }, 
        {
            // Опции.
            // Своё изображение иконки метки.
            iconImageHref: 'img/icon_company.svg',
            // Размеры метки.
            iconImageSize: [70, 40],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [0, -60]
        }
    );
    myMap.geoObjects.add(pos);
}