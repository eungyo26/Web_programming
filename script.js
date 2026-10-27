console.log("complete");
console.log($(window).width());
console.log($(window).height());

let button_clicked = false;

// 아이들 움직임
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

// 몬스터 손
$(".monsterhand-img").on("click", function () {
  console.log("손클릭");
  $(".stage").addClass("goScene2");
});

// 몬스터 움직임
let monster_count = 0;
let poster_state = 0;

$(".monster-img").on("click", function () {
  monster_count = monster_count + 1;
  $(".monster-img").attr(
    "src",
    "./assets/Scene2/monster_animation.gif?" + monster_count,
  );

  if (poster_state == 0) {
    $(".stage").removeClass("goScene2");
    $(".stage").addClass("goLogo");
    $(".logo-wrap").addClass("logoOn");
  }
});

$(".logo-wrap").on("click", function () {
  if (poster_state == 0) {
    $(".logo-wrap").addClass("neon");
    $(".logo-text").addClass("textOn");
    $(".stage").removeClass("goLogo");
    $(".viewport").addClass("scrollMode");
    $(window).scrollTop(614);
    poster_state = 1;
  }
});
