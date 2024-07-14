const RESPONSIVE_WIDTH = 1024

gsap.registerPlugin(ScrollTrigger)

let headerWhiteBg = false
let isHeaderCollapsed = window.innerWidth < 1024
const collapseHeaderItems = document.getElementById("collapsed-items")
const collapseBtn = document.getElementById("collapse-btn")


const expandingBg = document.getElementById("expanding-header-bg")

gsap.to(expandingBg, {

    height: "100%",
    duration: 3,
    scrollTrigger: {
        trigger: "#hero-section",
        // pin: true, 
        start: "50px 10px", // when the top of the trigger hits the top of the viewport
        end: "80px 50px",
        scrub: 1,
        // markers: true
    }

})

ScrollTrigger.create({
    trigger: "#hero-section",
    start: "50px 10px", // when the top of the trigger hits the top of the viewport
    end: "60px 40px",
    scrub: 1,
    // markers: true,
    onEnter: () => {
        const headerLinks = document.querySelectorAll(".header-links")

        // if (window.innerWidth > RESPONSIVE_WIDTH) {
            headerLinks.forEach(e => {
                e.classList.toggle("header-white-bg")
            })
        // }
        if (isHeaderCollapsed){
            collapseBtn.classList.add("primary-text-color")
        }
        headerWhiteBg = true
    },
    onEnterBack: () => {
        const headerLinks = document.querySelectorAll(".header-links")

        // if (window.innerWidth > RESPONSIVE_WIDTH) {
            headerLinks.forEach(e => {
                e.classList.toggle("header-white-bg")
            })
        // }
        collapseBtn.classList.remove("primary-text-color")
        headerWhiteBg = false
    }
})

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

const reviewModal = new Modal(document.querySelector("#modal"))

const starContainer = document.querySelector('.stars')
const stars = document.querySelectorAll('.star')

function handleStarHover(event) {
    const rating = event.currentTarget.getAttribute('data-value')
    stars.forEach(star => {
        if (parseInt(star.getAttribute('data-value')) <= rating) {
            star.classList.add('active')
        } else {
            star.classList.remove('active')
        }
    })
}

function handleStarClicked(event){
    const rating = event.currentTarget.getAttribute('data-value')

    if (rating < 4){
        reviewModal.updateModal("We are sorry, you are disappointed", 
                            "Please let us know what we can improve.")
        reviewModal.showModalInput()
        reviewModal.updateButton("Submit")
    }else{
        reviewModal.updateModal("Thank you!", 
                            `We are pleased to hear you like us. 
                            Could you please rate us on Google maps?`)
        reviewModal.hideModalInput()
        reviewModal.updateButton("Open maps", "https://maps.app.goo.gl/")
    }

    reviewModal.show()

}

function hideActiveStar(){
    stars.forEach(star => {
        
        star.classList.remove('active')
    })
}

stars.forEach((star, i) => {
    star.addEventListener('mouseover', handleStarHover)
    star.addEventListener('click', handleStarClicked)
   
})
    
starContainer.addEventListener('mouseleave', hideActiveStar)