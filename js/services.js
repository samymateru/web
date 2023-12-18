
function service(){
    const container = document.querySelector(".services");
    const elements = gsap.utils.toArray(".service");
   
    let scroll = gsap.to(elements, {
        xPercent: -120 * (elements.length - 1),
        ease: "none",
        scrollTrigger: {
            trigger: ".services-wrapper",
            pin: true,
            scrub: 1,
            pinSpacing: 10,
            start: "top 60px",
            end: "+=3500"
        }
    })
}


export default service;