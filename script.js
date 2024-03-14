gsap.registerPlugin(ScrollTrigger);

const locoScroll = new LocomotiveScroll({
    el: document.querySelector("#main"), // Change this to match your container
    smooth: true,
    tablet: { smooth: true },
    smartphone: { smooth: true }
});

locoScroll.on("scroll", ScrollTrigger.update);

ScrollTrigger.scrollerProxy("#main", {
    scrollTop(value) {
        return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
    },
    getBoundingClientRect() {
        return {
            top: 0,
            left: 0,
            width: window.innerWidth,
            height: window.innerHeight
        };
    }
});

ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
ScrollTrigger.refresh();

document.addEventListener("mousemove", function (event) {
    const x = (window.innerWidth - event.clientX) / window.innerWidth * 100;
    const y = (window.innerHeight - event.clientY) / window.innerHeight * 100;
    const backgroundPosition = `${x}% ${y}%`;
    document.getElementById("background").style.backgroundPosition = backgroundPosition;
});
