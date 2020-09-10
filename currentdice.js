function countDice(dice) {
    let values = [];
  
    for (let i = 0; i <= 6; i++) {
      values[i] = 0;
    }
  
    for (let current_dice of dice) {
      values[current_dice]++;
    }
​
    let par = false;
    let triss = false;
    let numb1 = 0;
    let numb2 = 0;
​
​
    for (let y = 0; y <= 6; y++){
        if (values[y] === 2){
            par = true;
            numb1 = y;
        }
        if (values[y] === 3) {
            triss = true;
            numb2 = y;
        }
    }
​
​
    if (triss && par){
        console.log("KÅK!! du fick två " + numb1 + " och tre " + numb2);
    }
    else {
        console.log("tyvär");
    }
    
  }
  
  countDice([3, 3, 2, 2, 2]);
Shared in