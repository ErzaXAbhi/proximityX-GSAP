const heroImg = document.querySelector(".hero-img");

// Array of image URLs
const imageUrls = [
  "slide5.jpg",
  "slide3.jpg",
  "slide7.jpg",
  "slide8.jpg",
  "slide9.jpg",
];

// Function to create image elements and append them to .hero-img
function createImageElements() {
  imageUrls.forEach((url, index) => {
    const img = document.createElement("img");
    img.src = url;
    img.classList.add("slide");
    img.style.opacity = index === 0 ? "1" : "0"; // Show the first image, hide the rest
    heroImg.appendChild(img);
  });
}

// GSAP animation
function startSlideshow() {
  const slides = document.querySelectorAll(".slide");
  let currentSlide = 0;

  function nextSlide() {
    const tl = gsap.timeline();
    tl.to(slides[currentSlide], { opacity: 0, duration: 1 })
      .set(slides[currentSlide], { display: "none" })
      .set(slides[(currentSlide + 1) % slides.length], { display: "block" })
      .to(slides[(currentSlide + 1) % slides.length], {
        opacity: 1,
        duration: 1,
      });

    currentSlide = (currentSlide + 1) % slides.length;
  }

  setInterval(nextSlide, 3000); // Change image every 3 seconds (3000 milliseconds)
}

// Call the functions to set up and start the slideshow
createImageElements();
startSlideshow();
