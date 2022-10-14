
$(document).ready(function () {
    $('.food-slider').slick({
        autoplay: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        prevArrow: ".prev-btn",
        nextArrow: ".next-btn",
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    });
    $('.nav-trigger').click(function () {
        $('.site-content-wrapper').toggleClass('scaled');
    });
});

    // --------------------- Timer -----------------------

const countdown = () => {
    const countDate = new Date ("sep 22, 2022 00:00:00").getTime();
    const now = new Date().getTime();
    const gap = countDate - now;

    //converting miliseconds 
    const second = 1000;
    const minute = second*60;
    const hour = minute*60;
    const day = hour*24;

    //calculation of time

    const textDay = Math.floor(gap / day);
    const textHour = Math.floor((gap % day) / hour);
    const textMinute = Math.floor((gap % hour) / minute);
    const textSecond = Math.floor((gap % minute) / second);


    //
    document.querySelector(".day").innerText = textDay;
    document.querySelector(".hour").innerText = textHour;
    document.querySelector(".minute").innerText = textMinute;
    document.querySelector(".second").innerText = textSecond;
    // console.log(gap);
};
setInterval(countdown, 1000);

// --------------------- Timer -----------------------
