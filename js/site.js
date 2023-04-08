const images = document.querySelectorAll('#index-slideshow img');
let index = 0;

// Preload images
function preloadImages() {
  for (let i = 0; i < images.length; i++) {
    new Image().src = images[i].src;
  }
}

// Show the next image
function showNextImage() {
  images[index].style.opacity = '0';
  index = (index + 1) % images.length;
  images[index].style.opacity = '1';
  setTimeout(showNextImage, 5000); // Change image every 5 seconds
}

// Preload images and start slideshow when done
window.onload = function() {
  preloadImages();
  images[0].style.opacity = '1'; // Show first image
  setTimeout(showNextImage, 5000); // Change image every 5 seconds
};
