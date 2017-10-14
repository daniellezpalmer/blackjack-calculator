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

}
}
