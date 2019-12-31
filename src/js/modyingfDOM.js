const pageWidth = document.body.clientWidth;

if(pageWidth > 600){
    console.log("Everything is Ok! HTML tree stays the same")
} else {
    const rpgconteiner = document.querySelector(".rpgconteiner")
    const saver = rpgconteiner

    rpgconteiner.parentNode.removeChild(rpgconteiner)

    const whoami = document.querySelector(".whoami")
    whoami.appendChild(rpgconteiner)

    const nametext = document.querySelector(".nameconteiner h2")
    nametext.innerHTML= "Ellian Carlos"
    // nametext.parentNode.style.height = "2vh"

    console.log("HTML tree modified!")
}