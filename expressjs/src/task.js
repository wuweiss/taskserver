"use strict";

const taskStore = {
    tasks: [],
};

function getAllTasks() {
    return taskStore;
}

function addTask({ name, tags, text }) {
    const id = taskStore.tasks.length;
    taskStore.tasks.push({
        id,
        name,
        tags,
        text,
    });

    return id;
}

exports.getAllTasks = getAllTasks;
exports.addTask = addTask;
