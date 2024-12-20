const express = require("express");
require("dotenv").config();

const PORT = process.env.PORT || 3000;

const app = express();

// Routes
app.get("/", (req, res) => {
    // console.log(`HTTP Request Headers:
    //     ${JSON.stringify(req.headers, null, 4)}`);
    res.setHeader("Content-Type", "application/json");
    res.send(`${JSON.stringify(req.headers)}`);
});

app.listen(PORT, "0.0.0.0", () => {
    console.log(`APPLICATION SERVER is listening on PORT ${PORT}`);
});
