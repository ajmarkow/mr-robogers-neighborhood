$(document).ready(function () {
  $("form#usernumbers").submit(function (event) {
    event.preventDefault();
    const usernumber = parseInt($("input#numberinput").val());
  });
});