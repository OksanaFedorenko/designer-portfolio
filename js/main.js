  // Progress bar
  
  var progressId = ["progress-80", "progress-65", "progress-50", "progress-30"];

  var percentage = [80, 65, 50, 30];

  for (let i=0; i < progressId.length; i++) {
    var options = {
      classname: "nanoprogress",
      target: document.getElementById(progressId[i]),
    };

    var nanobar = new Nanobar(options);

    // move bar
    nanobar.go(percentage[i]);
  };

//Filter

var filterizd = $('.portfolio__content').filterizr({});

$(".portfolio__filter-controls li").click(function () {
  $(".portfolio__filter-controls li").removeClass("active");
  $(this).addClass("active");
});



