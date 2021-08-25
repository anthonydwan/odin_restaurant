import homePage from "./homepage";
import removeContent from "./index";

function returnHome(){
    removeContent();
    window.onload = homePage();
}

const navBar = (() => {
    const content = document.querySelector("#content")
    const body = document.querySelector("body")
    body.classList.remove("homePageclass")

    const img4 = document.createElement("img")
    img4.id = "p4"
    img4.classList.add("p4Menu")
    img4.src = "../src/p4.png"
    content.appendChild(img4)
    
    const logo = document.createElement("h1")
    logo.id = "shiro2"
    logo.textContent = "白寿司"
    content.appendChild(logo)
    
    const nav = document.createElement("nav")
    const div1 = document.createElement("div")
    const div2 = document.createElement("div")
    const div3 = document.createElement("div")
    const button1 = document.createElement("button")
    button1.id = "homeButton"
    button1.textContent = "SHIRO"
    div1.id = "div1"
    div1.appendChild(button1)
    const button2 = document.createElement("button")
    button2.id = "menuButton"
    button2.textContent = "Menu"
    div2.id = "div2"
    div2.appendChild(button2)
    const button3 = document.createElement("button")
    button3.id = "contactButton"
    button3.textContent = "Contact Us"
    div3.id = "div3"
    div3.appendChild(button3)

    button1.addEventListener("click", returnHome)
    
    nav.appendChild(div1)
    nav.appendChild(div2)
    nav.appendChild(div3)
    content.appendChild(nav)
    return {
        button2,
        button3
    }
});

export default navBar;