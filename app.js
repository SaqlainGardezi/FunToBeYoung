var express 	=	require('express');
var app 		=	express();
var path 		=	require('path');

	// Setting hogan as templating engine
app.set('views', path.join(__dirname,'views'));	// Set vies folder
app.engine('html', require('hogan-express'));
app.set('view engine', 'html');
app.use(express.static(path.join(__dirname, 'public'))); // look for Static files

	//	Call routes.js module in app.js and invoke the function
require('./routes/routes.js')(express,app);

app.listen(3000, ()=> console.log("app running at port 3000"));