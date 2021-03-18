"use strict";

const taskStore = {
    tasks: [],
};

function getAllTasks() {
    return taskStore;
}

exports.getAllTasks = getAllTasks;
