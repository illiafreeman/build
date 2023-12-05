
/*team carousel*/
const teamGal = new Swiper('.team-gal', {
    slidesPerView: 'auto',
    centeredSlides: true,
    spaceBetween: 30,
    //slideToClickedSlide: true,
    //freeMode: true,
    loop: true,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    }
});
/*end team carousel*/

/*certificate carousel*/
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
/*end certificate carousel*/

/*certificate increase size*/
Fancybox.bind('[data-fancybox]', {
    compact: false,
    idle: false,
    animated: false,
    showClass: false,
    hideClass: false,
    dragToClose: false,
    contentClick: false,
    Images: {
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
/*end certificate increase size*/

/*map*/
const LOCATION = { center: [30.318303, 59.984976], zoom: 16 };
const POINT = {title: '<strong>ул. Лисичанская, д. 6<strong>'};
window.map = null;
main();
async function main() {
    await ymaps3.ready;
    const { YMap, YMapDefaultSchemeLayer, YMapDefaultFeaturesLayer} = ymaps3;
    const { YMapDefaultMarker } = await ymaps3.import('@yandex/ymaps3-markers@0.0.1');
    map = new YMap(document.getElementById('map'), { location: LOCATION });
    map.addChild((scheme = new YMapDefaultSchemeLayer()));
    map.addChild(new YMapDefaultFeaturesLayer());
    map.addChild(new YMapDefaultMarker({ 
        coordinates: LOCATION.center, 
        title: POINT.title
    }));
}
/*end map*/

/*fixed header*/
$(window).scroll(function () {
    if ($(window).scrollTop() >= 1) {
        $('.header').addClass('fixed');
    }
    else {
        $('.header').removeClass('fixed');
    }
});
/*end fixed header*/

/*tabs*/
$('.tabs-wrapper').each(function() {
    let ths = $(this);
    ths.find('.tab-item').not(':first').hide();
    ths.find('.tab').click(function() {
        ths.find('.tab').removeClass('active').eq($(this).index()).addClass('active');
        ths.find('.tab-item').hide().eq($(this).index()).fadeIn()
    }).eq(0).addClass('active');
});
/*end tabs*/
