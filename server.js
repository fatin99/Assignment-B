let express = require('express');
let app = express();
let mongoose = require('mongoose');
let morgan = require('morgan');
let bodyParser = require('body-parser');
let port = 8080;
let routes = require('./app/routes/moduleRoute');
let config = require('config'); 
const cors = require("cors");

let options = 
{
    server: { socketOptions: { keepAlive: 1, connectTimeoutMS: 5000 } },
    replset: { socketOptions: { keepAlive: 1, connectTimeoutMS : 5000 } }
};
  
app.use(cors());

mongoose.connect(config.DBHost, options);
let db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));

if(config.util.getEnv('NODE_ENV') !== 'test') {
    app.use(morgan('combined'));
}

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: 'application/json'}));

app.get("/", (req, res) => {
    res.json({message: "Welcome to NUSMods BETA!"})
});

routes(app);

const PORT = process.env.PORT || 8080;
var server = app.listen(port);

app.use((req, res) => {
    res.status(404).send({ url: `${req.originalUrl} not found` });
  });
  
console.log(`Server started on port ${port}`);

module.exports = app; 