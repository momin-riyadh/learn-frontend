window.onload = function () {
    const openIcon = document.querySelector('.open');
    const closeIcon = document.querySelector('.close');
    const topNavArea = document.querySelector('.g-top-navigation');
    document.addEventListener('click', function (e) {
        if (e.target.matches('.g-hamburger')) {
            openIcon.style.opacity = "0";
            openIcon.style.display = "none";
            closeIcon.style.opacity = "1";
            closeIcon.style.display = "block";
            topNavArea.classList.toggle('show');
        } else if (e.target.matches('.close')) {
            openIcon.style.opacity = "1";
            openIcon.style.display = "block";
            closeIcon.style.opacity = "0";
            closeIcon.style.display = "none";
            topNavArea.classList.remove('show');
        } else if (e.target.matches('.open')) {
            openIcon.style.opacity = "0";
            openIcon.style.display = "none";
            closeIcon.style.opacity = "1";
            closeIcon.style.display = "block";
            topNavArea.classList.toggle('show');
        } else if (!e.target.closest('.g-top-navigation')) {
            topNavArea.classList.remove('show');
            openIcon.style.opacity = "1";
            openIcon.style.display = "block";
            closeIcon.style.opacity = "0";
            closeIcon.style.display = "none";
        }
    });

    {
        let hasShownLoading = sessionStorage.getItem("hasShownLoading");
        if (!hasShownLoading) {
            sessionStorage.setItem("hasShownLoading", "true");
            setTimeout(function () {
                let gLoading = document.getElementById("loading");
                if (gLoading) {
                    gLoading.style.opacity = '0';
                    gLoading.addEventListener("transitionend", function () {
                        gLoading.style.display = "none";
                    }, { once: true });
                }
            }, 3000);
        } else {
            let gLoading = document.getElementById("loading");
            if (gLoading) {
                gLoading.style.display = "none";
            }
        }

    }
}
