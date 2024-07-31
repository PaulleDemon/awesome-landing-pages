// initialization
const md = window.markdownit()
const sideBarContent = document.querySelector("#sidebar-content")
const content = document.querySelector("#content")


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




/**
 * Fetches the json db
 * @returns JS object
 */
async function fetchDB(){

    try{
        const response = await fetch(`data.json`)

        return await response.json()
    }catch(e){
        return 
    }
}


async function fetchContent(path){
    console.log("path: ", path)
    try{
        const response = await fetch(path)

        const body = await response.text()
        updateContent(body)

    }catch(e){
        console.error(e)
        return 
    }
}


fetchDB().then((data) => {
    for (let x of data['pages']){
        buildSideBar(x.icon, x.name, x.link, x.content)
    }
})


function buildSideBar(icon, name, link, content){

    let iconElement = ""
    
    if (isFileOrLink(icon)){
        iconElement = `<div class="icon"><img src=${icon} class="tw-object-contain" ></div>`
    }else{     
        iconElement = `<i class="${icon ?? "bi bi-file-earmark"}"></i>` // bootstrap icon class
    }


    sideBarContent.innerHTML += `
        <button onclick="fetchContent('${content}')"  class="page-link tw-text-base tw-flex tw-flex-gap-1">
            ${iconElement}
            <div class="">${name}</div>
        </button>
    `
}

function updateContent(body){
    content.innerHTML = md.render(body)

}
