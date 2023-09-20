const mouseTrail = document.querySelector(".mouse-trail");
const header = document.querySelector(".header");

const images = document.querySelectorAll(".trail-image-target");
const headings = document.querySelectorAll(".trail-heading-target");
const paragraphs = document.querySelectorAll(".trail-paragraph-target");

window.addEventListener("mousemove", (e) => {
  mouseTrail.style.left = `${e.clientX}px`;
  mouseTrail.style.top = `${e.clientY}px`;
});

header.addEventListener("mousemove", () => {
  mouseTrail.style.backgroundColor = `transparent`;
});

header.addEventListener("mouseout", () => {
  mouseTrail.style.backgroundColor = `hsl(0, 0%, 1%)`;
});

headings.forEach((heading) => {
  heading.addEventListener("mousemove", () => {
    mouseTrail.style.backgroundColor = `hsl(0, 0%, 93%)`;
    mouseTrail.style.scale = `2`;
    mouseTrail.style.mixBlendMode = "difference";
  });

  heading.addEventListener("mouseout", () => {
    mouseTrail.style.scale = `1`;
    mouseTrail.style.mixBlendMode = "initial";
    mouseTrail.style.backgroundColor = `hsl(0, 0%, 1%)`;
  });
});

images.forEach((image) => {
  image.addEventListener("mousemove", () => {
    mouseTrail.style.backgroundColor = `transparent`;
    mouseTrail.style.border = `1px solid white`;
    mouseTrail.style.scale = `3`;
  });

  image.addEventListener("mouseout", () => {
    mouseTrail.style.border = `none`;
    mouseTrail.style.scale = `1`;
    mouseTrail.style.backgroundColor = `hsl(0, 0%, 1%)`;
  });
});

paragraphs.forEach((paragraph) => {
  paragraph.addEventListener("mousemove", () => {
    mouseTrail.style.backgroundImage = `linear-gradient(orange, pink)`;
    mouseTrail.style.mixBlendMode = `multiply`;
    mouseTrail.style.scale = `3`;
  });

  paragraph.addEventListener("mouseout", () => {
    mouseTrail.style.scale = `1`;
    mouseTrail.style.mixBlendMode = `initial`;
    mouseTrail.style.backgroundImage = `none`;
  });
});
