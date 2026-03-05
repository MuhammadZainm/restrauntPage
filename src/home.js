import img1 from "./img1.jpg";
import img2 from "./img5.jpg";
import img3 from "./img2.jpg";
import img6 from "./img6.jpg";
import img5 from "./img4.jpg";
import img4 from "./happy-memes-make-you-smile-more-22-300x313.jpg";

export function loadhome() {
  const main = document.querySelector("main");

  // Clear previous content
  main.innerHTML = "";
  main.id = "home";

  // HEADLINE
  const headline = document.createElement("div");
  headline.id = "headline";
  const headlineSpan = document.createElement("span");
  headlineSpan.textContent =
    "Ramadan Mubarak! Celebrate this season with our mouthwatering Iftar delights.";
  headline.appendChild(headlineSpan);

  // TEXT
  const textDiv = document.createElement("div");
  textDiv.id = "text";
  const textSpan = document.createElement("span");
  const cheesy1 = document.createElement("span");
  cheesy1.classList.add("cheese");
  cheesy1.textContent = "Cheesy";
  const cheesy2 = document.createElement("span");
  cheesy2.classList.add("cheese");
  cheesy2.textContent = "Cheese";


  textSpan.append(
    "At ",
    cheesy1,
    " Cravings, we believe comfort food should actually comfort you. Every burger is stacked high, every slice pulls perfectly, and every bite reminds you why fast food became a global obsession in the first place. We don’t just melt ",
    cheesy2,
    ". We celebrate it. From juicy smashed patties to crispy fries seasoned just right, our kitchen is built around bold flavor and zero compromise. Fresh ingredients, generous portions, and recipes that keep you coming back “just one more time.”"
  );
  textDiv.appendChild(textSpan);

  // IMAGES
  const imgsDiv = document.createElement("div");
  imgsDiv.id = "imgs";
  const imageData = [
    { title: "Our Crown", src: img1 },
    { title: "Our Food!", src: img2 },
    { title: "Cheesy Wrap", src: img3 },
    { title: "Send a Snap!", src: img6 },
    { title: "Loades Fries", src: img5 },
    { title: "Happy Cries!", src: img4 },
  ];

imageData.forEach((item) => {
  const wrapper = document.createElement("div");

  const span = document.createElement("span");

  // Replace "Cheese" or "Cheesy" with a span with class "cheese"
  const titleParts = item.title.split(/(Cheese|Cheesy)/g);
  titleParts.forEach(part => {
    if (part === "Cheese" || part === "Cheesy") {
      const cheesySpan = document.createElement("span");
      cheesySpan.classList.add("cheese");
      cheesySpan.textContent = part;
      span.appendChild(cheesySpan);
    } else {
      span.appendChild(document.createTextNode(part));
    }
  });

  const img = document.createElement("img");
  img.src = item.src;
  img.alt = item.title;

  wrapper.appendChild(span);
  wrapper.appendChild(img);
  imgsDiv.appendChild(wrapper);
});

  main.appendChild(headline);
  main.appendChild(textDiv);
  main.appendChild(imgsDiv);
}