document.addEventListener("DOMContentLoaded", function() {
    let game = new Game();
    let dice = new Dice();

    let btnThrowDice = document.getElementById("btnThrowDice");
    btnThrowDice.addEventListener("click", function () {
        dice.throw();
    })

    let btnCalc = document.getElementById("btnCalc");
    btnCalc.addEventListener("click", function () {
        game.partSum();
    
    })
})
