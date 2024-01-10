const cron = require("node-cron"); 
const express = require("express"); 


app = express(); // Initializing app 
  
// Creating a cron job which runs on every 10 second 
cron.schedule("* * * * *", function() { 
    console.log("running a task every hour"); 
}); 
cron.schedule('30 18 * * *', async() => {   //UTC time (IST: 00:00 am)
    // Your code to be executed goes here
    
    console.log('Cron job executed at around 00:00 AM');
  });

cron.schedule('30 12 * * *' ,()=>{    

    console.log('cron job executed at 5:30 PM')
})
  
app.listen(3000); 