//this routes the submit button to make a post request and insert into the database

$("#submit").on("click", function(){
    var userData = {
        "name":$("#name").val(),
        "photo":$("#photo").val(),
        "scores":[
         $("#question1").val(),
         $("#question2").val() ,
         $("#question3").val(),
         $("#question4").val(),
         $("#question5").val(),
         $("#question6").val(),
         $("#question7").val(),
         $("#question8").val(),
         $("#question9").val(),
         $("#question10").val()
        ]
    }

    console.log(userData);
    $.post("/api/friends", userData).then(function(data){
        console.log(data);


        $("#results-modal").modal("show");
            $("#match-name").html(data.name);
            $("#match-img").attr("src", data.photo);
    })
})