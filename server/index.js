const express = require('express');
const PORT = 1300;

let app = express();

app.use(express.static(__dirname + '/../public/dist'));
app.use(express.urlencoded({ extended: false }));


app.listen(PORT, ()=>{
	console.log(`Server listening on ${PORT}`);
})




