$(document).ready(function () {
  var residualarray = []
  $("form#usernumbers").submit(function (event) {
    event.preventDefault();
    let usernumber = parseInt($("input#numberinput").val());
    let robogersresponse = ["Beep!", "Boop!", "Won't you be my neighbor?", "Won't you be my neighbor?", "Boop", "Won't you be my neighbor?"]
    let robogerskey = [1, 2, 3, 13, 21, 32]

    while (usernumber > 0) {
      residualarray.push(usernumber);
      usernumber--;

    }
    residualarray.reverse();
    let stringofresidual = residualarray.toString();

    function convertString(number) {
      if (number = 1) {
        return "Beep!"
      } else if (number = 2) {
        return "Boop!"
      } else if (number = 3) {
        return "Won't you be my neighbor?"
      } else if (number = 13) {
        return "Won't you be my neighbor?"
      } else if (number = 21) {
        return "Boop"
      }
      else if (number = 32) {
        return "Won't you be my neighbor?"
      }
    }
    const substitutedarray = residualarray.map(function (element) {
      return convertString(element);
    });
    console.log(substitutedarray)
  });

});


