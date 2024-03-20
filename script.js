
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


function page1() {
    var tl = gsap.timeline({
        scrollTrigger: {
            trigger: "#heroPara p",
            scroller: "#main",
            start: "top 100%",
            end: "top 1%",
            duration: .1,
            scrub: 1// Adjust scrubbing speed if needed
        }
    })
    tl.to("#p1", {
        x: -100,
    }, "anim")

    tl.to("#p2", {
        x: 100,
    }, "anim")

}
page1()

function page2() {

    var page2 = gsap.timeline({
        scrollTrigger: {
            trigger: "#pageintro",
            scroller: "#main",
            start: "top 60%",
            end: "top 0%",
            scrub: 1 // Adjust scrubbing speed if needed
        }
    })

    page2.from("#intropara span", {
        y: -100,
        duration: 5,
        opacity: 0,
        stagger: 4,
        ease: "power1.out",

    });

    page2.from("#learncircle", {
        scale: 0,
        opacity: 0.5,
        duration: 5, // Adjust duration to slow down the animation
    });

    page2.to("#learncircle", {
        opacity: 1,
        duration: 5, // Adjust duration to match the previous animation
        ease: "power1.out"
    });


    page2.from("#line1", {
        x: "-120%",
        scrollTrigger: {
            trigger: "#pageintro",
            scroller: "#main",
            start: "top 50%",
            end: "top 20%",
            scrub: 1 // Adjust scrubbing speed if needed
        }
    })
}
page2()

function page3() {

    var page3 = gsap.timeline({
        scrollTrigger: {
            trigger: "#page3-head span",
            scroller: "#main",
            duration: 10,
            stagger: 2,
            start: "top 60%",
            end: "top 30%",
            scrub: 1 // Adjust scrubbing speed if needed
        }
    })

    page3.from("#page3-head span", {
        y: -100,
        duration: 5,
        opacity: 0,
        stagger: 5,

    });

    page3.from("#page3-main h2", {
        y: -100,
        duration: 5,
        opacity: 0,
        stagger: 1,
        ease: "power1.out",
    });

    page3.from("#projectcircle", {
        scale: 0,
        opacity: 0.5,
        duration: 5, // Adjust duration to slow down the animation
    });

    page3.to("#projectcircle", {
        opacity: 1,
        duration: 5, // Adjust duration to match the previous animation
        ease: "power1.out"
    });


    page3.from("#line2", {
        x: "-120%",
        scrollTrigger: {
            trigger: "#page3-head span",
            scroller: "#main",
            start: "top 70%",
            end: "top 40%",
            scrub: 1 // Adjust scrubbing speed if needed
        }
    })

    page3.from("#line3", {
        x: "-120%",
        scrollTrigger: {
            trigger: "#page4",
            scroller: "#main",
            start: "top 70%",
            end: "top 40%",
            scrub: 1 // Adjust scrubbing speed if needed
        }
    })

    page3.from("#line4", {
        x: "-120%",
        scrollTrigger: {
            trigger: "#page5",
            scroller: "#main",
            start: "top 70%",
            end: "top 40%",
            scrub: 1 // Adjust scrubbing speed if needed
        }
    })



}
page3()

function page5() {
    var page5 = gsap.timeline({
        scrollTrigger: {
            trigger: "#page5-content",
            scroller: "#main",
            start: "top 10%",
            end: "top 0%",
            scrub: 3
        }
    });

    page5.to("#connectbox", {
        width: "80%",
    })

    page5.from(".eyes", {
        scale: 0,
        opacity: 0.5,
        duration: 5, // Adjust duration to slow down the animation
    });

    page5.to(".eyes", {
        opacity: 1,
        duration: 5, // Adjust duration to match the previous animation
        ease: "power1.out"
    });


}
page5()






function animationsGSAP() {

    var animate = gsap.timeline()
    animate.from("#heroHead h1 , #logo, #nav-btns, #atPage , #heroHead p ", {
        y: -100,
        duration: 1,
        opacity: 0,
        stagger: 0.2,
        ease: "power2.out",

    })

    animate.from("#down,#arrow", {
        scale: 0,
        opacity: 0.5,
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
    var circle = document.querySelector("#learncircle , #projectcircle");
    var cursor = document.querySelector("#cursor");
    var elem = document.querySelector("#page3-elements .box")

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

    circle.addEventListener("mouseenter", function () {
        gsap.to(cursor, {
            scale: 0,
            opacity: 0
        });
    });

    circle.addEventListener("mouseleave", function () {
        gsap.to(cursor, {
            scale: 1,
            opacity: 1
        });
    });

    // elem.addEventListener("mouseenter", function () {
    //     gsap.to(cursor, {
    //         scale: 10,
    //         opacity: 1
    //     });
    // });

    // elem.addEventListener("mouseleave", function () {
    //     gsap.to(cursor, {
    //         scale: 1,
    //         opacity: 1
    //     });
    // });





}
cursorEffect();
// Select all video and image elements
var mediaElements = document.querySelectorAll("video, img");

// Add event listener for mousemove on the document
document.addEventListener("mousemove", function (event) {
    // Update cursor position
    gsap.to(cursor, {
        x: event.clientX,
        y: event.clientY
    });
});



function backgroundEffect() {
    document.addEventListener("mousemove", function (event) {
        const x = (window.innerWidth - event.clientX) / window.innerWidth * 100;
        const y = (window.innerHeight - event.clientY) / window.innerHeight * 100;
        const backgroundPosition = `${x}% ${y}%`;
        document.getElementById("background").style.backgroundPosition = backgroundPosition;
    });


}
backgroundEffect();


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

const hamburger = document.querySelector(".hamburger");
const navmenu = document.querySelector("#nav-allbtns");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navmenu.classList.toggle("active");
})

document.querySelectorAll(".nav-btns").forEach(n => n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navmenu.classList.remove("active");
}))