const container = document.getElementById("channels");
const search = document.getElementById("search");

let channels = [];

fetch("toffee_data.json")
  .then(res => res.json())
  .then(data => {
    channels = data;
    showChannels(channels);
  });

function showChannels(list){

container.innerHTML="";

list.forEach((ch,index)=>{

container.innerHTML += `

<div class="card"
onclick="openPlayer(${index})">

<img src="${ch.logo}"
onerror="this.src='https://placehold.co/150x150?text=TV'">

<h3>${ch.name}</h3>

</div>

`;

});

}

search.addEventListener("input",()=>{

let value = search.value.toLowerCase();

let result = channels.filter(c=>c.name.toLowerCase().includes(value));

showChannels(result);

});

function openPlayer(index){

location.href="player.html?id="+index;

}
