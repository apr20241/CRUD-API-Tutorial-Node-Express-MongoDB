const express = require("express");
const mongoose = require("mongoose");
const Product = require("./models/product.model.js");
const productRoute = require("./routes/product.route.js");
const app = express();

// middleware
app.use(express.json());
app.use(express.urlencoded({extended: false}));


// routes
app.use("/api/products", productRoute);




app.get("/", (req, res) => {
  res.send("Hello from Node API Server Updated");
});


mongoose
  .connect(
    
    // Connection to database from freecodecamp Course developed by @CodingCleverly  
    // CRUD API Tutorial – Node, Express, MongoDB
    // https://www.youtube.com/watch?v=_7UQPve99r4
    //"mongodb+srv://haris2iftikhar:GClTzr15XhkjvN6k@backenddb.nrurtot.mongodb.net/Node-API?retryWrites=true&w=majority"
       
    "mongodb+srv://tempuser199:HFyHD1ttfIo1WJwl@nodebackend.qpl5rgj.mongodb.net/Node-API?retryWrites=true&w=majority"
       
  )
  .then(() => {
    console.log("Connected to database!");
    app.listen(3000, () => {
      console.log("Server is running on port 3000");
      console.log(`

      // Connection to database from freecodecamp Course developed by @CodingCleverly  
      // CRUD API Tutorial – Node, Express, MongoDB
      // https://www.youtube.com/watch?v=_7UQPve99r4

      ######      Using power shell curl      ########
      ###   get all items example     ###
      curl -Method get -Uri http://localhost:3000/api/products
      
      ###   get item chips by id 663d5ecce2fd920488f383a6 example ###
      curl -Method get -Uri http://localhost:3000/api/products/663d5ecce2fd920488f383a6
      
      ###   update all item hotdog by id 663d5ee0e2fd920488f383aa as it is good example ###
      curl -Method put -Uri http://localhost:3000/api/products/'663d537ed77d0d2e7be85859' -ContentType 'application/json' -Body '{"quantity":3}'
      
      ###   delete item eggs by id 663d6175e2fd920488f383c9 as there were too many example ###
      curl -Method delete -Uri http://localhost:3000/api/products/663d6175e2fd920488f383c9
      
      ###   insert more eggs so we have one more example ###
      curl -Method POST -Uri http://localhost:3000/api/products -ContentType 'application/json' -Body '{"name" : "eggs9", "quantity" : 1, "price" : 8.10 }'

      #### Use your browser http://localhost:3000/api/products to get all items and view changes updated through powershell ####

      #####   Try it out   #####`      
    )

    });
  })
  .catch(() => {
    console.log("Connection failed!");
  });
