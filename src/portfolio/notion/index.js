// initialization
const sideBarContent = document.querySelector("#sidebar-content")
const content = document.querySelector("#content")

const searchBGContainer = document.querySelector("#search-bg-container")
const searchContainer = document.querySelector("#search-container")
const searchInput = document.querySelector("#search-input")
const searchDropDown = document.querySelector("#search-dropdown")

const md = window.markdownit({
    breaks: true,
    highlight: function (str, lang) {
        if (lang && hljs.getLanguage(lang)) {
          try {
            return `<pre><code class="hljs language-${lang}">` +
                   hljs.highlight(str, { language: lang, ignoreIllegals: true }).value +
                   '</code></pre>';
          } catch (__) {}
        }
    
        return '<pre><code class="hljs">' + md.utils.escapeHtml(str) + '</code></pre>';
    }
})
md.use(centerImagesPlugin)
md.use(externalLinksPlugin)

let dataCache = {'pages': []}

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
    dataCache = data
    loadSearchResults(data['pages'])
    loadPage('/about')
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
        <button onclick="updateContent('${content}', '${icon}', '${name}', '${link}')" id="${link}" class="page-link tw-text-base tw-flex tw-flex-gap-1">
            ${iconElement}
            <div class="">${name}</div>
        </button>
    `
}

async function updateContent(path, icon, title, link){

    const body = await fetchContent(path)

    let iconElement = ""
    
    if (isFileOrLink(icon)){
        iconElement = `<img src=${icon} class="tw-object-cover tw-w-full tw-h-full" >`
    }else if (isEmoji(icon)){
        iconElement = `<p class="">${icon}</p>` // bootstrap icon class

    }else{     
        iconElement = `<i class="${icon ?? "bi bi-file-earmark"}"></i>` // bootstrap icon class
    }

    document.querySelector("#content-icon").innerHTML = iconElement
    document.querySelector("#title").innerHTML = `
                                <div class='tw-flex tw-gap-1'>
                                    <div class="tw-w-[20px] tw-h-[20px] tw-text-sm tw-rounded-sm tw-overflow-hidden">${iconElement}</div> 
                                    ${title}
                                </div>
                                `

    content.innerHTML = `

        ${path.endsWith(".md") ? md.render(body) : body}   
    `

    document.querySelectorAll(".page-link").forEach((ele) => {
        ele.classList.remove("active")
    })

    document.getElementById(link).classList.add("active")
}

function loadPage(pageLink){

    const item = dataCache['pages'].find(obj => obj.link === pageLink)

    if (!item){
        console.warn([`Page not found for: ${pageLink}`])
        return
    }

    updateContent(item.content, item.icon, item.name, item.link)
}

function searchOnClick(link){
    loadPage(link)
    setTimeout(closeSearch, 100)
}

function updateSearch(event){

    let searchResults = []

    dataCache['pages'].forEach(item => {
        if (item.name.toLowerCase().startsWith(event.target.value.toLowerCase())){
            searchResults.push(item)
        }
    })

    loadSearchResults(searchResults)

}

function loadSearchResults(data){

    if (data.length === 0){
        return 
    }
    searchDropDown.innerHTML = ""

    data.forEach((item) => {

        let icon = item.icon
        let iconElement = ""
        if (isFileOrLink(icon)){
            iconElement = `<img src=${icon} class="tw-object-cover tw-w-full tw-h-full" >`
        }else if (isEmoji(icon)){
            iconElement = `<p class="">${icon}</p>` // bootstrap icon class
    
        }else{     
            iconElement = `<i class="${icon ?? "bi bi-file-earmark"} "></i>` // bootstrap icon class
        }

        searchDropDown.innerHTML += `
                <button onclick="searchOnClick('${item.link}')" class="tw-flex tw-text-base tw-place-items-center tw-gap-2 tw-rounded-sm tw-cursor-pointer tw-p-2 tw-px-3 tw-w-full hover:tw-bg-[#f1f0ef]">
                    <div class="tw-w-[20px] tw-text-sm tw-h-[20px] tw-overflow-hidden tw-rounded-sm">
                        ${iconElement} 
                    </div>
                    ${item.name}
                </button>
            `
    })

}

function searchClickOutside(event){

    if (!searchContainer.contains(event.target)){
        closeSearch()
    }


}

function openSearch(){

    searchBGContainer.classList.remove("tw-hidden")
    setTimeout(() => {
        searchInput.focus()
    }, 1)

    setTimeout(() => window.document.addEventListener("click", searchClickOutside), 100)

}


function closeSearch(){

    searchBGContainer.classList.add("tw-hidden")
    window.document.removeEventListener("click", searchClickOutside)

}

window.addEventListener("keydown", (event) => {
    console.log("press")
    if (event.key === 'Escape'){
        closeSearch()
    }

})
