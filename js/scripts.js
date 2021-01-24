//          Tests

//Describe: replacesDigits()
//Test: "It replaces the number 1 with Beep"
//Expect(isBeep(1)).toEqual(true);

//Test: "It replaces the number 2 with Boop"
//Expect(isBoop(2)).toEqual(true);

//Test: "It replaces the number 3 with Won't you be my neighbor?"
//Expect(isWontYouBeMyNeighbor(3)).toEqual(true);

//Test: "It returns range of numbers up to inputted number"
//Expect(0, Beep, Boop, Wont you be my neighbor, 4, 5(5)).toEqual(true);

//       Buisness Logic

function numberMatch(element) {
  let firstEnteredNumber = [];
   enteredNumber = firstEnteredNumber.tostring();
  for (i = 0; i <= element; i++) {
    if (enteredNumber.includes("1")) {
      enteredNumber.replace(re, "Beep!");
    } else if (enteredNumber.includes("2")) {
      enteredNumber.replace(re, "Boop!");
    } else if (enteredNumber.includes("3")) {
      enteredNumber.replace(re, "Won't you be my neighbor");
    } else {
      numberMatch;
    }
    return numberMatch;
  }
}

//         UI Logic





