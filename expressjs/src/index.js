"use strict";

const express = require("express");
const Ajv = require("ajv").default;
const T = require("./task");

const ajv = new Ajv();
const app = express();
const port = 8000;

const taskSchema = {
    type: "object",
    properties: {
        name: {
            type: "string",
        },
        tags: {
            type: "array",
            items: {
                type: "string",
            },
        },
        text: {
            type: "string",
        },
    },
    required: ["name", "tags", "text"],
    additionalProperties: false,
};
const validate = ajv.compile(taskSchema);

app.listen(port);
app.use(express.json());

app.get("/task/", (req, res) => {
    res.json({ tasks: T.getAllTasks() });
});

app.post("/task/", (req, res) => {
    const valid = validate(req.body);
    if (!valid) {
        res.sendStatus(400);
    } else {
        res.json({
            taskId: T.addTask({ ...req.body }),
        });
    }
});

app.get("/task/:id", (req, res) => {
    const task = T.getTaskById(`${req.params.id}`);
    res.json(task);
});

app.delete("/task/:id", (req, res) => {
    const result = T.deleteTask(`${req.params.id}`);
    res.json(result);
});

app.get("/tag/:tag", (req, res) => {
    const tasks = T.getTasksByTag(req.params.tag);
    res.json({ tasks });
});
