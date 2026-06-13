const healthcontainer = document.querySelector(".health");
const levelcontainer = document.querySelector(".level");

const character={
    name: "Snortleblat",
    class: "Swamp Beast Diplomat",
    level: 6,
    health:100,

    attacked:function(){
        if (this.health > 0){
        this.health = this.health-20;
        healthcontainer.innerHTML = `<p><b>Health</b>: ${this.health}</p>`;
        console.log("health -20");
        }
        else{
            alert("Chracter Died");
        }
    },
    levelUp:function(){
        this.level = this.level+1;
        levelcontainer.innerHTML = `<p><b>Level</b>: ${this.level +1}</p>`;
        console.log("level +1")
    }
}


const atkbtn = document.querySelector(".attak");
const lvlbtn = document.querySelector(".levelup");

atkbtn.addEventListener('click', () => character.attacked());
lvlbtn.addEventListener('click', () => character.levelUp());