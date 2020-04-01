//Your htmlRoutes.js file should include two routes:
//pure get requests for all HTML routes


//A GET Route to /survey which should display the survey page.
//A default, catch-all route that leads to home.html which displays the home page.
var path = require("path");

function htmlRoutes(app) {
    //this is how you do a get request, includes the callback function
    //each webpage has it's own route (one for the homepage and one for the survey page)
    app.get("/", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/index.html"));
    }) 
    app.get("/survey", function (req,res){
        res.sendFile(path.join(__dirname, "../public/survey.html"))
    })

}
module.exports = htmlRoutes;

