const API =
"https://raw.githubusercontent.com/mhdmurad/NS-Player/refs/heads/main/toffee_data.json";

fetch(API)
.then(r => r.json())
.then(data => {

    const box = document.getElementById("channels");

    data.response.forEach((ch,index)=>{

        box.innerHTML += `
        <div class="card" onclick="play(${index})">
            <img src="${ch.logo}">
            <h3>${ch.name}</h3>
        </div>
        `;

    });

});

function play(id){

location.href="player.html?id="+id;

}
