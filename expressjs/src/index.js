"use strict";

const express = require("express");
const Ajv = require("ajv").default;
const { getAllTasks, addTask } = require("./task");

const ajv = new Ajv();
const app = express();
const port = 5003;

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
    res.json(getAllTasks());
});

app.post("/task/", (req, res) => {
    const valid = validate(req.body);
    if (!valid) {
        res.sendStatus(400);
    } else {
        res.json({ taskId: addTask({ ...req.body }) });
    }
});
