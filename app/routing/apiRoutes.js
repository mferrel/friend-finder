var fs = require("fs");
//Your apiRoutes.js file should contain two routes:

//A GET route with the url /api/friends. This will be used to display a JSON of all possible friends.
//A POST routes /api/friends. This will be used to handle incoming survey results. This route will also be used to handle the compatibility logic.\

var friends = require("../data/friends.json");

function apiRoutes(app) {
    //when you click on API friends list this displays the array as JSON
    app.get("/api/friends", function(req, res){
        res.json(friends)
    });
    //when the client submits the form this adds them as a new friend
    app.post("/api/friends", function(req, res){
        var surveyData = req.body;
        var userScores = surveyData.scores;
        console.log(surveyData);
        var scoreDifference  = 0; 
        
        for (let i = 0; i < friends.length; i++) {
            
            scoreDifference = 0;

            for (let j = 0; j < friends[i].scores.length; j++) {
                //absolute converts is to positive
               scoreDifference = scoreDifference +  Math.abs((userScores[j]-friends[i].scores[j]));

            }
            //this stores the scores difference to do the comparison
            friends[i].scoreDifference = scoreDifference
            
        }


        //this overwrites the old file with the new score difference 
        fs.writeFile("./app/data/friends.json", JSON.stringify(friends), function(error){
            if (error) throw error
                   
            console.log("success!!");
            //returns the updated 
           

            //this returns the json in ascending order
            friends.sort((a, b)=>{
                return a.scoreDifference - b.scoreDifference; 
            })
            console.log(friends);
            friends.push(surveyData);
            res.json(friends[0]);
        });
        //CREATE 2 FOR LOOPS AND USE THE SUBTRACTION METHOD
        //return it with one object array, sort it in ascending order
    });
}
//this exports the function from this file
module.exports = apiRoutes;