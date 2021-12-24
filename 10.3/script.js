const wsUri = "wss://echo-ws-service.herokuapp.com";

function pageLoaded() {
  const infoOutput = document.querySelector(".info_output");
  const chatOutput = document.querySelector(".chat_output");
  const input = document.querySelector("input");
  const sendBtn = document.querySelector(".btn_send");
  const btnGeo = document.querySelector(".btn_geo");
  
  let socket = new WebSocket(wsUri);
  let mapLink;
  
  socket.onopen = () => {
    infoOutput.innerText = "Соединение установлено";
  }
  
  socket.onmessage = (event) => {
    writeToChat(event.data, true);
  }
  
  socket.onerror = () => {
    infoOutput.innerText = "При передаче данных произошла ошибка";
  }
  
  sendBtn.addEventListener("click", sendMessage);
  
  function sendMessage() {
    if (!input.value) return;
    socket.send(input.value);
    writeToChat(input.value, false);
    input.value === "";
  }
  
  function writeToChat(message, isRecieved) {
    let messageHTML = `<div class="${isRecieved? "recieved" : "sent"}">${message}</div>`;
    chatOutput.innerHTML += messageHTML;
  }

  btnGeo.onclick = function() {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(function(position){
        const { coords } = position;
        console.log(coords.latitude, coords.longitude);
        mapLink = document.createElement("a");
        mapLink.href = `https://www.openstreetmap.org/#map=18/${coords.latitude}/${coords.longitude}`;
        mapLink.textContent = "Гео-локация";
        wrt(mapLink, "geo");
      });
    }
  }

function wrt(mes, dir) {
  let pre = document.createElement("p");
  if (dir != "geo") {
    pre.innerHTML = mes;
  } else {
    pre = mes;
  }
  pre.className = dir + " mess";
  console.log(mes);
  console.log(pre);
  chatOutput.append(pre);
}

window.onunload = function() {
  socket.close();
};

}

document.addEventListener("DOMContentLoaded", pageLoaded);