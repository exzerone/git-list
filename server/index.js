const express = require('express');
const morgan = require('morgan');
const PORT = 1300;

let app = express();

app.use(morgan('dev'));
app.use(express.static(__dirname + '/../public/dist'));
app.use(express.urlencoded({ extended: false }));


app.listen(PORT, ()=>{
	console.log(`Server listening on ${PORT}`);
})




