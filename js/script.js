// Function to handle the button click
function handleButtonClick() {
  // Popup container element
  const popupContainer = document.createElement("div");
  popupContainer.classList.add("popup-container");

  // Popup element
  const popup = document.createElement("div");
  popup.classList.add("popup");

  // Close button element
  const closeButton = document.createElement("button");
  closeButton.classList.add("close-button");
  closeButton.innerText = "Cancel";

  // Event listener to the close button to remove the popup
  closeButton.addEventListener("click", function() {
    popupContainer.remove();
  });

  // PayPal button element
  const paypalButton = document.createElement("a");
  paypalButton.href = "https://www.paypal.com";
  paypalButton.classList.add("paypal-button");
  paypalButton.innerText = "Pay with PayPal";

  // Input element for the contribution amount
  const input = document.createElement("input");
  input.type = "text";
  input.placeholder = "$0.00";
  input.classList.add("contribution-input");

  // Append the elements to the popup
  popup.appendChild(closeButton);
  popup.appendChild(paypalButton);
  popup.appendChild(input);
  popupContainer.appendChild(popup);

  // Add the popup to the page
  document.body.appendChild(popupContainer);
}

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
    setTimeout(showNextImage, 5000); // Change image every 5 seconds
  }

  // Preload images and start slideshow when done
  window.onload = function() {
    preloadImages();
    images[0].style.opacity = '1'; // Show first image
    setTimeout(showNextImage, 3000); // Change image every 5 seconds
  };
}

// Call the functions separately
handleButtonClick();
handleSlideshow();
