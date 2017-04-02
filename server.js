var express = require("express");        // (1)
var app = express();

app.use(express.static("client"));       // (2)

console.log("start listening at 8000");
app.listen(8000);                        // (3)
