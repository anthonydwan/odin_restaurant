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
import p12 from'./p12.png';
import menu1 from'./menu1.png';
import menu2 from'./menu2.png';
import menu3 from'./menu3.png';
import menu4 from'./menu4.png';
import menu5 from'./menu5.png';
import menu6 from'./menu6.png';
import menu7 from'./menu7.png';
import menu8 from'./menu8.png';
import menu9 from'./menu9.png';
import menu10 from'./menu10.png';
import menu11 from'./menu11.png';
import menu12 from'./menu12.png';
import homePage from './homepage.js';
import navBar from './navBar.js';


// homePage(p1,p2,p3,p4,p5,p6,p7,p8,p9,p10,p11,p12);

navBar(p4);


const content = querySelecter("#content")

const itemlist = [
    "鮭にぎり - Salmon Nigiri Sushi", "鮪とろにぎり - Salmon Toro Nigiri Sushi", "鮪赤身にぎり - Tuna Upper Back Nigiri Sushi",
    "甘えびにぎり - Sweet Shrimp Nigiri Sushi", "蛸にぎり - Octopus Nigiri Sushi", "烏賊にぎり - Squid Nigiri Sushi",
    "玉子にぎり - Egg Roll Nigiri Sushi", "穴子にぎり - Eel Nigiri Sushi", "巻き - Sushi Roll Deluxe", 
    "細巻き - Sushi Roll", "海胆軍艦巻 - Sea Urchin", "いくら軍艦巻 - Salmon Roe Nigiri Sushi"
]

const itemDescriptions = [
    "Using the best Coho Salmon from Miyagi Prefecture that is freshly caught and delivered to Sydney on the same morning.",
    "Fatty and rich in flavor, this cut of Miyagi Coho Salmon has an extremely tender texture. A divine creation.",
    "We only get the most prized Bluefin Tuna from Tyoko Fish Market on the same day to ensure the fat and protein ratios are perfectly balanced and every piece have a melt-in-your mouth-type feel.",
    "These shrimps are exclusively farmed inhouse with the utmost care and its unique sweetness has earned us as first place on Tokyo Eater's best international sushiya.",
    "We only use the largest limb of an Mizudako Octopus from Shizuoka Prefecture.",
    "Best squid in the world, period.",
    "Our egg master, Susu Shisu, has more than 35 years experience specialising the art of egg roll.",
    "We only use the best eel from the best sourcer that pioneered eel-farms more than 400 years ago and partners with 3 of the 5's world's best unagi restaurants.",
    "Do not be fooled by its humble appearance, this sushi takes more than 150 steps to make. The Heavenly combinations of the freshest fish and vegetables and 4 secret sauces made from over 200 ingredients. We promise that it will bring an unworldly delight.",
    "With a variety of seasonal fish and vegatables from 15 Prefectures in Japan, you can get a taste of the finest of the entire Japan in one dish.",
    "Using the word's most prized sea urchin from the rocky beaches of Shakotan Peninsula, this delicacy is a once-in-a-lifetime must-try.",
    "AAA grade red caviar from wild quality Keta Salmon. Its quality and taste is unparalleled."
]


const menu = document.querySelector("div");
menu.id = "menu"

for (let i = 0; i< itemlist.length; i++){
    const menuItem = document.querySelector("div");
    menuItem.classList.add("menuitem")
    const itemImg = document.querySelector("div")
    const itemText = document.querySelecter("div")
    const menuImgBg = document.querySelector("img")
    menuImgBg.classList.add("menuImgBg")
    menuImgBg.src = "../src/brush-texture.png"
    const menuImg = document.querySelector("img")
    menuImg.classList.add("menuImg")
    menuImg.src = `../src/menu${i+1}.png`
    itemImg.appendChild(menuImgBg)
    itemImg.appendChild(menuImg)
    menu.appendChild(itemImg)
    const itemName = document.querySelector("p")
    itemName.classList.add("itemName")
    itemName.textContent = itemlist[i]
    const itemDesc = document.querySelector("p")
    itemDesc.classList.add("itemDesc")
    itemDesc.textContent = itemDescriptions[i]
    itemText.appendChild(itemName)
    itemText.appendChild(itemDesc)
    menuItem.appendChild(itemText)
    menu.appendChild(menuItem)
}

content.appendChild("menu")













