jQuery(function () {
  jQuery("#all").focus();

  $(".sectionTwo--sub4--arrows #leftArrow").click(function () {
    $(".sectionTwo--sub4--arrows #leftArrow")
      .parent()
      .siblings("div#scroller")
      .animate({ scrollLeft: "-=360" });
    if ($(this).parent().siblings("div#scroller").scrollLeft() < 360) {
      $(".sectionTwo--sub4--arrows #leftArrow")
        .find("path")
        .css("opacity", "0.4");
      $(".sectionTwo--sub4--arrows #leftArrow")
        .children()
        .css("cursor", "default");
    }
  });

  $(".sectionTwo--sub4--arrows #rightArrow").click(function () {
    $(".sectionTwo--sub4--arrows #leftArrow").find("path").css("opacity", "1");
    $(".sectionTwo--sub4--arrows #leftArrow")
      .children()
      .css("cursor", "pointer");

    $(".sectionTwo--sub4--arrows #rightArrow")
      .parent()
      .siblings("div#scroller")
      .animate({ scrollLeft: "+=360" });
  });

  $(".sectionTwo--sub3--rightcontent--item--content").hide();
  $(".sectionTwo--sub3--rightcontent--item--content:first").show();

  $(".accordion .sectionTwo--sub3--rightcontent--item--heading button").click(
    function () {
      $(this)
        .parent()
        .next(".sectionTwo--sub3--rightcontent--item--content")
        .slideToggle();
      $(this).text($(this).text() == "+" ? "-" : "+");
      $(this)
        .closest(".sectionTwo--sub3--rightcontent--item")
        .siblings()
        .find(".sectionTwo--sub3--rightcontent--item--content")
        .slideUp();

      $(this)
        .closest(".sectionTwo--sub3--rightcontent--item")
        .siblings()
        .find(".sectionTwo--sub3--rightcontent--item--heading button")
        .text("+");
    }
  );

  $(".sectionTwo--top--buttons button").click(function () {
    var text = $(this).text().trim();
    if (text == "All") {
      $(".sectionTwo--sub2--content article").show();
      $(".sectionTwo--sub2--content article:last").hide();
    } else {
      $(".sectionTwo--sub2--content article").hide();

      $(".sectionTwo--sub2--content ." + text.toLowerCase()).show();
    }
  });

  $(".sectionTwo--sub4--arrows #leftArrow").find("path").css("opacity", "0.4");
  $(".sectionTwo--sub4--arrows #leftArrow").children().css("cursor", "default");
});
