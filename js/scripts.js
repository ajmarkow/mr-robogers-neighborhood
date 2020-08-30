//Business Logic
let usernumber = parseInt($("input#numberinput").val());
let residualarray = [];

while (usernumber > 0) {
  residualarray.push(checkforMatch(usernumber));
  usernumber--;
}
let residualarrayreverse = residualarray.reverse();
let joinedresidualarray = residualarrayreverse.join().toString();

function checkForMatch(element) {
  if (element.includes(3)) {
    return residualarray.push("Won't you be my neighbor?");
  } else if (element.includes(2)) {
    return residualarray.push("Boop!");
  } else if (element.includes(1)) {
    residualarray.push("Beep");
  } else {
    console.log("working");
    return residualarray.push(element);
  }
}

// function updateArray() {
//   residualarray.push((x) => checkforMatch(x));
//   console.log(residualarray);
// }

//User Interface Logic
$(document).ready(function () {
  $("form#usernumbers").submit(function (event) {
    event.preventDefault();
    $("#mrrobogersoutput").replaceWith(joinedresidualarray);
  });

  // let wontyoustring = joinedresidualarray.replace(/3.|13|23|30|31|32|33|34|35|36|37|38|39|43|53|63|73|83|93/g, "Won't you be my neighbor?")
  // let boopstring = wontyoustring.replace(/2.|12|21|22|42|52|62|72|82|92|2/g, "Boop!")
  // let beepstring = boopstring.replace(/1.|11|21|41|51|61|71|81|91/g, "Beep!")
});
