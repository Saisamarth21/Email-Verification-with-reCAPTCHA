const express = require("express");
const https = require("https");
const bodyParser = require("body-parser");
const app = express();
const path = require("path");

// Middleware to parse JSON bodies
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Serve static files from the public directory
app.use(express.static(path.join(__dirname, "public")));

// API route to verify reCAPTCHA
app.post("/verify-captcha", (req, res) => {
    const userResponse = req.body['g-recaptcha-response'];
    const secretKey = "6Lf32GkqAAAAALyBtB3Rvuoz_CVZIYwzaDZBV8RS";
    
    const verificationUrl = `https://www.google.com/recaptcha/api/siteverify?secret=${secretKey}&response=${userResponse}`;

    https.get(verificationUrl, (response) => {
        let data = "";

        response.on("data", (chunk) => {
            data += chunk;
        });

        response.on("end", () => {
            const result = JSON.parse(data);
            if (result.success) {
                res.send({ success: true });
            } else {
                res.send({ success: false });
            }
        });

    }).on("error", (err) => {
        console.log("Error: " + err.message);
        res.send({ success: false });
    });
});

// API route to fetch user email
app.get("/get-email", (req, res) => {
    const user_json_url = req.query.url;

    https.get(user_json_url, (response) => {
        let data = "";

        response.on("data", (chunk) => {
            data += chunk;
        });

        response.on("end", () => {
            const jsonData = JSON.parse(data);
            const user_email_id = jsonData.user_email_id;
            res.send(`Verified Email: <strong>${user_email_id}</strong>`);
        });

    }).on("error", (err) => {
        console.log("Error: " + err.message);
        res.send("Error fetching email");
    });
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
