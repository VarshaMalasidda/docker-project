const express = require("express");

const app = express();

app.get("/api", (req, res) => {
    res.json({
        message: "Hello from Node.js Docker container!"
    });
});

app.listen(3000, "0.0.0.0", () => {
    console.log("Backend running on port 3000");
});