// 2D Array
// Create a function called highestRunScorer that will
// Receive a 2d array called playersInfo
// Based on highest score, return the name of the player


function highestRunScorer(playersInfo) {
  // console.log(playersInfo);
    let highestScorer = playersInfo[0][0];
    let highestScore = playersInfo[0][1];

    for(let i= 1 ;i<playersInfo.length;i++){
        
      if(highestScore<playersInfo[i][1]){
          highestScore = playersInfo[i][1];
          highestScorer = playersInfo[i][0];
        }

    }



  return highestScorer;
}


let playersInfo = [
  ["Ashraful", 95],
  ["Mizan", 125],
  ["Rakib", 45],
  ["lu", 105],
];



let highestScorer = highestRunScorer(playersInfo);
console.log(highestScorer);