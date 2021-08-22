const express = require('express');
const app = express();
const path = require('path');

const APP_PORT = 3949;

const server = app.listen(APP_PORT, () => {
	console.log(`App running on port ${APP_PORT}`);
});

const io = require('socket.io').listen(server);

app.set('views' , path.join(__dirname , 'views'));
app.set('view engine' , 'pug');

app.use(express.static('public'));

app.get('/' , (req , res) => {
	res.render('index');
});

io.on('connection', socket => {
	console.log('a user connected');
});