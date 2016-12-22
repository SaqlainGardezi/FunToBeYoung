module.exports	=	function(express, app){
	var router	=	express.Router();

	router.get('/', function(req, res){
				//res.status(200).location('index.html');		<--Don't work
				//res.status(status).send('index', {title: "Chatcat"});
		res.render('index', {title: "chat"});
	});
	router.get('/chatrooms', function(req, res){
				//res.send('chatrooms', {title: 'Chatrooms'});   <--DON'T WORK
		res.render('chatrooms', {title: 'Chatrooms'});
	});

		// set default route to instance of this router
	app.use('/', router);
};