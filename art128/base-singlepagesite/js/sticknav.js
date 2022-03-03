document.addEventListener("DOMContentLoaded", function () {

    //STICKY NAV LINKS TOGGLE MENU NAV
    const stickynavlinks = document.querySelectorAll(".sticky nav a");
    const stickyheader = document.querySelector(".sticky");
    let j;
    for (j = 0; j < stickynavlinks.length; j++) {
        stickynavlinks[j].onclick = function () {
            stickyheader.setAttribute('data-navstate', 'closed');
        };
    };

    /* SITD ID TOGGLE NAV CLOSE MENU NAV */
    const stickyidlink = document.querySelector(".sticky .site-id a");
    stickyidlink.onclick = function () {
        stickyheader.setAttribute('data-navstate', 'closed');
    };
});