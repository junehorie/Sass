document.addEventListener('DOMContentLoaded', function () {
    // image modal
    const detailModal = document.getElementById('detailModal');
    const detailList = document.querySelectorAll('.detailList'); 

    for (let i = 0; i < detailList.length; i++) {

        detailList[i].addEventListener('click', function () {
            let path = detailList[i].getAttribute('src');
            let alt = detailList[i].getAttribute('alt');
            detailModal.setAttribute('src', path);
            detailModal.setAttribute('alt', alt);
            console.log(detailModal);
        });
    }
})

// swiper
const swiper = new Swiper(".swiper", {
    slidesPerView: 3.5,
    slidesPerGroup: 2,
    speed: 600,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    loop: true,
    mousewheel: true,
    keyboard: true,
    breakpoints: {
        480: {
            slidesPerView: 4.5,
        },
        960: {
            slidesPerView: 5.5,
        }
    }
});
