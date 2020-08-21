$(document).ready(function () {
  var residualarray = []
  $("form#usernumbers").submit(function (event) {
    event.preventDefault();
    let usernumber = parseInt($("input#numberinput").val());
    let robogersresponse = ["Beep!", "Boop!", "Won't you be my neighbor?"]

    while (usernumber > 0) {
      residualarray.push(usernumber);
      usernumber--;

    }
    residualarray.reverse();
    console.log(residualarray);
    let stringofresidual = residualarray.toString();
    stringofresidual.replace(1 +, "Beep!");
    stringofresidual.replace(2 +, "Boop!");
    stringofresidual.replace(3 +, "Won't you be my neighbor!");
    console.log(stringofresidual);
  });
});



