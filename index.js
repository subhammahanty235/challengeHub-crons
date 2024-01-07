const cron = require("node-cron"); 
const express = require("express"); 
  
app = express(); // Initializing app 
  
// Creating a cron job which runs on every 10 second 
// cron.schedule("*/60 * * * * *", function() { 
//     console.log("running a task every 10 second"); 
// }); 
cron.schedule('10 3 * * *', () => {
    // Your code to be executed goes here
    console.log('Cron job executed at around 12:30 AM');
  });
  
app.listen(3000); 