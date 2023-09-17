const mouseTrail = document.querySelector(".mouse-trail");
const slogan = document.querySelector(".hero .slogan");
const header = document.querySelector(".header");

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

slogan.addEventListener("mousemove", () => {
  mouseTrail.style.backgroundColor = `hsl(0, 0%, 93%)`;
  mouseTrail.style.scale = `2`;
  mouseTrail.style.mixBlendMode = "difference";
});

slogan.addEventListener("mouseout", () => {
  if (mouseTrail.style.scale === "2") {
    mouseTrail.style.scale = `1`;
    mouseTrail.style.mixBlendMode = "initial";
    mouseTrail.style.backgroundColor = `hsl(0, 0%, 1%)`;
  }
});
