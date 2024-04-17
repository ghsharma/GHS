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
