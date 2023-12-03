
/*team carousel*/
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



