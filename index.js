const express = require("express");
const app = express();
const port = 5000;
const fs = require("fs")

// app.get("/",(req,res) => { 
//     fs.readFile("./Home.html","utf8",(error,data) => { 
//         error?console.log(error):res.send(data);
//      })
//  })

//  app.get("/contact",(req,res) => { 
//     fs.readFile("./Contact.html","utf8",(error,data) => { 
//         error?console.log(error):res.send(data);
//      })
//  })
const mid = (req,res,next) => {
    let date = new Date()
    let hour = date.getHours()
    let day = date.getDay()
    console.log(day);
    if((day==5 || day==6) || (hour<9 || hour>17) )
        {return res.send("ارجع غدوا")}
    
    return  next();
}

// const path = require('path');


// app.use(mid)
// app.use("/files",express.static(path.join(__dirname, 'public')))

app.set('view engine', 'ejs');

app.get('/', (req, res)=>{
 
    // The render method takes the name of the html
    // page to be rendered as input.
    // This page should be in views folder
    // in the root directory.
    var data = {name:'Akashdeep',
        hobbies:['playing football', 'playing chess', 'cycling']}
     
    res.render('Home', {data:data});
    });




app.listen(port,(err) => { err?console.log(err): console.log("server is running"); })