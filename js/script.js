// Get the button element
const button = document.getElementById("convert-to-button");

// Event listener to the button
button.addEventListener("click", function() {
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
});
