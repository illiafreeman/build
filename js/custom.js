
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


const LOCATION = { center: [30.318303, 59.984976], zoom: 16 };
const POINT = {title: '<strong>ул. Лисичанская, д. 6<strong>'};
window.map = null;

main();
async function main() {
    await ymaps3.ready;
    const { YMap, YMapDefaultSchemeLayer, YMapControls, YMapDefaultFeaturesLayer, YMapMarker } = ymaps3;

    const { YMapZoomControl } = await ymaps3.import('@yandex/ymaps3-controls@0.0.1');
    const { YMapDefaultMarker } = await ymaps3.import('@yandex/ymaps3-markers@0.0.1');
    map = new YMap(document.getElementById('map'), { location: LOCATION });

    map.addChild((scheme = new YMapDefaultSchemeLayer()));
    map.addChild(new YMapDefaultFeaturesLayer());

    map.addChild(new YMapControls({ position: 'right' }).addChild(new YMapZoomControl({})));

    
    const el = document.createElement('img');
    el.className = 'my-marker';
    el.src = '/img/pos.svg';
    el.onclick = () => map.update({ location: { ...LOCATION, duration: 400 } });
    map.addChild(new YMapDefaultMarker({ 
        coordinates: LOCATION.center, 
        title: POINT.title
    }));
}




