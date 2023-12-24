// slidervdo.js

// $(document).ready(function () {
//     $('.owl-carousel').owlCarousel({
//         items: 1,
//         margin: 10,
//         loop: true,
//         autoplay: true,
//         autoplayTimeout: 3000,
//         nav: true,
//         center: true,
//         video: true, // เพิ่มความสามารถในการเล่นวิดีโอ
//     });
// });
$(document).ready(function () {
    $('#vdo-carousel').owlCarousel({
        items: 3,
        margin: 10,
        loop: true,
        autoplay: true,
        autoplayTimeout: 3000,
        center: true,
        video: true,
        lazyLoad: true,
        lazyLoadEager: 1,
    });
});