var friendsData = require("../data/friends");

module.exports = function(app){
	app.get("/api/friends", function(req,res){
		res.json(friendsData);
	});

// This will be used to handle incoming survey results. 
// This route will also be used to handle the compatibility logic.
	app.post("/api/friends", function(req,res){
		if(friendsData.length < 10){
			friendsData.push(req.body);
			res.json(true);
		}
	});

	app.post("/app/clear",function(){
		friendsData = [];

		console.log(friendsData);
	});
};