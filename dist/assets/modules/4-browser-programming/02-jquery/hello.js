$(init);

function init() {

  $("#callbackBtn").click(function(){
    $("#callbackH1").hide(3000, function(){
      alert("Header is now hidden");
    });
  });

  $("button#left").click(function(){
    alert('left');
    $("#animate").animate({left: '250px'});
  });

  $("button#right").click(function(){
    alert('right');
    $("#animate").animate({right: '250px'});
  });

  $("#toggleBtn").click(function(){
    $("#toggle").toggle();
  });

  // $("#enter").mouseenter(function(){
  //   alert("Entered h1!");
  // });
  // $("#enter").mouseleave(function(){
  //   alert("Left h1!");
  // });

  $("#clickToHide").click(function(){
    $("#hideMe").hide();
  });
  $("#clickToHideTimed").click(function(){
    $("#hideMeTimed").hide(2000);
  });


  jQuery("p")
    .css("color", "red")
    .click(pClicked);

  $(".details").hide();

  var name = $("#name").val();
  console.log(name);

  function pClicked() {
    // alert("p was clicked");
    $(".details").show();
  }

}
