const RESPONSIVE_WIDTH = 1024

gsap.registerPlugin(ScrollTrigger)

let headerWhiteBg = false
let isHeaderCollapsed = window.innerWidth < 1024
const collapseHeaderItems = document.getElementById("collapsed-items")
const collapseBtn = document.getElementById("collapse-btn")



const menuItemContainer = document.querySelectorAll(".menu-item-container")

menuItemContainer.forEach(e => {

    const img = e.querySelector("img")
    e.addEventListener("mouseenter", () => {
        img.style.scale = 1.1
    })

    e.addEventListener("mouseleave", () => {
        img.style.scale = 1
    })

})


const reviewContainer = document.querySelector(".review-container")
const reviewSlideShow = new SlideShow(reviewContainer, true, 10000)


function onHeaderClickOutside(e) {

    if (!collapseHeaderItems.contains(e.target)) {
        toggleHeader()
    }

}


function toggleHeader() {
    
    if (isHeaderCollapsed) {
        // collapseHeaderItems.classList.remove("max-md:tw-opacity-0")
        collapseHeaderItems.classList.add("!tw-opacity-100",)
        collapseHeaderItems.style.width = "60vw"
        collapseBtn.classList.remove("bi-list", "primary-text-color")
        collapseBtn.classList.add("bi-x")
        isHeaderCollapsed = false

        setTimeout(() => window.addEventListener("click", onHeaderClickOutside), 1)

    } else {
        collapseHeaderItems.classList.remove("!tw-opacity-100")
        collapseHeaderItems.style.width = "0vw"
        collapseBtn.classList.remove("bi-x")
        collapseBtn.classList.add("bi-list", headerWhiteBg ? "primary-text-color" : null)
        isHeaderCollapsed = true
        window.removeEventListener("click", onHeaderClickOutside)

    }
}

function responsive() {
    if (window.innerWidth > RESPONSIVE_WIDTH) {
        collapseHeaderItems.style.width = ""
    }else{
        isHeaderCollapsed = true
        collapseBtn.classList.add("bi-list", headerWhiteBg ? "primary-text-color" : null)

    }
}

// function

window.addEventListener("resize", responsive)

const bookingDate = document.querySelector("#date")
const today = new Date().toISOString().split('T')[0]
bookingDate.setAttribute('min', today)


const timings = document.querySelector("#timings")

for (let x=7; x < 20; x+=0.30){
    const nextTime = `${x.toFixed(2)}`.replace(".", ":")

    timings.innerHTML += `<option value="${nextTime}">${nextTime}</option>`

}
