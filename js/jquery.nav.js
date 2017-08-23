var ww = document.body.clientWidth;
var adjustMenu = function() {
  if (ww < 760) {
    $(".toggleMenu").css("display", "inline-block");
    if (!$(".toggleMenu").hasClass("active")) {
      $(".nav").hide();
    } else {
      $(".nav").show();
    }
    $(".nav li").unbind('mouseenter mouseleave');
    $(".nav li a.parent").unbind('click');
    $(".nav li .more").unbind('click').bind('click', function() {
      $(this).parent("li").toggleClass("hover");
    });
  } else if (ww >= 768) {
    $(".toggleMenu").css("display", "none");
    $(".nav").show();
    $(".nav li").removeClass("hover");
    $(".nav li a").unbind('click');
    $(".nav li").unbind('mouseenter mouseleave').bind('mouseenter mouseleave', function() {
      // must be attached to li so that mouseleave is not triggered when hover over submenu
      $(this).toggleClass('hover');
    });
  }
}

$(document).ready(function() {
  
  $(".nav li a").each(function() {
    if ($(this).next().length > 0) {
      $(this).addClass("parent");
    };
  })
  
  $(".toggleMenu").click(function(e) {
    e.preventDefault();
    $(this).toggleClass("active");
    $(".nav").slideToggle("fast");
  });
  
  adjustMenu();
  
  $("#search-icon").click(function(e) {
    e.preventDefault();
    $('#search-bar').slideToggle("fast");
    $('#search-bar').toggleClass("active"); 
    if ($('#account-bar').hasClass("active")) {
      $('#account-bar').slideToggle("fast");
      $('#account-bar').removeClass("active"); 
    }
    
  });
  
  $("#user-icon").click(function(e) {
    e.preventDefault();
    $('#account-bar').slideToggle("fast"); 
    $('#account-bar').toggleClass("active"); 
    if ($('#search-bar').hasClass("active")) {
      $('#search-bar').slideToggle("fast");
      $('#search-bar').removeClass("active");
    }

  });
  
})

$(window).bind('resize orientationchange', function() {
  ww = document.body.clientWidth;
  adjustMenu();
});
