function implementingGSAP() {
    gsap.registerPlugin(ScrollTrigger);

    const locoScroll = new LocomotiveScroll({
        el: document.querySelector("#main"),
        smooth: true,

        // for tablet smooth
        tablet: { smooth: true },

        // for mobile
        smartphone: { smooth: true }
    });
    locoScroll.on("scroll", ScrollTrigger.update);

    ScrollTrigger.scrollerProxy("#main", {
        scrollTop(value) {
            return arguments.length
                ? locoScroll.scrollTo(value, 0, 0)
                : locoScroll.scroll.instance.scroll.y;
        },
        getBoundingClientRect() {
            return {
                top: 0,
                left: 0,
                width: window.innerWidth,
                height: window.innerHeight
            };
        }

        // follwoing line is not required to work pinning on touch screen

        /* pinType: document.querySelector(".smooth-scroll").style.transform
          ? "transform"
          : "fixed"*/
    });



    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

    ScrollTrigger.refresh();

}
implementingGSAP();


function cursorEffect() {
    var main = document.querySelector("#main");
    var btn = document.querySelector("#freelance");
    var dp = document.querySelector("img");
    var cursor = document.querySelector("#cursor");

    document.addEventListener("mousemove", function (event) {
        gsap.to(cursor, {
            x: event.clientX,
            y: event.clientY
        });
    });

    main.addEventListener("mouseenter", function () {
        gsap.to(cursor, {
            scale: 1,
            opacity: 1
        });
    });
    main.addEventListener("mouseleave", function () {
        gsap.to(cursor, {
            scale: 0,
            opacity: 0
        });
    });
    btn.addEventListener("mouseenter", function () {
        gsap.to(cursor, {
            scale: 0,
            opacity: 0
        });
    });

    btn.addEventListener("mouseleave", function () {
        gsap.to(cursor, {
            scale: 1,
            opacity: 1
        });
    });
    dp.addEventListener("mouseenter", function () {
        gsap.to(cursor, {
            height: "100px",
            width: "100px",
        });
    });

    dp.addEventListener("mouseleave", function () {
        gsap.to(cursor, {
            height: "10px",
            width: "10px",
            opacity: 1
        });
    });


}
cursorEffect();


function backgroundEffect() {
    document.addEventListener("mousemove", function (event) {
        const x = (window.innerWidth - event.clientX) / window.innerWidth * 100;
        const y = (window.innerHeight - event.clientY) / window.innerHeight * 100;
        const backgroundPosition = `${x}% ${y}%`;
        document.getElementById("background").style.backgroundPosition = backgroundPosition;
    });


}
backgroundEffect();

function animationsGSAP() {

    var animate = gsap.timeline()
    animate.from("#logo, #nav-btns, #arrow , #page1-top p span, #page1-bottom p span", {
        y: -100,
        duration: 1,
        opacity: 0,
        stagger: .4,
        ease: "power2.out",

        // y: 0,
        // stagger: 0.5,
        // opacity: 0,
        // // delay: 0.2,
        // duration: 5,

    })

    animate.to("#arrow", {
        y: 10,
        repeat: -1,
        duration: .7,
        yoyo: 1
    })

}
animationsGSAP()

function hamburger() {

    document.addEventListener("DOMContentLoaded", function () {
        const hamburger = document.querySelector(".hamburger");
        const navmenu = document.querySelector("#nav-allbtns");

        hamburger.addEventListener("click", function () {
            hamburger.classList.toggle("active");
            navmenu.classList.toggle("active");
        });

        navmenu.addEventListener("click", function () {
            hamburger.classList.remove("active");
            navmenu.classList.remove("active");
        });
    });

}
hamburger()


function page2() {

    var page2 = gsap.timeline({
        scrollTrigger: {
            trigger: "#page2",
            scroller: "#main",
            start: "top 60%",
            end: "top 0%",
            scrub: 1
        }
    })

    page2.from("#page2-main p", {
        y: -50,
        duration: 5,
        opacity: 0,
        stagger: 4,
        ease: "power1.out",

    });
    page2.from("#page2-main h2 span", {
        y: -50,
        duration: 5,
        opacity: 0,
        stagger: 4,
        ease: "power1.out",

    });


    page2.from("#line1", {
        x: "-120%",
        scrollTrigger: {
            trigger: "#page2",
            scroller: "#main",
            start: "top 50%",
            end: "top 20%",
            scrub: 1
        }
    })
}
page2()

function page3() {

    var page3 = gsap.timeline({
        scrollTrigger: {
            trigger: "#page3",
            scroller: "#main",
            start: "top 60%",
            end: "top 0%",
            scrub: 1
        }
    })

    page3.from("#page3-main p", {
        y: -50,
        duration: 5,
        opacity: 0,
        stagger: 4,
        ease: "power1.out",

    });
    page3.from("#page3-main h4", {
        y: -50,
        duration: 5,
        opacity: 0,
        stagger: 4,
        ease: "power1.out",

    });


    page3.from("#line2", {
        x: "-120%",
        scrollTrigger: {
            trigger: "#page3",
            scroller: "#main",
            start: "top 50%",
            end: "top 20%",
            scrub: 1
        }
    })
}
page3()

function page4() {

    var page4 = gsap.timeline({
        scrollTrigger: {
            trigger: "#page4",
            scroller: "#main",
            start: "top 80%",
            end: "top 0%",
            scrub: 1
        }
    })

    page4.from("#page4-main p", {
        y: -50,
        duration: 5,
        opacity: 0,
        stagger: 4,
        ease: "power1.out",

    });
    page4.from("#page4-main h2 span", {
        y: -100,
        duration: 5,
        opacity: .2,
        stagger: 4,
        ease: "power1.out",

    });


    page4.from("#line3", {
        x: "-120%",
        scrollTrigger: {
            trigger: "#page4",
            scroller: "#main",
            start: "top 50%",
            end: "top 20%",
            scrub: 1
        }
    })
}
page4()

function page6() {
    var page6 = gsap.timeline({
        scrollTrigger: {
            trigger: "#page6-content",
            scroller: "#main",
            start: "top 70%",
            end: "top 0%",
            scrub: 3
        }
    });

    page6.from("#line5", {
        x: "-120%",
        scrollTrigger: {
            trigger: "#page6",
            scroller: "#main",
            start: "top 70%",
            end: "top 40%",
            scrub: 1 // Adjust scrubbing speed if needed
        }
    })

    page6.from(".eyes", {
        scale: 0,
        opacity: 0.5,
        duration: 5, // Adjust duration to slow down the animation
    });

    page6.to(".eyes", {
        opacity: 1,
        duration: 5, // Adjust duration to match the previous animation
        ease: "power1.out"
    });


}
page6()



function eyes() {

    let Ball = document.getElementsByClassName("ball");
    document.onmousemove = function () {
        //get innerWidth,innerheight for browser

        //get horizontal coordinate of the onmousemove
        let x = (event.clientX * 100) / window.innerWidth + "%";

        //get the verticle coordinate of onmousemove
        let y = (event.clientY * 100) / window.innerHeight + "%";

        for (let i = 0; i < 2; i++) {
            Ball[i].style.left = x;
            Ball[i].style.top = y;
            Ball[i].style.transform = "translate(-" + x + ", -" + y + ")";
        }
    };


}
eyes()

document.addEventListener('contextmenu', event => event.preventDefault());

