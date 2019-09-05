$(document).ready(function() {
  // jQuery("h1").click(function() {
  //   alert("This is a header.");
  // });
  //
  // jQuery("p").click(function() {
  //   alert("This is a paragraph.");
  // });
  //
  // jQuery("img").click(function() {
  //   alert("This is an image.");
  // });

// Toggle Img Visibility (Display: __)
  // $(".clickable").click(function() {
  //   $("#walrus-showing").toggle();
  //   $("#walrus-hidden").toggle();
  // });

// Toggle FadeIn and FadeOut
  $(".clickable").click(function() {
    $("#walrus-fadeIn").fadeToggle("slow");
    $("#walrus-fadeOut").fadeToggle("fast");
});
});
