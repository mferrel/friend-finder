//Your apiRoutes.js file should contain two routes:

//A GET route with the url /api/friends. This will be used to display a JSON of all possible friends.
//A POST routes /api/friends. This will be used to handle incoming survey results. This route will also be used to handle the compatibility logic.\

var friends = require("../data/friends");

function apiRoutes(app) {
    app.get("/api/friends", function(req, res){
        res.json(friends)
    })
    app.post("/api/friends", function(req, res){
        console.log(req.body);


        //CREATE 2 FOR LOOPS AND USE THE SUBTRACTION METHOD
        //return it with one object array, sort it in ascending order
    })
}
//this exports the function from this file
module.exports = apiRoutes;