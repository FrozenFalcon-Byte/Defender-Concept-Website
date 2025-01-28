document.addEventListener("DOMContentLoaded", () => {
    const videos = document.querySelectorAll("[data-video]");

    videos.forEach((video) => {
        gsap.to(video, {
            scrollTrigger: {
                trigger: video,
                start: "top 80%", 
                end: "bottom 20%",
                onEnter: () => video.play(),
                onLeave: () => video.pause(),
                onEnterBack: () => video.play(),
                onLeaveBack: () => video.pause(),
                toggleActions: "play none none none"
            }
        });
    });
});



var tl1 = gsap.timeline({
    scrollTrigger: {
        trigger: "#landing-page",
        pin: true,
        // markers: true,
        start: "top",
        end: "100% -10%",
        scrub: 1,
      },
});

tl1.to(".moving-text", {
    y: "-110%",
    ease: "power1.in",
}).to("#landing-page video", {
    width: "90vw",
    height: "25vw",
    borderRadius: "3rem",
    ease: "power1.out",
}).to("#landing-page h2", {
    opacity: 1,
});

gsap.utils.toArray('.zoom-div').forEach((zoomDiv) => {
    let modelContainer = zoomDiv.querySelector('.model-container');

    gsap.timeline({
        scrollTrigger: {
            trigger: zoomDiv,
            pin: true,
            start: "top",
            end: "90% 30%",
            scrub: 1,
            toggleActions: "play reverse play reset",
        },
    }).to(modelContainer, {
        width: "100%",
    });
});

var tl3 = gsap.timeline({
    scrollTrigger: {
        trigger: "#experience",
        start: "top 60%",
        end: "70% 30%",
        scrub: 1,

    }
})


gsap.set("#exp-container h1", {
    y:"-100%",
})

tl3.to("#experience img", {
    width: "90vw",
    // height: "70vh",
}, "animation").to("#exp-container h1", {
    y:"-10%",
}, "animation");