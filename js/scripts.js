$(document).ready(function () {
  $("form#usernumbers").submit(function (event) {
    event.preventDefault();
    const usernumber = parseInt($("input#numberinput").val());
    let robogersresponse = ["Beep!", "Boop!", "Won't you be my neighbor?"]
    let residualarray = []

    function computeresponse(usernumber) {
      residualarray.unshift(usernumber);
      for (let index = residualarray[0]; index >= 0; index--); {
        residualarray.push(index)
      };
    };
    computeresponse(usernumber);
  });
});