const express = require("express");
const app = express();
const dotenv = require("dotenv");
const cron = require("node-cron");
const dbConnection = require("./utils/db");
const { sendDetailsProspectEmail } = require("./EmailServices/sendDetailsProspect");
const { sendEligibilityEmail } = require("./EmailServices/sendEligibiltyEmail");
const { sendBloodDonationRemainder } = require("./EmailServices/sendBloodDonationremainder");
const { sendDonorDetailsEmail } = require("./EmailServices/sendDonorDetailsEmail");
dotenv.config();

//server
const PORT = process.env.PORT;

//schedule tasks
const run = ()=>{
    cron.schedule('* * * * * *', () => {
        sendDetailsProspectEmail();
        sendEligibilityEmail();
        sendBloodDonationRemainder();
        sendDonorDetailsEmail();
    });
}
run();

app.listen(PORT, () => {
  console.log(`Background Services running on port ${PORT}`);
  dbConnection();
});
