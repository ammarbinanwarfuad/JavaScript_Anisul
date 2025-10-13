
console.clear();

function highestScores(scores) {
  console.log(scores);

  let max = scores[0];
  for(let i=1;i<=scores.length;i++){
    if (max<scores[i]) {
      max=scores[i];
    }
  }
  return max;
}

let scores = [21,28,1,88,15];
let maxscore = highestScores(scores);
console.log(maxscore);