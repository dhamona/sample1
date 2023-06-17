const url =" https://pokeapi.co/api/v2/pokemon/";
const card = document.getElementById("card");
const btn = document.getElementById("btn");

let getPokeData = () => {
    let id = Math.floor(Math.random() * 150) + 1;
    console.log(id);
    const finalurl = url + id;
    fetch(finalurl)
        .then((response) => response.json())
        .then((data) => {
        generateCard(data)
    });
};
    let generateCard = (data) => {
        console.log(data);
        const hp = data.stats[0].base_stat;
        const pokeMove = data.moves[1].move.name
        const pokeName = data.name;
        const pokeImg = data.sprites.front.default;
        const statAttack = data.stats[1].base_stat;
        const statSpeed = data.stats[5].base_stat;
        const pokWeight = data.weight;
       
        


        card.innerHTML = `
        <p id="hp">
        <span>HP</span>
          ${hp}
        </p>
        <img src=${pokeImg}/>
        <h2 class="poke-name">${pokeName}</h2>
        <h5 class="poke-name">Moves: ${pokeMove}</h>
        <div class="types">
           
        </div>
        <div class="stats">
            <div>
                <h3>${statAttack}</h3>
                <p>attack</p>
            </div>
          
            <div>
                <h3>${statSpeed}</h3>
                <p>speed</p>
            </div>
            <div>
                <h3>${pokWeight}</h3>
                <p>weight</p>
            </div>
           
        </div>

        
        `;
        appendTypes(data.types);
        
    };

let appendTypes = (types) => {
    
    types.forEach(item =>{
        let span = document.createElement("SPAN");
        span.textContent = item.type.name;
        document.querySelector(".types").appendChild(span);
    });
};

btn.addEventListener("click", getPokeData);

window.addEventListener("load", getPokeData);