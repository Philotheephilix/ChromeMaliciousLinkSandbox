function createInstance(url){
    fetch(`http://localhost:5900/initialize-docker${url}`.then(responce=>console.log(responce))
    )
}
function purgeInstance(){
    fetch('http://localhost:5900/stop-sandbox')
}