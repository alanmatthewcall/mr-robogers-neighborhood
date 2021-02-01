//       Buisness Logic

let numberMatch = function (element) {
  let firstEnteredNumber = [];
  for (index = 0; index <= element; index++) {
    firstEnteredNumber.push(index.toString());
  };

  const three = "Won't you be my neighbor?"
  const two = "Boop!"
  const one = "Beep!"

  let numberMatch = firstEnteredNumber.map(function (newValue) {
    if (newValue.includes("3")) {
      return newValue = three;
    } else if (newValue.includes("2")) {
      return newValue = two;
    } else if (newValue.includes("1")) {
      return newValue = one;
    } else {
      return newValue;
    };
  });
  return numberMatch;
};


//         UI Logic

$(document).ready(function () {
  $("#inputForm").submit(function (event) {
    event.preventDefault();
    let element = parseInt($("#enteredNumber").val());
    let output = numberMatch(element);
    $("#results").text(output);
    $("#output").show();
  });
});



