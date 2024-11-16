// popup.js

// Get the elements we need to work with
const currentUrlInput = document.getElementById("current-url");
const openUrlInput = document.getElementById("open-url");
const openButton = document.getElementById("open-button");

// Function to get the current tab's URL
chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
  const currentUrl = tabs[0].url;
  currentUrlInput.value = currentUrl;  // Display current URL in the input
});

// Add event listener for the "Open" button
openButton.addEventListener('click', () => {
  const urlToOpen = openUrlInput.value.trim();
  if (urlToOpen) {
    chrome.tabs.create({ url: urlToOpen });
  }
});
