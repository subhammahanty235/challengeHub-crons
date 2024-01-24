require('dotenv').config();
const cron = require("node-cron");
const express = require("express");
const axios = require('axios')
const nodemailer = require('nodemailer')

app = express(); // Initializing app 


const client = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: "chbspprt@gmail.com",
        pass: "ofkbghmkrajftdby"
    }
});



// Creating a cron job which runs on every 10 second 
cron.schedule("*/15 * * * *", async function () {

    // const data = await axios.get('http://localhost:5000/api/admin/inactive');
    client.sendMail(
        {
            from: "chbspprt@gmail.com",
            to: ["subhammahanty235@gmail.com"],
            subject: `Testing minute mail`,
            html: `
            <div style="border: 1px solid #999; padding: 20px; border-radius: 8px; background: linear-gradient(to right, #4a4a4a, #242424); text-align: center; color: #fff; font-family: 'Arial', sans-serif;">
            Running every 30 minute
             </div>
            `

        }, (err, data) => {
            if (err) {
                console.log("Error" + err)
            } else {
                res.send("Email sent")
            }
        }
    )
    console.log("minute");
});


cron.schedule('30 18 * * *', async () => {   //UTC time (IST: 00:00 am)
    // Your code to be executed goes here
    client.sendMail(
        {
            from: "chbspprt@gmail.com",
            to: ["subhammahanty235@gmail.com"],
            subject: `Testing midnight mail`,
            html: `
            <div style="border: 1px solid #999; padding: 20px; border-radius: 8px; background: linear-gradient(to right, #4a4a4a, #242424); text-align: center; color: #fff; font-family: 'Arial', sans-serif;">
            Running every midnight
             </div>
            `

        }, (err, data) => {
            if (err) {
                console.log("Error" + err)
            } else {
                res.send("Email sent")
            }
        }
    )
    console.log('Cron job executed at around 00:00 AM');
});

cron.schedule('00 12 * * *', () => {      //for users who have taken a challenge but not participating
    client.sendMail(
        {
            from: "chbspprt@gmail.com",
            to: ["subhammahanty235@gmail.com"],
            subject: `Testing day mail`,
            html: `
            <div style="border: 1px solid #999; padding: 20px; border-radius: 8px; background: linear-gradient(to right, #4a4a4a, #242424); text-align: center; color: #fff; font-family: 'Arial', sans-serif;">
            Running every day
             </div>
            `

        }, (err, data) => {
            if (err) {
                console.log("Error" + err)
            } else {
                res.send("Email sent")
            }
        }
    )
    console.log('cron job executed at 5:30 PM')
})

const port = process.env.PORT || 3000
app.listen(port, () => {
    console.log("server started" + port)
}); 