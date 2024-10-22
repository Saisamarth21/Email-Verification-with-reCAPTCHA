const express = require("express");
const https = require("https");
const app = express();
const path = require("path");

// Serve static files from the public directory
app.use(express.static(path.join(__dirname, "public")));

// API route to fetch user email
app.get("/get-email", (req, res) => {
    const user_json_url = req.query.url;

    https.get(user_json_url, (response) => {
        let data = "";

        // Receive chunks of data
        response.on("data", (chunk) => {
            data += chunk;
        });

        // Once all data is received
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
