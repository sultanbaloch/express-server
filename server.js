
const Http = new XMLHttpRequest();
function get() {
    
    const url = 'http://192.168.50.177:3000/bulb';
    Http.open("GET", url);
    Http.send();
}


function put() {
    const url = 'http://192.168.50.177:3000/bulb';
    Http.open("PUT", url);
    Http.send();

}
function post() {
    const url = 'http://192.168.50.177:3000/bulb';
    Http.open("POST", url);
    Http.send();

}

function del() {
    const url = 'http://192.168.50.177:3000/bulb';
    Http.open("DELETE", url);
    Http.send();

}
Http.onreadystatechange = (e) => {
    console.log(Http.responseText)
    document.getElementById("result").innerHTML = Http.responseText;
}