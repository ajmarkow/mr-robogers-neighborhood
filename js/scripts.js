$(document).ready(function () {
  $("form#usernumbers").submit(function (event) {
    event.preventDefault();
    const usernumber = parseInt($("input#numberinput").val());
    let robogersresponse = ["Beep!", "Boop!", "Won't you be my neighbor?"]

    function computeresponse(usernumber) {
      let residualarray = []
      let numberremainingtoprint = parseInt($("input#numberinput").val());
      const printedresponse = robogersresponse.map(function (robogersresponse) {

        for (numberremainingtoprint = usernumber); {
          residualarray.unshift(usernumber)
          numberremainingtoprint--;
        };

        for (numberremainingtoprint > 0 < usernumber) {
          residualarray.push(numberremainingtoprint--);
        }

        for (numberremainingtoprint = 0); {
          residualarray.push(0);
        }
      }
    });
});
});