  // Progress bar
  
  var progressId = [
    "nanoprogress1",
    "nanoprogress2",
    "nanoprogress3",
    "nanoprogress4",
  ];

  var percentage = [80, 65, 50, 30];

  for (let i=0; i < progressId.length; i++) {
    var options = {
      classname: "my-class",
      id: "my-id",
      target: document.getElementById(progressId[i]),
    };

    var nanobar = new Nanobar(options);

    // move bar
    nanobar.go(percentage[i]);
  };



/*var options = {
  classname: 'my-class',
  id: 'my-id',
  target: document.getElementById('nanoprogress1')
};

var nanobar = new Nanobar( options );

// move bar
nanobar.go( 30 ); // size bar 30%*/


var filterizd = $(".portfolio__content").filterizr({
  //options object
});

$(".portfolio__filter-controls li").click(function () {
  $(".portfolio__filter-controls li").removeClass("active");
  $(this).addClass("active");
});



