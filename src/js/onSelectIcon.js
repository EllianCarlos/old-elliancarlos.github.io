console.log("OnSelectIcon Running")
var lockClick = true
const icons = document.querySelectorAll(".icons img")


function clickIcon(element){
    const classItem = element.classList[(element.classList.length - 1)]
    skillblockController(classItem)
    clearIconsButOne(element)
    placeAndShowST(element)
}

function skillblockController(givenClass) {
    console.log(givenClass)
    var blocks = document.getElementsByClassName("skillblock")
    
    for (let index = 0; index < blocks.length; index++) {
        let element = blocks[index]
        
        if (!element.classList.contains(givenClass)) {
            element.style.display = "none"
        }
        else {
            element.style.display = "flex"
        }
    }
}

function clearIconsButOne(notClearIcon) {
    icons.forEach(element => {
        let smallText = document.querySelector(".smallTextIcons")
        if (element != notClearIcon) {
            element.style.transform = "unset"
        } else {
            if (notClearIcon.style.transform != "scale(1.3)") {
                element.style.transform = "scale(1.3)"
                smallText.style.display = "block"
            } else {
                element.style.transform = "unset"
                smallText.style.display = "none"
            }
        }
    });
}

function placeAndShowST(element) {
    let x1 = element.parentElement.getBoundingClientRect().left
    let x2 = element.getBoundingClientRect().left
    // let x1 = element.parentElement.getBoundingClientRect().x
    // let x2 = element.getBoundingClientRect().x
    let width = element.width
    console.log("X1: "+x1+",X2:"+x2+",Width:"+width)
    let smallText = document.querySelector(".smallTextIcons")
    smallText.style.margin = "-0.5vh 0 "+" 0 "+(x2-x1)+"px"
    smallText.style.minWidth = width + "px"
    smallText.innerHTML = element.classList[element.classList.length-1]
}


icons.forEach(element => {
    element.addEventListener("click", function () { clickIcon(element) }, true)
})