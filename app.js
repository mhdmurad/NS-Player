const container = document.getElementById("channels");
const search = document.getElementById("search");

const WORKER = "https://young-river-6627.mhdmurad78.workers.dev";

let channels = [];

fetch("https://raw.githubusercontent.com/sm-monirulislam/Toffee-Auto-Update-Playlist/main/toffee_data.json")
.then(res => res.json())
.then(data => {

    channels = data.response;

    showChannels(channels);

});

function showChannels(list){

    container.innerHTML = "";

    list.forEach(ch=>{

        const index = channels.indexOf(ch);

        container.innerHTML += `

        <div class="card" onclick="play(${index})">

            <img src="${ch.logo}" loading="lazy">

            <h3>${ch.name}</h3>

        </div>

        `;

    });

}

search.addEventListener("keyup",()=>{

    const value = search.value.toLowerCase();

    const result = channels.filter(item=>

        item.name.toLowerCase().includes(value)

    );

    showChannels(result);

});

function play(id){

    window.location =
    "player.html?id=" + id;

}
