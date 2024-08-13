// PUT YOUR CODE HERE

let formTL = gsap.timeline()

let formAnim = formTL.fromTo(".box",
    {
        width: "0",
        height: "0"
    },
    {
        width: "200",
        height: "200",
        duration: 0.5,
        delay: 0.5,
        stagger: 0.5,
    })
    .to(".red", { left: "calc(100vw - 200px)", duration: 1, borderRadius: "50%", backgroundColor: "green"}, )
    .to(".green", { top: "calc(100vh - 200px)", duration: 1, borderRadius: "50%", backgroundColor: "blue"}, "<")
    .to(".blue", { right: "calc(100vw - 200px)", duration: 1, borderRadius: "50%", backgroundColor: "yellow"}, "<")
    .to(".yellow", { bottom: "calc(100vh - 200px)", duration: 1, borderRadius: "50%", backgroundColor: "red"}, "<")
    .to(".yellow", { left: "-200px", duration: 1})
    .to(".red", { left: "100vw", duration: 1}, "<")
    .to(".green", { right: "-200px", duration: 1}, "<")
    .to(".blue", { right: "100vw", duration: 1}, "<")

    formAnim.repeat(-1).play();