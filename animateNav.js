$(function () {
  $(window).on("scroll", function () {
    if ($(window).scrollTop() > 50) {
      $(".navContainer").addClass("active");
      $(".logo").css("color", "#fff");
      $(".signIn").css("color", "#fff");
      $(".follow").css("color", "#fff");
      $(".navIcon").css("color", "#fff");
      $(".searchIconNav").css("color", "#fff");
      $(".search").css("color", "#fff");
      $(".signIn").css("border-color", "#fff");

      // $(".nav-link").removeAttr("id");
    } else {
      //remove the background property so it comes transparent again (defined in your css)
      $(".navContainer").removeClass("active");
      $(".logo").css("color", "#413b3b");
      $(".signIn").css("color", "#413b3b");
      $(".navIcon").css("color", "#413b3b");
      $(".follow").css("color", "#413b3b");
      $(".searchIconNav").css("color", "#413b3b");
      $(".search").css("color", "#413b3b");
      $(".signIn").css("border-color", "#a9a9a9");

      // $(".nav-link").attr("id", "nav-link");
    }
  });
});
