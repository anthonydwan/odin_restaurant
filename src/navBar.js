const navBar = ((p4) => {
    const content = document.querySelector("#content")
    const img4 = document.createElement("img")
    img4.id = "p4"
    img4.classList.add("p4Menu")
    img4.src = p4
    content.appendChild(img4)
    
    const logo = document.createElement("h1")
    logo.id = "shiro2"
    logo.textContent = "白寿司"
    content.appendChild(logo)
    
    const nav = document.createElement("nav")
    const button1 = document.createElement("button")
    button1.id = "homeButton"
    button1.textContent = "SHIRO"
    const button2 = document.createElement("button")
    button2.id = "menuButton"
    button2.textContent = "Menu"
    const button3 = document.createElement("button")
    button3.id = "contactButton"
    button3.textContent = "Contact Us"
    
    nav.appendChild(button1)
    nav.appendChild(button2)
    nav.appendChild(button3)
    content.appendChild(nav)
});

export default navBar;