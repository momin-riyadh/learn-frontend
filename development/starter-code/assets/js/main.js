document.addEventListener('DOMContentLoaded', function () {
    gsap.fromTo(".banner-text", {
            opacity: 0,
            duration: 5,

        },
        {
            opacity: 1,
            duration: 5
        });

    gsap.fromTo(".banner-about-text, .plan-banner-text", {
        opacity: 0,
        duration: 5,

    }, {opacity: 1, duration: 5})
})


