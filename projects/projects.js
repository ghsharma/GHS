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


// anotherpage.js

// Function to navigate back to the main page
function navigateBackToMainPage() {
    // Save the fact that the loader has been displayed once
    sessionStorage.setItem('loaderDisplayed', true);
    // Navigate back to the main page
    // Example: window.location.href = 'index.html';
}



function backgroundEffect() {
    document.addEventListener("mousemove", function (event) {
        const x = (window.innerWidth - event.clientX) / window.innerWidth * 100;
        const y = (window.innerHeight - event.clientY) / window.innerHeight * 100;
        const backgroundPosition = `${x}% ${y}%`;
        document.getElementById("background").style.backgroundPosition = backgroundPosition;
    });


}
backgroundEffect();



var tl = gsap.timeline({
    scrollTrigger: {
        trigger: "#main",
        // markers:true,
        start: "38% 50%",
        end: "100% 50%",
        scrub: 2,
        pin: true
    }
});
tl
    .to(".text", {
        top: "-7%",
    }, 'a')
    .to("#card-one", {
        top: "35%",
    }, 'a')
    .to("#card-two", {
        top: "130%"
    }, 'a')
    .to("#card-two", {
        top: "42%"
    }, 'b')
    .to("#card-one", {
        width: "65%",
        height: "65vh"
    }, 'b')
    .to("#card-three", {
        top: "130%"
    }, 'b')
    .to("#card-three", {
        top: "50%"
    }, 'c')
    .to("#card-two", {
        width: "70%",
        height: "70vh"
    }, 'c')