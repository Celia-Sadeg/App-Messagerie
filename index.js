const app = require('express')();
const server = require('http').createServer(app);
const io = require('socket.io')(server);

app.get('/', (req, res) => {
    res.sendFile(`${__dirname}/public/index.html`);
});
app.get('/test', (req, res) => {
    console.log(`hello`);
});

server.listen(3000, () => {
    console.log("Listening on port 3000");
});
