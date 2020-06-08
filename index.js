const express = require("express");
const port = 8000;

const expressLayouts = require("express-ejs-layouts");
const app = express();



// Static files
app.use(express.static("./assets"));


// extract style and scripts into sub pages
app.set("layout extractStyles", true);
app.set("layout extractScripts", true);

// use layouts
app.use(expressLayouts);


// routing
app.use("/", require("./routes"));

// set up ejs
app.set("view engine", "ejs");
app.set("views", "./views")




app.listen(port, function (err) {
    if (err) {
        console.log(`Error :: ${err}`);
    }
    else {
        console.log(`Server running on port :: ${port}`);
    }
});