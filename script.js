


function implementingGSAP() {

    gsap.registerPlugin(ScrollTrigger);


    // --- SETUP START ---
    // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll
    const locoScroll = new LocomotiveScroll({
        el: document.querySelector("#main"),
        smooth: true
    });
    // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
    locoScroll.on("scroll", ScrollTrigger.update);

    // tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
    ScrollTrigger.scrollerProxy("#main", {
        scrollTop(value) {
            return arguments.length ? locoScroll.scrollTo(value, { duration: 0, disableLerp: true }) : locoScroll.scroll.instance.scroll.y;
        }, // we don't have to define a scrollLeft because we're only scrolling vertically.
        getBoundingClientRect() {
            return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
        },
        // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
        pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
    });

    // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
    ScrollTrigger.defaults({ scroller: "#main" });
    // --- SETUP END ---


    // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
    ScrollTrigger.refresh();
}
implementingGSAP();

// gsap.to("#page1 h1", {
//     x: -100,
//     scrollTrigger: {
//         trigger: "#page1 h1",
//         scroller: "#main",
//         start: "top 27%",
//         end: "bottom 0",
//         scrub: 1 // Adjust scrubbing speed if needed
//     }
// });

function animationsGSAP() {

    var animate = gsap.timeline()
    animate.from("#heroHead h1 , #logo, #nav-btns, #atPage , #heroHead p ", {
        y: -100,
        duration: 1,
        opacity: 0,
        stagger: 0.2,
        ease: "power2.out"
    })

    animate.from("#down,#arrow", {
        scale: 0,
        opacity: 0
    })

    animate.to("#down", {
        y: 30,
        repeat: -1,
        duration: .7,
        yoyo: 1
    })

}
animationsGSAP()



function cursorEffect() {
    var main = document.querySelector("#main");
    var btn = document.querySelector("#freelance");
    var dp = document.querySelector("#dp-img");
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

