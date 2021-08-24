import './style.css';
import p1 from'./p1.png';
import p2 from'./p2.png';
import p3 from'./p3.png';
import p4 from'./p4.png';
import p5 from'./p5.png';
import p6 from'./p6.png';
import p7 from'./p7.png';
import p8 from'./p8.png';
import p9 from'./p9.png';
import p10 from'./p10.png';
import p11 from'./p11.png';
import p12 from'./p11.png';



const homePage = (()=>{
    
    const content = document.querySelector("#content")
    const title = document.createElement("div")
    const name = document.createElement("h1")
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

    img1.id = "p1"
    img2.id = "p2"
    img3.id = "p3"
    img4.id = "p4"
    img5.id = "p5"
    img6.id = "p6"
    img7.id = "p7"
    img8.id = "p8"
    img9.id = "p9"
    img10.id = "p10"
    img11.id = "p11"
    img12.id = "p12"
    
    img1.src = p1
    img2.src = p2
    img3.src = p3
    img4.src = p4
    img5.src = p5
    img6.src = p6
    img7.src = p7
    img8.src = p8
    img9.src = p9
    img10.src = p10
    img11.src = p11
    img12.src = p12

    title.id = "title"
    description.id = "homeDescription"
    name.textContent = "Subarasushi"
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
    for(img of imgs){
        content.appendChild(img)
    }
})();



