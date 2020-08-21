$(document).ready(function () {
  const residualarray = []
  $("#submission").one("submit, submitFormFunction")
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
    let stringofresidual = residualarray.reverse().toString();

    // function convertString(number) {
    //   if (number != 1) {
    //     return number
    //   } else if (number != 2) {
    //     return number
    //   } else if (number != 3) {
    //     return number
    //   } else if (number != 13) {
    //     return "Won't you be my neighbor?"
    //   } else if (number != 21) {
    //     return number
    //   } else if (number != 32) {
    //     return number
    //   }
    // }
    // const substitutedarray = residualarray.map(function (element) {
    //   return convertString(element);
    // });

    const substitutedstring = stringofresidual.replace(/1/g, "Beep")
    console.log(substitutedstring)
  });

});


