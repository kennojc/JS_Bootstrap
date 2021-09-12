$(document).ready(function () {
    
  $(".close").click (function(){
        $(".alert").fadeOut();
    });

  $("#collapseButton").click (function(){
    $("#collapseExample").toggle("slow");
  });


  $(".collapsed").click(function () {
    let target = $($(this).data("target"));
    if (target.is(":visible")) {
    target.slideUp();
    } else {
    $(".collapse").slideUp();
    target.slideToggle("slow");
    }
  });
})