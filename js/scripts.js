$(document).ready(function () {
  $("form#usernumbers").submit(function (event) {
    event.preventDefault();
    const usernumber = parseInt($("input#numberinput").val());
    const initialvalue = parseInt($("input#numberinput").val());
    let robogersresponse = ["Beep!", "Boop!", "Won't you be my neighbor?"]
    let residualarray = []
    residualarray.unshift(initialvalue);
    function getNumbers(residualarray, usernumber) {
      for (let counter = 0; counter <= usernumber; counter++); {
        residualarray.push(usernumber - 1)
      };
    };
    getNumbers(usernumber)
  });
});