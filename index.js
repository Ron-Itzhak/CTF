//modules
const express = require("express");
const app = express();
const Joi = require("joi");
const fs = require("fs");
const path = require("path");
var bodyParser = require("body-parser");

const cors = require("cors"); /// npm install cors --save
app.use(express.json());
app.use(cors());
app.use(express.static(__dirname));

app.use(
	bodyParser.urlencoded({
		extended: true,
	})
);

app.get("/", (req, res) => {
	res.sendFile(path.join(__dirname + "/index.html"));
});


app.get("/ctf1", (req, res) => {
	res.sendFile(path.join(__dirname + "/ctf1.html"));
});

app.get("/ctf2", (req, res) => {
	res.sendFile(path.join(__dirname + "/ctf2.html"));
});
app.get("/ctf3", (req, res) => {
	res.sendFile(path.join(__dirname + "/ctf3.html"));
});

app.get("/ctf4", (req, res) => {
	res.sendFile(path.join(__dirname + "/ctf4.html"));
});

app.get("/ctf5", (req, res) => {
	res.sendFile(path.join(__dirname + "/ctf5.html"));
});



app.get("/ctf5flag", (req, res) => {
	res.set("flag", "c2ltcGxlYW5kZWFzeWZsYWc=");
	const user = {
		success: "true",
	};
	res.send(user);
});

app.get("/sendfile", function(req,res){     app.set('view engine', 'html');     res.status(200).sendFile(__dirname + '/index.html'); });

app.post("/sendflag", (req, res) => {
	app.set('view engine', 'html');
	const flag = req.body.flag;
	console.log(flag);
	if (flag === "Afikoman{simpleandeasyflag}"|| flag === "Afikoman{Ishay_Levy_Rikdi}"
		||flag === "Afikoman{acdc_back_in_black}" || flag === "Afikoman{Jeffrey_Preston_Bezos}" || flag === "Afikoman{coldplay_sky_full_of_stars}") {
		res.status(200).send("Congratulations you found the right flag");	
	} else
		res.status(400).send("Unfortunately you have been found the wrong flag");
});



const port = process.env.PORT || 3000;

app.listen(3000, () => console.log(`Listening on port ${port} `));
