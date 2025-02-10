import { skillsData } from "./constant.js";
let data = skillsData;
const boxes = document.querySelectorAll(".skillpara");
const mainContent = document.getElementById("mainContent");

boxes.forEach((box) => {
  box.addEventListener("mouseover", () => {
    const content = box.getAttribute("data-content");
    const h3 = document.createElement("h3");
    h3.innerText = data[content].heading;
    const p = document.createElement("p");
    p.classList.add("normalFont", "text-justify");
    p.innerText = data[content].content;
    mainContent.innerHTML = "";
    mainContent.appendChild(h3);
    mainContent.appendChild(p);

    mainContent.classList.add("active");
  });

  box.addEventListener("mouseout", () => {
    mainContent.classList.remove("active");
  });
});
