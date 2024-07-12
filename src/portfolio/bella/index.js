
const RESPONSIVE_WIDTH = 1024

let isHeaderCollapsed = window.innerWidth < RESPONSIVE_WIDTH
const collapseHeaderItems = document.getElementById("collapsed-items")
const collapseBtn = document.getElementById("collapse-btn")


gsap.registerPlugin(ScrollTrigger)


const flipImage = document.querySelector("#flip-image")

gsap.to(flipImage, {

    scale: 1,
    translateY: 0,
    // translateY: "0%",
    rotateX: "0deg",
    scrollTrigger: {
        trigger: "#flip-section",
        start: window.innerWidth > RESPONSIVE_WIDTH ? "top 95%" : "top 70%",
        end: "bottom bottom",
        scrub: 1,
        // markers: true,
    }

})


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
    if (window.innerWidth > RESPONSIVE_WIDTH){
        collapseHeaderItems.style.width = ""
    }
}

// function

window.addEventListener("resize", responsive)

const dropdowns = document.querySelectorAll('.dropdown')
dropdowns.forEach(dropdown => new Dropdown(`#${dropdown.id}`))

const cursor = document.querySelector('.cursor')

function isTouchDevice() {
	return (('ontouchstart' in window) ||
	   (navigator.maxTouchPoints > 0) ||
	   (navigator.msMaxTouchPoints > 0))
}

function cursorPosUpdate(e){
	cursor.style.display = 'block'
	cursor.style.left = e.clientX + 'px'
	cursor.style.top = e.clientY + 'px'
}

function hideCursor(){
	cursor.style.display = 'none'

}

function addCursorListeners(){
	if (!isTouchDevice() || window.innerWidth > RESPONSIVE_WIDTH) {
		document.addEventListener('mousemove', cursorPosUpdate)
		window.addEventListener("blur", hideCursor)
	} else {
		hideCursor()
		document.removeEventListener('mousemove', cursorPosUpdate)
		window.removeEventListener("blur", hideCursor)
	}
}

addCursorListeners()


window.addEventListener("resize", () => {
	addCursorListeners()
})

window.addEventListener("focus", () => {
	addCursorListeners()
})

const slidingImageContainer = document.querySelector("#sliding-images")

/**
 * Contains the sliding image path
 */
const images = [
    "./assets/images/slideshow/women1.jpg",
    "./assets/images/slideshow/women2.jpg",
    "./assets/images/slideshow/women3.jpg",
    "./assets/images/slideshow/women4.jpg",
    "./assets/images/slideshow/women5.jpg",
    "./assets/images/slideshow/women6.jpg",
]

function addSlidingImages(img){
    
    const imageContainer = `
            <div class="tw-min-w-[350px] tw-w-[350px] tw-h-[350px] 
                        tw-overflow-clip tw-bg-black sliding-image">
                <img src="${img}" 
                        alt="" class="tw-object-cover tw-w-full tw-h-full">
            </div>
    `

    slidingImageContainer.innerHTML += imageContainer

}


images.forEach( img => addSlidingImages(img))
images.forEach( img => addSlidingImages(img))


const sliding = gsap.to(slidingImageContainer, {
    x: '-50%', // Adjust based on your actual element width to ensure it scrolls out of view
    ease: "none",
    duration: 80, // Initial duration in seconds
    repeat: -1, // Infinite loop
})


  // Event listeners for mouse hover
slidingImageContainer.addEventListener('mouseenter', () => sliding.timeScale(0.5)) // Slow down on hover
slidingImageContainer.addEventListener('mouseleave', () => sliding.timeScale(1)) // Return to original speed
