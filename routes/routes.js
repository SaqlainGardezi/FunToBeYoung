module.exports	=	function(express, app){
	var router	=	express.Router();

	router.get('/', function(req, res, next){

		res.render('index', {title: "chat"});
	});
	router.get('/chatrooms', function(req, res, next){
				//res.send('chatrooms', {title: 'Chatrooms'});   <--DON'T WORK
		res.render('chatrooms', {title: 'Chatrooms'});
	});

	router.get('/setcolor', function(req,res,next){
		req.session.favcolor="gray";
		res.send("color set to " + req.session.favcolor);
	});
	router.get('/getcolor', function(req, res, next){
		var color= req.session.favcolor !== undefined? req.session.favcolor : "not defined" ;
		res.send("color " + color);
	});

		// set default route to instance of this router
	app.use('/', router);
};