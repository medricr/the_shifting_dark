const express = require("express");
const serveStatic = require("serve-static");
const path = require("path");
const app = express();
const PORT = process.env.PORT || 3030;

app.use('/', serveStatic(path.join(__dirname, '/dist')));
app.get(('/.*/', function(req,res){
    res.sendFile(path.join(__dirname, '/dist/index.html'))
}));

app.listen(PORT, ()=> {
    console.log(`App listening on port => ${PORT} 👀`)
})