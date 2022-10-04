// OVERLAY NAV MENU DRAWER

const mymenubutton = document.querySelector('.menu-button');
const mysitenav = document.querySelector('.site-header .site-nav');

mymenubutton.onclick = function () {
    if (mysitenav.getAttribute('data-navstate') === 'open') {
        mysitenav.setAttribute('data-navstate', 'closed');
    } else {
        mysitenav.setAttribute('data-navstate', 'open');
    }
}

// SCROLL TRIGGER ANIMATION
// CHANGE ACTIVE STATE FOR ALL SECTIONS WITH INTERSECTION OBSERVER

const myobserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.setAttribute("data-sectionstate", "active");
        } else {
            entry.target.setAttribute("data-sectionstate", "inactive");
        }
    });
});


document.querySelectorAll(".animate-on-scroll").forEach((section) => {
    myobserver.observe(section);
});

// CHANGE ACTIVE STATE FOR ALL SECTIONS WITH INTERSECTION OBSERVER
const io_options = {
    // root: document.body,
    rootMargin: "0px 0px 0px 0px",
    threshold: ".50"
};
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.setAttribute("data-sectionstate", "active");
        } else {
            entry.target.setAttribute("data-sectionstate", "inactive");
        }
    });
}, io_options);
document.querySelectorAll("section").forEach((section) => {
    observer.observe(section);
});


// LOTTIE READER
var animation = bodymovin.loadAnimation({
    container: document.getElementById('swirl-yellow'),
    render: 'svg',
    loop: true,
    autoplay: true,
    path: 'js/swirlyellow.json'
})

var animation = bodymovin.loadAnimation({
    container: document.getElementById('swirl-yellow2'),
    render: 'svg',
    loop: true,
    autoplay: true,
    path: 'js/swirlyellow.json'
})

var animation = bodymovin.loadAnimation({
    container: document.getElementById('swirl-yellow3'),
    render: 'svg',
    loop: true,
    autoplay: true,
    path: 'js/swirlyellow.json'
})