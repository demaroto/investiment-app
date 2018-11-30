const app = require('./server/config/server');
const server = require('http').createServer(app);
const path = require('path');
const port = process.env.PORT || 3000;
server.listen(port, () => {
	console.log(`Server online on port: ${port}`);
});

app.get('*', (req, res) => {
	res.sendFile(path.join(__dirname,'dist/investiment/index.html'));
});