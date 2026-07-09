const container = document.getElementById("channels");
const search = document.getElementById("search");

let channels = [];

fetch("toffee_data.json")
.then(res => res.json())
.then(data => {

    channels = data.response;   // <-- এটাই পরিবর্তন

    showChannels(channels);

});

function showChannels(list){

container.innerHTML="";

list.forEach((ch,index)=>{

container.innerHTML += `

<div class="card" onclick="openPlayer(${index})">

<img src="${ch.logo}" alt="${ch.name}">

<h3>${ch.name}</h3>

</div>

`;

});

}

search.addEventListener("keyup",()=>{

const value=search.value.toLowerCase();

const result=channels.filter(item=>

item.name.toLowerCase().includes(value)

);

showChannels(result);

});

function openPlayer(index){

localStorage.setItem("channel",JSON.stringify(channels[index]));

window.location="player.html";

}
