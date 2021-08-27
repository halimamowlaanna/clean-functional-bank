function setPlayerStyle(player){
    player.style.border = '1px solid blue';
    player.style.margin = '10px';
    player.style.padding = '10px';
    player.style.borderRadius = '15px';
}
const playerClass = document.getElementsByClassName('player');
for (const player of playerClass) {  
   setPlayerStyle(player);
   
}

function addPlayer(){
    const playersContainer = document.getElementById('players');
    const player = document.createElement('div');
    player.classList.add('player');
    player.innerHTML = `
    <h1 class="player-name">New Player</h1>
    <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque
        consequatur quis illum, numquam in quaerat tenetur alias, odit,
        assumenda ut inventore fugiat nobis reprehenderit dignissimos.
        Reprehenderit dolores nostrum nisi voluptatem!
    </p>
    `
    setPlayerStyle(player);
    playersContainer.appendChild(player);
}
document.getElementById('players').addEventListener('click',function(event){
    // console.log(event.target);
    if(event.target.tagName.toLowerCase()=='div'){
        event.target.style.backgroundColor = 'yellow';
    }
    else{
        event.target.parentNode.style.backgroundColor = 'yellow';
    }

});

