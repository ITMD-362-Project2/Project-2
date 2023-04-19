// Function to handle the slideshow
function handleSlideshow() {
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
    setTimeout(showNextImage, 3000); // Change image every 5 seconds
  }

  // Preload images and start slideshow when done
  window.onload = function() {
    preloadImages();
    images[0].style.opacity = '1'; // Show first image
    setTimeout(showNextImage, 3000); // Change image every 5 seconds
  };
}
handleSlideshow();
// Get the donate button and donation popup elements
const donateButton = document.getElementById("donate-button");
const popupContainer = document.getElementById("popup-container");
const closeButton = document.getElementById("close-button");
const paypalButton = document.getElementById("paypal-button");

// Add click event listener to the donate button to show the popup
donateButton.addEventListener("click", showPopup);

// Add click event listener to the close button to hide the popup
closeButton.addEventListener("click", hidePopup);

// Add click event listener to the PayPal button to process the donation
paypalButton.addEventListener("click", processDonation);

// Function to show the donation popup
function showPopup() {
  popupContainer.style.display = "flex";
}

// Function to hide the donation popup
function hidePopup() {
  popupContainer.style.display = "none";
}

// Function to process the donation
function processDonation() {
  const amount = document.getElementById("contribution-input").value;
  // TODO: Implement donation processing logic here
  alert("Thank you for your donation of " + amount + "!");
  hidePopup();
}
// Call the functions separately
handleButtonClick();

function toggleHamburger() {
  const navbarContainer = document.getElementById('index-navbar-container');
  navbarContainer.classList.toggle('active');
}
