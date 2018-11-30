const bodyParser = require('body-parser'),
	express = require('express'),
	consign = require('consign'),
	app = express();

app.use((req, res, next) => {
	res.setHeader('Access-Control-Allow-Origin', '*');
	res.setHeader('Access-Control-Allow-Methods', 'GET POST PUT DELETE');
	res.setHeader('Access-Control-Allow-Headers', 'X-Requested With, Content-Type, Accept');
	res.setHeader('Access-Control-Allow-Credentials', true);

	next();
});

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({
	extended: true
}));

app.use(express.static('dist/investiment'));

consign().include('./server/app/controllers')
	.then('./server/app/models')
	.then('./server/config/databases')
	.then('./server/app/helpers')
	.then('./server/routes')
	.into(app)

module.exports = app;
