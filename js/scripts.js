//Business Logic

let residualarray = [];
let residualarray2 = [];
let residualarray3 = [];
var usernumber = parseInt($("input#numberinput").val());

// while (usernumber > 1) {
//   usernumber--;
//   residualarray.push(usernumber);
// }

function checkForMatch(element) {
  for (let i = 0; i <= usernumber; i++) {
    const element = i.toString();
    if (element.includes(3)) {
      residualarray.push("Won't you be my neighbor?");
    } else if (element.includes(2)) {
      residualarray.push("Boop!");
    } else if (element.includes(1)) {
      residualarray.push("Beep");
    } else {
      residualarray.push(element);
    }
  }
  return residualarray;
}

let residualarrayreverse = residualarray2.reverse();
let joinedresidualarray = residualarrayreverse.join().toString();

//User Interface Logic
$(document).ready(function () {
  $("form#usernumbers").submit(function (event) {
    event.preventDefault();
    residualarray.map(function (element) {
      return checkForMatch(element);
      console.log(residualarray);
    });

    // residualarray.push(usernumber);
    // console.log(residualarray);

    // while (usernumber > 0) {
    //   if (usernumber.includes(3)) {
    //     usernumber.replace("Won't you be my neighbor? ");
    //   } else if (usernumber.includes(2)) {
    //     usernumber.replace("Beep,");
    //   } else if (usernumber.includes(1)) {
    //     usernumber.replace("Boop, ");
    //   }
    //   console.log(usernumber);

    //   usernumber--;
    // }

    // residualarray.filter(function (element) {
    //   if (element.includes(3)) {
    //     usernumber.replace(3, "Won't you be my neighbor? ");
    //   } else if (element.includes(2)) {
    //     usernumber.replace(2, "Beep,");
    //   } else if (element.includes(1)) {
    //     usernumber.replace(1, "Boop, ");
    //   }
    //   console.log(usernumber);
    //   residualarray.push(usernumber);
    //   usernumber--;
    // });
  });

  // let wontyoustring = joinedresidualarray.replace(
  //   /3.|13|23|30|31|32|33|34|35|36|37|38|39|43|53|63|73|83|93/g,
  //   "Won't you be my neighbor?"
  // );
  // let boopstring = wontyoustring.replace(
  //   /2.|12|21|22|42|52|62|72|82|92|2/g,
  //   "Boop!"
  // );
  // let beepstring = boopstring.replace(/1.|11|21|41|51|61|71|81|91/g, "Beep!");
  $("#mrrobogersoutput").replaceWith(joinedresidualarray);
});
