
function writeCards(names, event) {
  //an empty array
  let messages = [];
  //loop
  for (let i = 0; i < names.length; i++) {
    //appreciation message
    let message = `Thank you, ${names[i]}, for the wonderful ${event} gift!`;
    messages.push(message);
  }
  return messages;
}

function countDown(number) {
  while (number >= 0) {
    console.log(number);
    number--;
  }
}