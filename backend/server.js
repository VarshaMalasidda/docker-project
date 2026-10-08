const express = require("express");
const { MongoClient } = require("mongodb");

const app = express();

app.use(express.json());

const mongoUrl = process.env.MONGO_URL || "mongodb://mongodb:27017";
const client = new MongoClient(mongoUrl);

let tasksCollection;

async function start() {
    await client.connect();

    const db = client.db("taskdb");
    tasksCollection = db.collection("tasks");

    console.log("Connected to MongoDB");

    app.get("/tasks", async (req, res) => {
        const tasks = await tasksCollection.find().toArray();
        res.json(tasks);
    });

    app.post("/tasks", async (req, res) => {
        const task = {
            name: req.body.name
        };

        await tasksCollection.insertOne(task);

        res.json({
            message: "Task added",
            task
        });
    });

    app.listen(3000, "0.0.0.0", () => {
        console.log("API running on port 3000");
    });
}

start();