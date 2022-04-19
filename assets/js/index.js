$(function () {
  $("#index-about-section").mousemove(function (evt) {
    let IAWidth = $("#index-about-section").width();
    let IAHeight = $("#index-about-section").height();

    let mouseX = evt.pageX - $("#index-about-section").offset().left;
    let mouseY = evt.pageY - $("#index-about-section").offset().top;

    $('.heart-img').css({
        right : (mouseX * 10 )/100,
        top : (mouseY * -10 )/100 + 10,
    });
  });

  $(".navigation-links a").click(function () {
    $(".navigation-links a").removeClass("active-nav");
    $(this).addClass("active-nav");
  });

  $(window).scroll(function () {
    let scroll = $(window).scrollTop();
    let h = $(window).height();
    if (scroll >= h / 2) {
      $(".navigation-bar").css({
        backgroundColor: "rgba(0,0,0,0.7)",
      });
      $(".social-media-icons ul a").css({
        color: "#000",
      });
    } else {
      $(".navigation-bar").css({
        backgroundColor: "transparent",
      });
      $(".social-media-icons ul a").css({
        color: "#fff",
      });
    }
  });
});
