const axios = require("axios").default;
const fs = require("fs");
const https = require("https");
const qs = require("qs");

require("dotenv").config();

const httpsAgent = new https.Agent({
  key: fs.readFileSync(process.env.CLIENT_KEY),
  cert: fs.readFileSync(process.env.CLIENT_CERT),
});

const config = { httpsAgent };

const dataCred = {
  grant_type: "client_credentials",
  client_id: process.env.CLIENT_ID,
  client_secret: process.env.CLIENT_SECRET,
};

axios
  .post(process.env.OAUTH_URL, qs.stringify(dataCred), config)
  .then(function (response) {
    console.log("Response returned: ");
    console.log(response);
  })
  .catch(function (error) {
    console.log("ERROR: ");
    console.log(error);
  });
