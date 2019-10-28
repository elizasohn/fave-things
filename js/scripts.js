$(document).ready(function(){
  $("#favorites").submit(function(event){

    event.preventDefault();

    var color = $("#colorInput").val();
    var food = $("#foodInput").val();
    var music = $("#musicInput").val();
    var plant = $("#plantInput").val();
    var music2 = $("#musicInput2").val();

    var inputArray = [color, food, music, plant];
    var newArray = inputArray.slice()

    newArray.splice(2, 1, music2);
    var anotherArray = [];
    anotherArray.push(inputArray[1]);
    anotherArray.push(inputArray[0]);
    anotherArray.push(inputArray[2]);

    var output = $(".result").text(inputArray);
    var output2 = $(".result2").text(newArray);
    var output3 = $(".result3").text(anotherArray);
    var list1 = $(".li1").text(anotherArray[0]);
    var list2 = $(".li2").text(anotherArray[1]);
    var list3 = $(".li3").text(anotherArray[2]);
    $(".end").show();



    console.log(anotherArray)
  })

})
