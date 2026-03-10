import img1 from "./img1.jpg";
import img2 from "./img5.jpg";
import img3 from "./img2.jpg";
import img6 from "./img6.jpg";
import img5 from "./img4.jpg";
import img4 from "./happy-memes-make-you-smile-more-22-300x313.jpg";
import simg1 from "./1.png";
import simg2 from "./2.png";
import simg3 from "./3.png";
import simg4 from "./5.png";
export function loadhome() {

const main = document.querySelector("main")
main.removeAttribute("id")
main.id = "home"
main.innerHTML = ""



/* ---------- HEADLINE ---------- */

const headline = document.createElement("div")
headline.id = "headline"

const headlineSpan = document.createElement("span")
headlineSpan.textContent =
"Ramadan Mubarak! We are introducing our Iftar buffet."

headline.appendChild(headlineSpan)
main.appendChild(headline)



/* ---------- WHAT WE ARE ---------- */

const h1a = document.createElement("h1")
h1a.textContent = "What we Are"

const weAre = document.createElement("section")
weAre.id = "weAre"

const weAreSpan = document.createElement("span")

weAreSpan.innerHTML = `
At <span class="cheese">Cheesy</span> Cravings, we believe comfort food should actually comfort you. 
Every burger is stacked high, every slice pulls perfectly, and every bite reminds you why fast food became a global obsession in the first place.

We don’t just melt <span class="cheese">Cheese</span>. We celebrate it.

From juicy smashed patties to crispy fries seasoned just right, our kitchen is built around bold flavor and zero compromise. Fresh ingredients, generous portions, and recipes that keep you coming back “just one more time.”
`

weAre.appendChild(weAreSpan)

main.append(h1a, weAre)



/* ---------- WHAT WE SERVE ---------- */

const h1b = document.createElement("h1")
h1b.id = "wws"
h1b.textContent = "What we Serve!"

const weServe = document.createElement("section")
weServe.id = "weServe"

const serveData = [
{title:"Our Crown",id:img1},
{title:"Our Food",id:img2},
{title:"Cheesy Wrap",id:img3},
{title:"Or send a snap",id:img6},
{title:"Loaded Fries!",id:img5},
{title:"Happy Cries!",id:img4},
]

serveData.forEach(item => {

const div = document.createElement("div")

const span = document.createElement("span")
span.innerHTML = item.title

const img = document.createElement("img")
img.src = item.id
img.alt = item.title

div.append(span,img)
weServe.appendChild(div)

})

main.append(h1b,weServe)



/* ---------- HOW WE FEEL ---------- */

const h1c = document.createElement("h1")
h1c.textContent = "How We Feel"

const weFeel = document.createElement("section")
weFeel.id = "weFeel"



/* ATMOS TEXT */

const atmos = document.createElement("div")
atmos.id = "atmos"

const atmosSpan = document.createElement("span")

atmosSpan.innerHTML = `
At <span class="cheese">Cheesy</span> Cravings, the atmosphere is as satisfying as the food itself.
Warm lighting, rich colors, and the irresistible aroma of freshly grilled burgers and melted 
<span class="cheese">cheese</span> create a space that feels lively yet comfortable.
`

atmos.appendChild(atmosSpan)



/* ---------- SLIDER ---------- */

const imgSlider = document.createElement("div")
imgSlider.id = "imgSlider"

const prev = document.createElement("i")
prev.className = "fa-solid fa-caret-left prev"

const next = document.createElement("i")
next.className = "fa-solid fa-caret-right next"

const slides = document.createElement("div")
slides.id = "slides"

const images = [
{id:simg1,title:"Pick-Up Counter"},
{id:simg2,title:"Kitchen"},
{id:simg3,title:"Sitting Area"},
{id:simg4,title:"Building"}
]

images.forEach((imgData,index)=>{

const img = document.createElement("img")
img.src = imgData.id
img.alt = imgData.title

if(index===0) img.classList.add("active")

slides.appendChild(img)

})

imgSlider.append(prev,slides,next)

weFeel.append(atmos,imgSlider)

main.append(h1c,weFeel)
document.querySelector("body").appendChild(main)



/* ---------- SLIDER LOGIC ---------- */

const slideImgs = slides.querySelectorAll("img")
let index = 0
uploadBtns(index)
function showSlide(i){

slideImgs.forEach(img=>img.classList.remove("active"))
slideImgs[i].classList.add("active")
uploadBtns(i)




}

let slideInterval = setInterval(() => {
index++;
if(index >= slideImgs.length){
index=0
}
showSlide(index)
}, 4000)
const sliderContainer=document.querySelector("#weFeel #imgSlider")
sliderContainer.addEventListener("mouseenter",()=>{
clearInterval(slideInterval)
})
sliderContainer.addEventListener("mouseleave",()=>{
slideInterval = setInterval(() => {
    index++;
    if(index >= slideImgs.length)
    index=0
    showSlide(index);
},4000)
  });
next.addEventListener("click",()=>{

index++

if(index >= slideImgs.length) index = 0

showSlide(index)

})

prev.addEventListener("click",()=>{

index--
showSlide(index)
})
function uploadBtns(index){
if(index===0){
  prev.style.display="none"
}else{
  prev.style.display="inline-flex"
}
if(index===slideImgs.length-1){
  next.style.display="none"
}
else{
  next.style.display="inline-flex"
}

}



}