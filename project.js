document.addEventListener("DOMContentLoaded", () => {
  const projectItems = document.querySelectorAll(".projectItem");

  projectItems.forEach((item) => {
    const link = item.querySelector(".project-item-link");

    item.addEventListener("mouseenter", () => {
      link.style.display = "block";
      setTimeout(() => {
        link.style.opacity = "1";
        link.style.transform = "translateY(60px)";
        n;
      }, 0);
    });

    item.addEventListener("mouseleave", () => {
      link.style.opacity = "0";
      link.style.transform = "translateY(-20px)";
      link.addEventListener(
        "transitionend",
        () => {
          link.style.display = "none";
        },
        { once: true }
      );
    });
  });
});
