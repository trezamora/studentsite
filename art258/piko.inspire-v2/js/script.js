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

// SWIPER JS 
const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    spaceBetween: 100,
    loop: true,

    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    // // And if we need scrollbar
    // scrollbar: {
    //     el: '.swiper-scrollbar',
    // },
});

// LOTTIE READER
var animation = bodymovin.loadAnimation({
    container: document.getElementById('about-animation'),
    render: 'svg',
    loop: true,
    autoplay: true,
    path: 'js/aboutanimation.json'
});

var animation = bodymovin.loadAnimation({
    container: document.getElementById('connect-animation'),
    render: 'svg',
    loop: true,
    autoplay: true,
    path: 'js/connectanimation.json'
});

var animation = bodymovin.loadAnimation({
    container: document.getElementById('join-animation'),
    render: 'svg',
    loop: true,
    autoplay: true,
    path: 'js/joinanimation.json'
});

// var animation = bodymovin.loadAnimation({
//     container: document.getElementById('swirl-yellow'),
//     render: 'svg',
//     loop: true,
//     autoplay: true,
//     path: 'js/swirlyellow.json'
// });

// var animation = bodymovin.loadAnimation({
//     container: document.getElementById('swirl-yellow2'),
//     render: 'svg',
//     loop: true,
//     autoplay: true,
//     path: 'js/swirlyellow.json'
// });

// var animation = bodymovin.loadAnimation({
//     container: document.getElementById('swirl-yellow3'),
//     render: 'svg',
//     loop: true,
//     autoplay: true,
//     path: 'js/swirlyellow.json'
// });


//FORM BUTTON JS
//Code By Webdevtrick(https://webdevtrick.com )

(function () {
    $('html').addClass('js');

    var contactForm = {
        container: $('#storyform'),
        config: {
            effect: 'slideToggle',
            speed: 200
        },

        init: function (config) {
            $.extend(this.config, config);

            $('#formbutton').on('click', this.show);
        },

        show: function () {
            var cf = contactForm,
                container = cf.container,
                config = cf.config;


            if (container.is(':hidden')) {
                cf.close.call(container);
                container[config.effect]
                    (config.speed);
            }
        },

        close: function () {
            var $this = $('#storyform');

            if ($this.find('span.close').length) return;

            $('<span class=close>-</span>')
                .prependTo(this)
                .on('click', function () {
                    $this[contactForm.config.effect](contactForm.config.speed);
                })
        }
    };

    contactForm.init({
        effect: 'fadeToggle',
        speed: 200
    });
})();