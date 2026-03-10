export function loadaboutus(){
const main=document.querySelector("main")
main.innerHTML=""
main.removeAttribute("id")
main.id="aboutus"

  // Page heading
  const h1 = document.createElement("h1");
  h1.textContent = "About Us";
  main.appendChild(h1);

  // Helper function to create section
  function createSection(id, headingText, paragraphTexts) {
    const section = document.createElement("section");
    section.id = id;

    const h2 = document.createElement("h2");
    h2.textContent = headingText;
    section.appendChild(h2);

    const p = document.createElement("p");
    paragraphTexts.forEach((textItem) => {
      if (typeof textItem === "string") {
        p.appendChild(document.createTextNode(textItem));
      } else if (textItem.type === "span" && textItem.className === "cheese") {
        const span = document.createElement("span");
        span.className = "cheese";
        span.textContent = textItem.text;
        p.appendChild(span);
      }
    });

    section.appendChild(p);
    return section;
  }

  // Our Beginning
  const beginningText = [
    { type: "span", className: "cheese", text: "Cheesy" },
    " Cravings started as a small family-owned eatery in [City Name]. What began as a tiny corner shop with just a few tables quickly became a local favorite thanks to our bold flavors, fresh ingredients, and an unwavering passion for comfort food. From day one, our mission was simple: make every bite count."
  ];
  main.appendChild(createSection("ourBeginning", "Our Beginning", beginningText));

  // Our Rise
  const riseText = [
    "Word of our signature burgers, pizzas, and ",
    { type: "span", className: "cheese", text: "Cheesy" },
    " specials spread fast. People came for the food, stayed for the experience, and told their friends. Over the years, our menu evolved, our kitchens expanded, and we started innovating with exciting dishes while keeping the classic favorites that made us famous."
  ];
  main.appendChild(createSection("ourRise", "Our Rise", riseText));

  // Where We Are Now
  const statusText = [
    "Today, ",
    { type: "span", className: "cheese", text: "Cheesy" },
    " Cravings has grown into a beloved brand with [number] branches across the country and [number] international outlets. We continue to focus on quality, consistency, and bringing people together over meals that are bold, indulgent, and full of flavor. Our team works tirelessly to ensure every branch reflects the same warmth and excitement as the very first shop."
  ];
  main.appendChild(createSection("currentStatus", "Where We Are Now", statusText));

  // Our Vision
  const visionText = [
    "Beyond just food, ",
    { type: "span", className: "cheese", text: "Cheesy" },
    " Cravings aims to create spaces where friends and families come together, celebrate, and make memories. Whether it’s through a perfectly melted slice of cheese, a crispy loaded fry, or our cozy, vibrant interiors, we strive to make every visit an experience worth savoring."
  ];
  main.appendChild(createSection("ourVision", "Our Vision", visionText));

  // Something Extra
  const extraText = [
    "We are constantly exploring new culinary ideas, sustainable practices, and community initiatives. Our promise is to keep innovating while staying true to the values that made us ",
    { type: "span", className: "cheese", text: "Cheesy" },
    " Cravings: passion, creativity, and an unforgettable taste."
  ];
  main.appendChild(createSection("extra", "Something Extra", extraText));

}