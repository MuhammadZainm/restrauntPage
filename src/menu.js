import spImg from "./sp.jpg";
import pizzasImg from "./pizzas.jpeg";
import burgSteakImg from "./burg steak.jpeg";
import wrapsFriesImg from "./wr n lf.jpeg";
import dessertImg from "./des.jpeg";
import italianDishes from "./italian dishes.jpeg"
export function loadmenu(){
const main=document.querySelector("main")
main.innerHTML=""
main.removeAttribute("id")
main.id="menu"


// menuNav.js
function createMenuNav() {
  const navData = [
    { text: "Our Menu", href: "#menucopydiv", },
    { text: "Specials", href: "#specials" },
    { text: "Pizzas", href: "#pizzas" },
    { text: "Burgers & Steaks", href: "#burgerSteaks" },
    { text: "Italian Menu", href: "#italians" },
    { text: "Wraps & Fries", href: "#wrapFries" },
    { text: "Dessert", href: "#dessert" },
  ];

  const nav = document.createElement("nav");
  nav.id = "menunav";

  navData.forEach((item) => {
    const linkerDiv = document.createElement("div");
    linkerDiv.classList.add("linker");
    if (item.id) linkerDiv.id = item.id;

    const aTag = document.createElement("a");
    aTag.href = item.href;
    aTag.textContent = item.text;

    linkerDiv.appendChild(aTag);
    nav.appendChild(linkerDiv);
  });

  return nav;
}
const thenav=createMenuNav()
main.append(thenav)
const links=document.querySelectorAll(".linker")
links.forEach(link =>{
    link.addEventListener("mouseleave",()=>{
        if(link.classList.contains("selecteda")) {return;}
        link.classList.add("shrink");
        setTimeout(()=>
            link.classList.remove("shrink"),500
        );
    })
})



// Create the container div
const menuDiv = document.createElement('div');
menuDiv.id = 'menucopydiv';

// Create the <h3> heading
const h3 = document.createElement('h3');
h3.textContent = 'Our Menu';
menuDiv.appendChild(h3);

// Create the <p> paragraph
const p = document.createElement('p');
p.id = 'menucopy';

// Build the paragraph content with spans and bolds
p.append(
    document.createTextNode('At '),
    (() => {
        const b1 = document.createElement('b');
        const span = document.createElement('span');
        span.className = 'cheese';
        span.textContent = 'Cheesy';
        b1.append(span, document.createTextNode(' Cravings'));
        return b1;
    })(),
    document.createTextNode(', our menu is a celebration of bold '),
    (() => {
        const b = document.createElement('b');
        b.textContent = 'flavors';
        return b;
    })(),
    document.createTextNode(' and indulgence. From sizzling '),
    (() => {
        const b = document.createElement('b');
        b.textContent = 'steaks';
        return b;
    })(),
    document.createTextNode(' and '),
    (() => {
        const b = document.createElement('b');
        b.textContent = 'juicy burgers';
        return b;
    })(),
    document.createTextNode(' to '),
    (() => {
        const b = document.createElement('b');
        b.textContent = 'piping hot pizzas';
        return b;
    })(),
    document.createTextNode(' loaded with '),
    (() => {
        const b = document.createElement('b');
        b.textContent = 'fresh toppings';
        return b;
    })(),
    document.createTextNode(', every dish is crafted to satisfy your cravings. Don’t miss our signature '),
    (() => {
        const b = document.createElement('b');
        const span = document.createElement('span');
        span.className = 'cheese';
        span.textContent = 'Cheesy';
        b.append(span, document.createTextNode(' Specials'));
        return b;
    })(),
    document.createTextNode(' and '),
    (() => {
        const b = document.createElement('b');
        const span = document.createElement('span');
        span.className = 'cheese';
        span.textContent = 'Cheesy';
        b.append(span, document.createTextNode(' Wraps'));
        return b;
    })(),
    document.createTextNode(' with '),
    (() => {
        const b = document.createElement('b');
        b.textContent = 'Loaded Fries';
        return b;
    })(),
    document.createTextNode(' that ooze comfort in every bite. And for a sweet finish, our '),
    (() => {
        const i = document.createElement('i');
        i.textContent = 'desserts';
        return i;
    })(),
    document.createTextNode(' are the perfect ending to a feast made for sharing. Every item on our menu is designed to delight the eyes as much as the taste buds.')
);

// Append the paragraph to the container
menuDiv.appendChild(p);

// Prepend the whole menuDiv to the start of <main>
main.appendChild(menuDiv)

  const menuData = [
    { title: "Cheesy Specials", src: spImg, alt: "specials", highlight: true },
    { title: "Pizzas", src: pizzasImg, alt: "pizzas" },
    { title: "Steaks and Burgers", src: burgSteakImg, alt: "burgerSteaks" },
    { title: "Our Very own Italians", src: italianDishes, alt: "italians" },
    { title: "Cheesy Wraps and Loaded Fries", src: wrapsFriesImg, alt: "wrapFries", highlight: true },
    { title: "Dessert", src: dessertImg, alt: "dessert" },
    
  ];
  menuData.forEach(item => {
    const wrapper = document.createElement("section");
    wrapper.classList.add("menus", "l");
wrapper.id=item.alt
    const span = document.createElement("span");
    if (item.highlight) {
      const cheesySpan = document.createElement("span");
      cheesySpan.classList.add("cheese");
      cheesySpan.textContent = "Cheesy";
      span.appendChild(cheesySpan);

      const restTitle = item.title.replace("Cheesy", "");
      span.appendChild(document.createTextNode(restTitle));
    } else {
      span.textContent = item.title;
    }

    const img = document.createElement("img");
    img.src = item.src;
    img.alt = item.alt;

    wrapper.appendChild(span);
    wrapper.appendChild(img);
    main.appendChild(wrapper);
  });
  
  const sections = Array.from(links).map((linker) =>
    document.querySelector(linker.querySelector("a").getAttribute("href"))
  );

  function updateActiveLinker() {
    const scrollPos = window.scrollY + window.innerHeight / 3;

    sections.forEach((section, index) => {
      if (!section) return;
      const top = section.offsetTop;
      const bottom = top + section.offsetHeight;

      if (scrollPos >= top && scrollPos < bottom) {
        links.forEach((l) => l.classList.remove("selecteda"));
        links[index].classList.add("selecteda");
      }
    });
  }

  // Smooth scroll
  links.forEach((linker) => {
    const a = linker.querySelector("a");
    a.addEventListener("click", (e) => {
      e.preventDefault();
      const target = document.querySelector(a.getAttribute("href"));
      if (!target) return;
      target.scrollIntoView({ behavior: "smooth" });
    });
  });

  window.addEventListener("scroll", updateActiveLinker);
  updateActiveLinker(); // initial check



}
