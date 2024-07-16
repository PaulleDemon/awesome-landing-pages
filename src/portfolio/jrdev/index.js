// initialization


const tabs = document.querySelectorAll(".tab-content") 
const tabButtons = document.querySelectorAll(".tab-btn")

function openTab(evt, tabName){

    tabs.forEach((tab) => {
        tab.style.display = 'none'
    })

    tabButtons.forEach((btn) => btn.classList.remove("tab-active"))

    document.querySelector(`[data-tab-name=${tabName}]`).style.display = 'block'

    evt.target.classList.add("tab-active") // set current button to be active

}

function switchTheme(){
    const themeSelector = document.querySelector("#theme-selector")

    document.querySelector("html").setAttribute("data-theme", themeSelector.value)
}

if (localStorage.getItem('color-mode') === 'dark' || (!('color-mode' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    document.documentElement.classList.add('tw-dark')
    updateToggleModeBtn()
} else {
    document.documentElement.classList.remove('tw-dark')
    updateToggleModeBtn()
}

function toggleMode(){
    //toggle between dark and light mode

    document.documentElement.classList.toggle("tw-dark")
    updateToggleModeBtn()
    
}

function updateToggleModeBtn(){

    const toggleIcon = document.querySelector("#toggle-mode-icon")
    
    if (document.documentElement.classList.contains("tw-dark")){
        // dark mode
        toggleIcon.classList.remove("bi-sun-fill")
        toggleIcon.classList.add("bi-moon-fill")
        localStorage.setItem("color-mode", "dark")
        
    }else{
        toggleIcon.classList.add("bi-sun-fill")
        toggleIcon.classList.remove("bi-moon-fill")
        localStorage.setItem("color-mode", "light")
    }

}