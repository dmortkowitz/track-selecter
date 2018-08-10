$(document).ready(function(){
  $(".clickable").click(function(){
    $("#Main1").show();
    event.preventDefault();
  });

  $("form#questionS1").submit(function(event){
    event.preventDefault();
    var firstChoice = $("input:radio[name=answerS1]:checked").val();
    if (firstChoice === "sub1A") {
      $("div#sub2A").show();
    }
    else if (firstChoice === "sub1B"){
      $("div#sub2B").show();
    }
    else if (firstChoice === "IDK1"){
      $(".IDK").show();
    }
  });


  $("form#questionS2").submit(function(event){
    event.preventDefault();
    var secondChoice = $("input:radio[name=answerS2]:checked").val();
    if (secondChoice === "small2A") {
      $("div#sub2A").show();
    }
    else if (secondChoice === "small2B"){
      $("div#sub2B").show();
    }
    else if (secondChoice === "idk1"){
      $(".IDK").show();
    }
  });

  $("form#questionS3").submit(function(event){
    event.preventDefault();
    var thirdChoice = $("input:radio[name=answerS3]:checked").val();
    if (thirdChoice === "small2A") {
      $("div#sub2C").show();
    }
    else if (thirdChoice === "small2B"){
      $("div#sub2D").show();
    }
    else if (thirdChoice === "idk1"){
      $(".IDK").show();
    }
  });

});
