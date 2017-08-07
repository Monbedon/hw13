var path = require ("path");

// routing
module.exports = function(app){
// display survey page
	app.get("/survey", function(req,res){
		res.sendFile(path.join(__dirname,"/../public/survey.html"));
	});

// default route
	 app.use(function(req, res) {
    	res.sendFile(path.join(__dirname, "/../public/home.html"));
  	});
}