const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require('body-parser')

const postRoutes = require("../ex/routes/Post.routes")

app.use(bodyParser.json())
app.use(cors());

postRoutes(app);

app.get("*", (req, res) => {
    console.log(req.method);
    res.send("page wasnt found !");
});

app.listen(3000, '', () => {
    console.log('Server Running!!');
});