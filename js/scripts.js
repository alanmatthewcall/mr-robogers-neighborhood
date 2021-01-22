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

const numberOne = ["beep!"];
const numberTwo = ["boop!"];
const numberThree = ["won't you be my neighbor?"];

if (enteredNumber === 3) {
  $("Won't you be my neighbor?").show();
}
else if (enteredNumber === 2) {
  $("boop!").show();
}
else if(enteredNumber === 1) {
  $("beep!").show();
}

const enteredNumber = #enterednumber

  //      User Interface Logic


$(document).ready(function(){
  $("#submitBtn").click(function(){
      let str = $("#enteredNumber").val();
      alert(str);
  });
});      

