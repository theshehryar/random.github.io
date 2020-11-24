const navigationBar = document.getElementById("website-nav")
const mobileMenuButton = document.querySelector("#mbl-menu-btn .menu-btn")
// const mobileCloseButton = document.querySelector("#mbl-menu-btn .close-btn")

let toggleNav  = true
mobileMenuButton.addEventListener("click" , (e)=>{
        
    if(toggleNav == true){
        navigationBar.style.height = "auto"
        navigationBar.style.display = "flex"
        e.target.style.transform = "scale(0)"
        e.target.style.opacity = "0"
        e.target.setAttribute("src" ,"../assets/images/icons/close.svg")
        // mobileCloseButton.style.display = "block"
    
        // mobileCloseButton.style.width = "40px"
        // mobileCloseButton.style.opacity = "1"
        // mobileCloseButton.style.transform = "scale(1) , rotateX(45deg)"
        toggleNav = false
    }
    
    else{
        console.log("close menu")
    }
})
console.log(mobileMenuButton)

