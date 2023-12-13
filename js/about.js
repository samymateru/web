gsap.registerPlugin(ScrollTrigger);

function main(){

    const contentBlock = document.querySelectorAll(".about-content");

    contentBlock.forEach(content => {
        gsap.from(content, {
            x: -300,
            duration: 2,
            scrollTrigger: {
                trigger: content,
                start: "top 70%",
                end: "top 20%",
                scrub: 1,
                
                
                

            },
            stagger: 1


        })
    })

}

export default main();


