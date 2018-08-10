$(document).ready(function(){
  $(".clickable").click(function(){
    $("#Main1").show();
    event.preventDefault();
  });

  $("#Main1").submit(function(event){
    event.preventDefault();
    var firstChoice = $("input:radio[name=answerS1]:checked").val();
    if (firstChoice === "sub2A") {
      $("#sub2A").show();
    }
    else if (firstChoice === "sub2B"){
      $("#sub2B").show();
    }
    else if (firstChoice === "IDK1"){
      $("#IDK1").show();
    }
  });


  $("#sub2A").submit(function(event){
    event.preventDefault();
    var secondChoice = $("input:radio[name=answerS2]:checked").val();
    if (secondChoice === "sub3A") {
      $("sub3A").show();
    }
    else if (secondChoice === "sub3B"){
      $("sub3B").show();
    }
    else if (secondChoice === "IDK"){
      $(".IDK").show();
    }
  });

  $("").submit(function(event){
    event.preventDefault();
    var thirdChoice = $("input:radio[name=answerS3]:checked").val();
    if (thirdChoice === "small2A") {
      $("div#sub2C").toggle();
    }
    else if (thirdChoice === "small2B"){
      $("div#sub2D").show();
    }
    else if (thirdChoice === "IDK1"){
      $(".IDK").show();
    }
  });

});
