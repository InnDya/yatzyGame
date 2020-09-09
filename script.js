
document.addEventListener("DOMContentLoaded", function (e) {

    let btnCalc = document.getElementById("calc");
    let player1One = document.getElementById("player1One");
    let player1Two = document.getElementById("player1Two");
    let player1Three = document.getElementById("player1Three");
    let player1Four = document.getElementById("player1Four");
    let player1Five = document.getElementById("player1Five");
    let player1Six = document.getElementById("player1Six");
    let sumField = document.getElementById("playerOneScore");

    btnCalc.addEventListener("click", function(e) {
        let sum = 0;
      let tmp = 0;
      
      tmp = player1One.value;
      if (typeof(Number(tmp)) === "number") {
          sum += Number(tmp);
      }
  
      tmp = player1Two.value;
      if (!isNaN(Number(tmp))) {
          sum += Number(tmp);
      }
      tmp = player1Three.value;
      if (typeof(Number(tmp)) === "number") {
          sum += Number(tmp);
      }
  
      tmp = player1Four.value;
      if (!isNaN(Number(tmp))) {
          sum += Number(tmp);
      }
      tmp = player1Five.value;
      if (typeof(Number(tmp)) === "number") {
          sum += Number(tmp);
      }
  
      tmp = player1Six.value;
      if (!isNaN(Number(tmp))) {
          sum += Number(tmp);
      }

      
  
        sumField.innerHTML = sum;
      
      //let bonus = 0;
      //if (sum >= 5) {
        //  bonus = 50;
      //}
       // bonusField.innerHTML = bonus;
    })

    //let player1One = parseInt(document.getElementById("player1One").value, 10);
    //let player1Two = parseInt(document.getElementById("player1Two").value, 10);
    //let player1Three = parseInt(document.getElementById("player1Three").value, 10);
    //let player1Four = parseInt(document.getElementById("player1Four").value, 10);
    //let player1Five = parseInt(document.getElementById("player1Five").value, 10);
    //let player1Six = parseInt(document.getElementById("player1Six").value, 10);



    //console.log(player1Two);

    //let playerOneScore = player1One + player1Two;
    //let calc_button = document.getElementById("calc");

    // Ha koll på om någon klickar på beräkna-knappen.
    //calc_button.addEventListener("click", function (event) {
        //document.getElementById("playerOneScore").innerHTML = playerOneScore;
    //})

})
