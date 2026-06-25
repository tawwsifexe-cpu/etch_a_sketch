let div = document.querySelector("div")

ask()

function ask() {
    let num = prompt("enter number")
    let width = (num*52)
    console.log(width)
    div.style.width = width + "px"
    for (let i = 0; i < (num*num);i++) {
    let box = document.createElement("div")
    box.classList.add("box")
    div.appendChild(box)
    box.addEventListener("mouseover", () => {
        box.style.backgroundColor = `rgb(${Math.random()*256},${Math.random()*256},${Math.random()*256})`
       })
};

}



