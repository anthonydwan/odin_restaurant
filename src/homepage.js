const homePage = (()=>{
    const body = document.querySelector("body")
    body.classList.add("homePageclass")
    const content = document.querySelector("#content")
    const title = document.createElement("div")
    const name = document.createElement("h1")
    const shiro = document.createElement("h1")
    const description = document.createElement("p")
    const buttonDiv = document.createElement("div")
    const button1 = document.createElement("button")
    const button2 = document.createElement("button")
    const img1 = document.createElement("img")
    const img2 = document.createElement("img")
    const img3 = document.createElement("img")
    const img4 = document.createElement("img")
    const img5 = document.createElement("img")
    const img6 = document.createElement("img")
    const img7 = document.createElement("img")
    const img8 = document.createElement("img")
    const img9 = document.createElement("img")
    const img10 = document.createElement("img")
    const img11 = document.createElement("img")
    const img12 = document.createElement("img")

    const imgs = [img1,img2,img3,img4,img5,img6,img7,img8,img9,img10,img11,img12]

    for (let i = 0; i < imgs.length; i++){
        imgs[i].id = `p${i+1}`
    }

    img1.src = "../src/p1.png"
    img2.src = "../src/p2.png"
    img3.src = "../src/p3.png"
    img4.src = "../src/p4.png"
    img5.src = "../src/p5.png"
    img6.src = "../src/p6.png"
    img7.src ="../src/p7.png"
    img8.src = "../src/p8.png"
    img9.src = "../src/p9.png"
    img10.src = "../src/p10.png"
    img11.src = "../src/p11.png"
    img12.src = "../src/p12.png"
    img4.classList.add("p4")

    title.id = "title"
    name.id = "name"
    shiro.id = "shiro"
    description.id = "homeDescription"
    name.textContent = "SHIRO"
    shiro.textContent = "白寿司"
    button1.textContent = "Menu"
    button2.textContent = "Contact Us"
    description.textContent = "Considered by many to be the most renowned sushi restaurant in the world, offering an exclusive sublime dining experience like no other."
    buttonDiv.id = "buttonDiv"

    buttonDiv.appendChild(button1)
    buttonDiv.appendChild(button2)
    title.appendChild(name)
    
    title.appendChild(description)
    title.append(buttonDiv)
    content.appendChild(title)
    for(let i = 0; i < imgs.length; i++){
        content.appendChild(imgs[i])
    }
    content.appendChild(shiro)
    return {
        button1,
        button2
    }
});

export default homePage;