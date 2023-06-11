const slider = document.querySelector(".gallery__images--slider");
const previewImage = document.querySelector(".gallery__images--preview > img");

slider.addEventListener("click", (e) => {
  if (e.target.tagName === "IMG") {
    previewImage.src = e.target.src;
  }
});
