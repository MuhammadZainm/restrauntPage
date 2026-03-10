import "./styles.css"
import {loadhome} from "./home.js"
import {loadaboutus} from "./aboutus.js"
import {loaddeals} from "./deals.js"
import {loadmenu} from "./menu.js"


const buttons=document.querySelectorAll("#btns button")
const btnhome=document.querySelector("#homebtn")
const btnmenu=document.querySelector("#btnMenu")
const btndeals=document.querySelector("#btnDeals")
const btnaboutus=document.querySelector("#btnAbout")
document.addEventListener("DOMContentLoaded",()=>{
const loaders={
    homebtn:loadhome,
    btnAbout:loadaboutus,
    btnMenu:loadmenu,
    btnDeals:loaddeals,
}
btnhome.classList.add("selected")
    loadhome()
    buttons.forEach(button=>{
button.addEventListener("click",()=>{
    if(button.classList.contains("selected")) { console.log("na babu")
        return;}

    document.querySelector("#btns .selected")?.classList.remove("selected")

    button.classList.add("selected")


    loaders[button.id]();

})
    })
})
console.log("hello")