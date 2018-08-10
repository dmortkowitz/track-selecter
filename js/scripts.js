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
      $("#sub3A").show();
    }
    else if (secondChoice === "sub3B"){
      $("#sub3B").show();
    }
    else if (secondChoice === "IDK1"){
      $("#IDK1").show();
    }
  });

  $("#sub2B").submit(function(event){
    event.preventDefault();
    var thirdChoice = $("input:radio[name=answerS3]:checked").val();
    if (thirdChoice === "sub3C") {
      $("#sub3C").show();
    }
    else if (thirdChoice === "sub3D"){
      $("#sub3D").show();
    }
    else if (thirdChoice === "IDK1"){
      $("#IDK1").show();
    }
  });
  $("#sub3A").submit(function(event){
    event.preventDefault();
    var fourthChoice = $("input:radio[name=answerS4]:checked").val();
    if (fourthChoice === "sub4A") {
      $("#cSharp").show();
    }
    else if (fourthChoice === "sub4B"){
      $("#rails").show();
    }
    else if (fourthChoice === "IDK1"){
      $("#IDK1").show();
    }
  });
  $("#sub3B").submit(function(event){
    event.preventDefault();
    var thirdChoice = $("input:radio[name=answerS5]:checked").val();
    if (thirdChoice === "subC") {
      $("#rails").show();
    }
    else if (thirdChoice === "sub4D"){
      $("#react").show();
    }
    else if (thirdChoice === "IDK1"){
      $("#IDK1").show();
    }
  });
  $("#sub3C").submit(function(event){
    event.preventDefault();
    var thirdChoice = $("input:radio[name=answerS6]:checked").val();
    if (thirdChoice === "sub4E") {
      $("#react").show();
    }
    else if (thirdChoice === "sub4F"){
      $("#rails").show();
    }
    else if (thirdChoice === "IDK1"){
      $("#IDK1").show();
    }
  });
  $("#sub3D").submit(function(event){
    event.preventDefault();
    var thirdChoice = $("input:radio[name=answerS7]:checked").val();
    if (thirdChoice === "sub4G") {
      $("#rails").show();
    }
    else if (thirdChoice === "sub4H"){
      $("#cSharp").show();
    }
    else if (thirdChoice === "IDK1"){
      $("#IDK1").show();
    }
  });
});
