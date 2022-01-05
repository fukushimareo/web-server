const express = require('express');
const path = require("path");
const app = express();

app.use(express.urlencoded({ extended: false}));
app.use(express.static(path.join(__dirname, "public")));

// app.get("/", function (req, res){
//     console.log(req);
//     res.send();
// });

// app.get("/about", function (req, res){
//     res.send("アバウトページ");
// });

app.post("/api/v1/quize", function (req, res) {
    const answer = req.body.answer;
    if(answer ==="2") {
        //res.send("<h1>正解</h1>");
        res.redirect("/correct.html");
    }else {
        //res.send("<h1>不正解</h1>");
        res.redirect("/wrong.html");
    }

});
const PORT = process.env.PORT || 3000;//herokuを使うときはheroku指定のポート番号、ローカルでは3000
app.listen(PORT,function(){
    console.log("running");
});