//this routes the submit button to make a post request and insert into the database

$("#submit").on("click", function(){
    var userData = {
        "name":$("#name").val(),
        "photo":$("#photo").val(),
        "scores":[
         $("#item1").val(),
         $("#item2").val() ,
         $("#item3").val(),
         $("#item4").val(),
         $("#item5").val(),
         $("#item6").val(),
         $("#item7").val(),
         $("#item8").val(),
         $("#item9").val(),
         $("#item10").val()
          ]
    }
    $.post("/api/friends", userData).then(function(data){

    })
})