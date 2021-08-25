import './style.css';
import homePage from './homepage';


homePage();

function removeContent(){
    const content = document.querySelector("#content")
    content.innerHTML = '';
    return content
}

export default removeContent;











