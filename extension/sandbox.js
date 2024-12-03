document.addEventListener('DOMContentLoaded', () => {
    const purgeButton = document.getElementById('purgeBtn');
    purgeButton.addEventListener('click', purgeInstance);
  });

chrome.storage.local.get('dangerousUrl', (result) => {
    if (result.dangerousUrl) {
      createInstance(result.dangerousUrl)
    } else {
    }
  });

  // Example function for proceeding to a safe version of the URL
  function goToSafePage() {
    window.open('https://www.example.com/safe-page', '_blank');  // Redirect to a safe page
  }
  function createInstance(link) {
    const encodedLink = encodeURIComponent(link);
    fetch(`http://localhost:5900/initialize-docker?url=${encodedLink}`)
        .then(response => {
            console.log(response);
        })
        .catch(error => {
            console.error('Error:', error);
        });

    document.getElementById('sandbox').innerHTML = `<iframe style="width: 100vw; height: 100vh;" src="http://localhost:5800/" title="Webpage Inside Extension"></iframe>`;
}

function purgeInstance(){
  fetch('http://localhost:5900/stop-sandbox')
  chrome
}
