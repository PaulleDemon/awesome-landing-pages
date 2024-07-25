// initialization

const RESPONSIVE_WIDTH = 1024

let headerWhiteBg = false
let isHeaderCollapsed = window.innerWidth < RESPONSIVE_WIDTH
const collapseBtn = document.getElementById("collapse-btn")
const collapseHeaderItems = document.getElementById("collapsed-header-items")


function onHeaderClickOutside(e) {

    if (!collapseHeaderItems.contains(e.target)) {
        toggleHeader()
    }

}


function toggleHeader() {
    if (isHeaderCollapsed) {
        // collapseHeaderItems.classList.remove("max-md:tw-opacity-0")
        collapseHeaderItems.classList.add("opacity-100",)
        collapseHeaderItems.style.width = "60vw"
        collapseBtn.classList.remove("bi-list")
        collapseBtn.classList.add("bi-x", "max-lg:tw-fixed")
        isHeaderCollapsed = false

        setTimeout(() => window.addEventListener("click", onHeaderClickOutside), 1)

    } else {
        collapseHeaderItems.classList.remove("opacity-100")
        collapseHeaderItems.style.width = "0vw"
        collapseBtn.classList.remove("bi-x", "max-lg:tw-fixed")
        collapseBtn.classList.add("bi-list")
        isHeaderCollapsed = true
        window.removeEventListener("click", onHeaderClickOutside)

    }
}

function responsive() {
    if (window.innerWidth > RESPONSIVE_WIDTH) {
        collapseHeaderItems.style.width = ""

    } else {
        isHeaderCollapsed = true
    }
}

window.addEventListener("resize", responsive)



/** --------------------------- animations --------------------- */

gsap.to(".reveal-up", {
    opacity: 0,
    y: "100%",
})

gsap.to(".reveal-lr", { // reveal from left to right
    opacity: 0,
    x: "-100%",
})

gsap.to(".reveal-rl", { // reveal from left to right
    opacity: 0,
    x: "100%",
})

const sections = gsap.utils.toArray("section")


sections.forEach((sec) => {

    const scrollTriggerOptions = {
        trigger: sec,
        start: "10% 80%", // top of trigger hits the top of viewport
        end: "20% 90%",
        // markers: true,
        // scrub: 1,
    }
    
    const revealUptimeline = gsap.timeline({paused: true, 
                                            scrollTrigger: scrollTriggerOptions})
    
    const revealLrTimeline = gsap.timeline({paused: true, 
                                                scrollTrigger: scrollTriggerOptions})
    
    const revealRlTimeline = gsap.timeline({paused: true, 
                                                    scrollTrigger: scrollTriggerOptions})
    

    revealUptimeline.to(sec.querySelectorAll(".reveal-up"), {
        opacity: 1,
        duration: 0.8,
        y: "0%",
        stagger: 0.2,
    })

    
    revealLrTimeline.to(sec.querySelectorAll(".reveal-lr"), {
        opacity: 1,
        duration: 0.8,
        x: "0%",
        stagger: 0.2,
    }, "<")

    revealRlTimeline.to(sec.querySelectorAll(".reveal-rl"), {
        opacity: 1,
        duration: 0.8,
        x: "0%",
        stagger: 0.2,
    }, "<")


})
