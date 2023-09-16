const mouseTrail = document.querySelector(".mouse-trail");
const slogan = document.querySelector(".hero .slogan");

window.addEventListener("mousemove", (e) => {
  mouseTrail.style.left = `${e.pageX}px`;
  mouseTrail.style.top = `${e.pageY}px`;
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
