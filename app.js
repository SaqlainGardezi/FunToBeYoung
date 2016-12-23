var express 		=	require('express');
var app 			=	express();
var path 			=	require('path');
var cookieParser	= 	require('cookie-parser'),	 //For managing session
	session 		=	require('express-session'),
	config			=	require('./config/config.js'), //provides setting relevant to mode app is running
		// In PRODUCTION sessions cant be stored in default memory store so,
	ConnectMongo	=	require('connect-mongo')(session)	// store session in mongo lab account

	;

	// Setting hogan as templating engine
app.set('views', path.join(__dirname,'views'));	// Set views folder
app.engine('html', require('hogan-express'));
app.set('view engine', 'html');
app.use(express.static(path.join(__dirname, 'public'))); // look for Static files
app.use(cookieParser()); // enable session

var env		=	process.env.NODE_ENV || 'development';	
if (env === 'development') {
		// dev specific settings
	app.use(session({secret:config.sessionSecret, saveUninitialized: true, resave: true}));
}else{
		// production specific settings
	app.use(session({
		secret: config.sessionSecret,
		store: new ConnectMongo({ 	// stores session in mongolab
			url: config.dbURL,
			stingify: true
			})
		})
	);
}

	//	Call routes.js module in app.js and invoke the function
require('./routes/routes.js')(express,app);

app.listen(3000, ()=> {
	console.log("app running at port 3000");
	console.log("Mode : " + env);
});