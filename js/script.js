console.log("complete");
console.log($(window).width());
console.log($(window).height());

let button_clicked = false;

$(".kids-group").on("click", function () {
  if (button_clicked == false) {
    $(".wheel").addClass("wheelMove");
    $(".treeMove").addClass("treebgMove");
    button_clicked = true;
  } else {
    $(".wheel").removeClass("wheelMove");
    $(".treeMove").removeClass("treebgMove");
    button_clicked = false;
  }
});
