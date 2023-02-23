function scuberGreetingForFeet(someNumber){
  if (someNumber <= 400) {
    return 'This one is on me!'
  }
  if (someNumber > 400, someNumber < 2000) {
    return 'That will be twenty bucks.'
  }
  if (someNumber > 2000, someNumber < 2500) {
    return 'I will gladly take your thirty bucks.'
  }
  if (someNumber > 2500) {
    return 'No can do.'
  }
}

function ternaryCheckCity(city) {
  if (city === 'NYC') {
    return ('Ok, sounds good.')
} 
else {
  return 'No go.';
  }
}

function switchOnCharmFromTip(tip){
  if (tip === "generous") {
    return "Thank you so much.";
} else if (tip === "not as generous") {
    return "Thank you.";
} else {
    return "Bye.";
}
}