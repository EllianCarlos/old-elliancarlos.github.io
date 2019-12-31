console.log("OnSelectIcon Running")
var lockClick = true

const icons = document.querySelectorAll(".icons img")


function clickIcon(element){
    console.log("Click")
    console.log(element)
    if (lockClick == true) {
        lockClick = false
        console.log(element.classList)
        skillblockController(element.classList[(element.classList.length - 1)])  
    } else if (lockClick == false) {
        lockClick = true
        skillblockController(element.classList[(element.classList.length - 1)])  
    }
}

function skillblockController(givenClass) {
    console.log(givenClass)
    var blocks = document.getElementsByClassName("skillblock")
    
    for (let index = 0; index < blocks.length; index++) {
        const element = blocks[index]
        
        if (!element.classList.contains(givenClass)) {
            console.log("Hiding all elements without class " + givenClass)
            element.style.display = "none"
        }
        else {
            console.log("Hiding all elements without class " + givenClass)
            element.style.display = "flex"
        }
    }
}



icons.forEach(element => {
    element.addEventListener("click", function () { clickIcon(element) }, true)
})

console.log(icons)