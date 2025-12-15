const scrollContainer = document.getElementById("scroll911");
const leftArrow = document.querySelector(".left-arrow");
const rightArrow = document.querySelector(".right-arrow");

// One slide = width of 2 images
const slideWidth = scrollContainer.clientWidth;

rightArrow.addEventListener("click", () => {
    scrollContainer.scrollBy({
        left: slideWidth,
        behavior: "smooth"
    });
});

leftArrow.addEventListener("click", () => {
    scrollContainer.scrollBy({
        left: -slideWidth,
        behavior: "smooth"
    });
});
// Open image modal
function openModal(imgElement) {
  const modal = document.getElementById("imageModal");
  const modalImg = document.getElementById("modalImg");

  modal.style.display = "block";
  modalImg.src = imgElement.src;
  document.body.style.overflow = "hidden"; // prevent background scroll
}

// Close image modal
function closeModal() {
  const modal = document.getElementById("imageModal");

  modal.style.display = "none";
  document.body.style.overflow = ""; // restore scroll
}

// Close modal when clicking outside image
document.getElementById("imageModal").addEventListener("click", function (e) {
  if (e.target.id === "imageModal") {
    closeModal();
  }
});

// Close modal with ESC key
document.addEventListener("keydown", function (e) {
  if (e.key === "Escape") {
    closeModal();
  }
});
