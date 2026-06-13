const rollBtn = document.querySelector("#rollButton");
//querySelelctorAll: select all and make an array
const diceimgs = document.querySelectorAll("#gameboard img");


rollBtn.addEventListener("click", e => {
    
    diceimgs.forEach((img) => {
        if (isDieUnlocked(img)){
        img.src = "assets/die_rolling.gif";
    }
    });

    //at some point please stop rolling 
    //time delay
    //setTimeout(function, pause duration) (pause first and then function)
setTimeout(()=>{
    //set all die imgs to a random number
    diceimgs.forEach((img) =>{
        //math.random() creates a number between 0 and 1
        if (isDieUnlocked(img)){
        img.src = "assets/white_dice_" + Math.floor(Math.random() * 6 +1) + ".gif";        
    }
    })
},1000);
});

function isDieUnlocked(dieimg){
    const checkboxes = document.querySelectorAll("#gameboard input");
    //get any unchecked 
    const unchecked = Array.from(checkboxes).filter(checkbox => !checkbox.checked);

    return unchecked.find(checkbox => checkbox.className === dieimg.className);
}