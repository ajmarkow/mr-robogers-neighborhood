$(document).ready(function () {
  const residualarray = []

  $("form#usernumbers").submit(function (event) {

    event.preventDefault();
    let usernumber = parseInt($("input#numberinput").val());

    while (usernumber > 0) {
      residualarray.push(usernumber);
      usernumber--;

    }
    let residualarrayreverse = residualarray.reverse();
    let joinedresidualarray = (residualarrayreverse.join()).toString();

    let wontyoustring = joinedresidualarray.replace(/3.|13|23|30|31|32|33|34|35|36|37|38|39|43|53|63|73|83|93/g, "Won't you be my neighbor?")
    let boopstring = wontyoustring.replace(/2.|12|21|22|42|52|62|72|82|92|2/g, "Boop!")
    let beepstring = boopstring.replace(/1.|11|21|41|51|61|71|81|91/g, "Beep!")
    $("#mrrobogersoutput").replaceWith(beepstring);
  });
});



