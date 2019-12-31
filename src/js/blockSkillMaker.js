function skillblockController(givenClass){
    var blocks = document.getElementsByClassName("skillblock")
    console.log(blocks)
    
    for (let index = 0; index < blocks.length; index++) {
        const element = blocks[index];
        
        if(!element.classList.contains(givenClass)){
            element.style.display = "none"
        }
    }
}