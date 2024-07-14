
let isHeaderCollapsed = window.innerWidth < 1024
const collapseHeaderItems = document.getElementById("collapsed-items")
const collapseBtn = document.getElementById("collapse-btn")



const heroSlides = document.querySelector(".slideshow-container")
const heroSlideShow = new SlideShow(heroSlides, true, 10000)


const bookingDate = document.querySelector("#date")
const today = new Date().toISOString().split('T')[0]
bookingDate.setAttribute('min', today)


/**
 * Set booking timing
 */
const timings = document.querySelector("#timings")

for (let x=7; x < 20; x+=0.30){
    const nextTime = `${x.toFixed(2)}`.replace(".", ":")

    timings.innerHTML += `<option value="${nextTime}">${nextTime}</option>`

}

const reviewContainer = document.querySelector(".review-container")
const reviewSlideShow = new SlideShow(reviewContainer, true, 10000)


function onHeaderClickOutside(e){

    if (!collapseHeaderItems.contains(e.target)){
        toggleHeader()
    }

}


function toggleHeader(){
    // console.log("Colappse", isHeaderCollapsed)
    if (isHeaderCollapsed){
        // collapseHeaderItems.classList.remove("max-md:tw-opacity-0")
        collapseHeaderItems.classList.add("opacity-100")
        collapseHeaderItems.style.width = "60vw"
        collapseBtn.classList.remove("bi-list")
        collapseBtn.classList.add("bi-x")
        isHeaderCollapsed = false

        setTimeout(() => window.addEventListener("click", onHeaderClickOutside), 1)

    }else{
        collapseHeaderItems.classList.remove("opacity-100")
        collapseHeaderItems.style.width = "0vw"
        collapseBtn.classList.remove("bi-x")
        collapseBtn.classList.add("bi-list")
        isHeaderCollapsed = true
        window.removeEventListener("click", onHeaderClickOutside)

    }
}

function responsive(){
    if (window.innerWidth > 750){
        collapseHeaderItems.style.width = ""
    }
}

// function

window.addEventListener("resize", responsive)

// review section
const reviewModal = new Modal(document.querySelector("#modal")) // asks for user review

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
    /**
     * If the rating is above 4 request the user to write a public review, else
     * a private review
     */
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