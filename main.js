function handValue (hand) {
  let sum = 0;
  let aces = [];


for (var i = 0; i < hand.length; i++) {
  if (hand[i] === 'A') {
    aces.push(hand[i]);
    continue;
  }

  if (hand[i] === 'J' || hand[i] === 'Q' || hand[i] === 'K'){
    sum += 10;
    continue;
  }

sum += parseInt(hand[i]);

}

for (let i = 0; i < aces.length; i++) {
  if (sum <= 10) {
    sum += 11;
  } else {
    sum += 1;
  }
}
return sum;
}
