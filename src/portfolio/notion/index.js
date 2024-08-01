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
    
    try{
        const response = await fetch(path)
        return await response.text()

    }catch(e){
        console.error(e)
        return ""
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
    }else if (isEmoji(icon)){
        iconElement = `<p class="">${icon}</p>` // bootstrap icon class

    }else{     
        iconElement = `<i class="${icon ?? "bi bi-file-earmark"}"></i>` // bootstrap icon class
    }


    sideBarContent.innerHTML += `
        <button onclick="updateContent('${content}', '${icon}', '${name}')"  class="page-link tw-text-base tw-flex tw-flex-gap-1">
            ${iconElement}
            <div class="">${name}</div>
        </button>
    `
}

async function updateContent(path, icon, title){

    const body = await fetchContent(path)

    let iconElement = ""
    
    if (isFileOrLink(icon)){
        iconElement = `<img src=${icon} class="tw-object-cover tw-w-full tw-h-full" >`
    }else if (isEmoji(icon)){
        iconElement = `<p class="">${icon}</p>` // bootstrap icon class

    }else{     
        iconElement = `<i class="${icon ?? "bi bi-file-earmark"} tw-text-6xl"></i>` // bootstrap icon class
    }

    document.querySelector("#content-icon").innerHTML = iconElement
    document.querySelector("#title").innerHTML = `
                                <div class='tw-flex tw-gap-1'>
                                    <div class="tw-w-[20px] tw-h-[20px] tw-rounded-sm tw-overflow-hidden">${iconElement}</div> 
                                    ${title}
                                </div>
                                `

    content.innerHTML = `

        ${md.render(body)}
    `
    console.log("body: ", body, content.innerHTML)
}
