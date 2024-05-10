 Connection to database from freecodecamp Course developed by @CodingCleverly  
 CRUD API Tutorial – Node, Express, MongoDB
 https://www.youtube.com/watch?v=_7UQPve99r4

     #######
     Before running view the video for pre requirement.
     Remember to run "npm install" at project folder to download the node_modules required in the package.json then run "npm run dev".

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

  
