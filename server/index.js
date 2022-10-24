/*Import project dependencies*/
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
/*Initialize Express server*/
const app = express();
/*Call body-parser and cors middleware*/
var corsOptions = {
    origin: 'http://localhost:4000'
}
app.use(cors(bodyOptions));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
/*Create default route*/
app.get('/', (req, res) => {
    res.json({ message: "Welcome to the REST API" });
});
/*Set PORT and listen for request*/
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
    console.log(`Server running on port: ${PORT}`);
});