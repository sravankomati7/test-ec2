const express = require("express");

const app = express();

app.get("/", (req, res) => {
    res.send("Hello! My Node.js app is running on EC2!");
});

app.get("/about", (req, res) => {
    res.send("This is my about page");
});

app.get("/api/users", (req, res) => {
    res.json({
        success: true,
        message: "Users API working successfully",
        users: [
            { id: 1, name: "Rahul" },
            { id: 2, name: "Amit" }
        ]
    });
});
app.listen(4001, () => {
    console.log("Server running on port 4001");
});