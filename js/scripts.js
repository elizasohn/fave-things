$(document).ready(function(){
  $("#favorites").submit(function(event){

    event.preventDefault();

    var color = $("#colorInput").val();
    var food = $("#foodInput").val();
    var music = $("#musicInput").val();
    var plant = $("#plantInput").val();
    var music2 = $("#musicInput2").val();
    var inputArray = [color, food, music, plant];
    console.log(inputArray)
    var newArray = inputArray.slice()
    newArray.splice(2, 1, music2);
    console.log(newArray)
    var output = $(".result").text(inputArray);
    var output2 = $(".result2").text(newArray);
    $(".end").show();

  })
})
