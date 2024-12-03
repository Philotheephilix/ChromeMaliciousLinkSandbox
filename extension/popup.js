document.addEventListener('DOMContentLoaded', () => {
  const openLinkButton = document.getElementById('openLinkBtn');
  openLinkButton.addEventListener('click', createInstance);
  const purgeButton = document.getElementById('purgeBtn');
  purgeButton.addEventListener('click', purgeInstance);
});

function createInstance() {
    const link = document.getElementById('linkInput').value;
    fetch(`http://localhost:5900/initialize-docker/${link}`)
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
}