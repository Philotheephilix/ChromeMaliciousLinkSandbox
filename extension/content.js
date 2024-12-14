// This function will extract all links from the page
function extractLinks() {
  const links = document.querySelectorAll("a");
  return Array.from(links).map(link => ({
    href: link.href,
    element: link  // Store the actual DOM element
  }));
}

// Simulated function to check URLs for threats
async function checkUrlsSafety(urls) {
  // Here, simulate threat detection (replace this with your actual URL safety check logic)
  return urls.map(url => ({
    threat: { url },
    threatType: url.includes("dangerous") ? "MALWARE" : null  // Simulated threat detection
  }));
}

// Function to check and replace links on the page
async function checkAndReplaceLinks() {
  const links = extractLinks(); // Extract links from the page

  // Call the checkUrlsSafety function which checks the links for threats
  const threats = await checkUrlsSafety(links.map(link => link.href));

  // Map threats to the corresponding links
  const threatMap = new Map();
  threats.forEach((threat) => {
    threatMap.set(threat.threat.url, threat.threatType);
  });
  console.log("running")
  // Replace the dangerous links with buttons
  links.forEach((linkObj) => {
    const threatType = threatMap.get(linkObj.href);
    const isSafe = !threatType;

    if (!isSafe) {
      const button = document.createElement('button');
      button.textContent = linkObj.element.textContent; // Preserve the original text
      button.setAttribute('data-url', linkObj.href); // Store the URL in the button's data attribute

      button.style.all = 'unset'; // Reset all default button styles
      button.style.textDecoration = 'underline'; // Make text look like a link
      button.style.color = 'inherit'; // Inherit the link color
      button.style.cursor = 'pointer'; // Make it look clickable
      button.style.font = 'inherit'; // Use the same font as the link
      linkObj.element.replaceWith(button);

      button.addEventListener('click', () => openExtensionPage(linkObj.href));
    }
  });
}

// Function to open the extension page when a dangerous link is clicked
function openExtensionPage(url) {
  // Send a message to the background script to open the extension page
  console.log(url)
  chrome.runtime.sendMessage({ action: 'openExtensionPage', url });
}

// Check and replace links as soon as the page is loaded
checkAndReplaceLinks();
