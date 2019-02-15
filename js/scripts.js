(function($) {
  $("html").removeClass("no-js");
  // Animate to section when nav is clicked
  $("header a").click(function(e) {
    if ($(this).hasClass("no-scroll")) return;

    e.preventDefault();
    const heading = $(this).attr("href");
    const scrollDistance = $(heading).offset().top;

    $("html, body").animate(
      {
        scrollTop: scrollDistance + "px"
      },
      Math.abs(window.pageYOffset - $(heading).offset().top) / 1
    );

    if ($("header").hasClass("active")) {
      $("header, body").removeClass("active");
    }
  });

  // Scroll to top
  $("#to-top").click(function() {
    $("html, body").animate(
      {
        scrollTop: 0
      },
      500
    );
  });

  $("#lead-down span").click(function() {
    const scrollDistance = $("#lead")
      .next()
      .offset().top;
    $("html, body").animate(
      {
        scrollTop: scrollDistance + "px"
      },
      500
    );
  });

  // Open mobile menu
  $("#mobile-menu-open").click(function() {
    $("header, body").addClass("active");
  });

  // Close mobile menu
  $("#mobile-menu-close").click(function() {
    $("header, body").removeClass("active");
  });

  $("#view-more-projects").click(function(e) {
    e.preventDefault();
    $(this).fadeOut(300, function() {
      $("#more-projects").fadeIn(300);
    });
  });
})($);
