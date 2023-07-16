// import gsap from "./gsap-core";

document.addEventListener("DOMContentLoaded", function () {
    // Select the text banner element
    const textBanner = document.querySelector(".text-banner");

    // GSAP animation
    gsap.to(textBanner, {
        opacity: 1, // Target opacity (1 means fully opaque)
        duration: 1.5, // Animation duration in seconds
        ease: "power4.out", // Easing function (optional, you can experiment with different values)
        delay: 0.5 // Delay before the animation starts in seconds
    });
});
