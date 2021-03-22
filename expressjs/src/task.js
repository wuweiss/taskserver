"use strict";

const R = require("ramda");

const taskStore = {
    tasks: {},
    size: 0,
};

function getAllTasks() {
    return R.compose(
        R.values,
        R.prop("tasks"),
    )(taskStore);
}

function deleteAllTasks() {
    return {};
}

function addTask({ name, tags, text }) {
    const id = taskStore.size;
    taskStore.size += 1;
    taskStore.tasks[id] = {
        id, name, tags, text,
    };

    return id;
}

function getTaskById(id) {
    return R.compose(
        R.prop(id),
        R.pick(id),
        R.prop("tasks"),
    )(taskStore);
}

function deleteTask(id) {
    taskStore.tasks = R.compose(
        R.values,
        R.dissoc(id),
        R.prop("tasks"),
    )(taskStore);
    return taskStore.tasks;
}


function filterTasks(f) {
    return R.compose(
        R.values,
        R.filter(f),
        R.prop("tasks"),
    )(taskStore);
}

function findTag(tag, task) {
    return R.compose(
        R.includes(tag),
        R.prop("tags"),
    )(task);
}

function getTasksByTag(tag) {
    const res = filterTasks(findTag.bind(null, tag));
    return res;
}

exports.getAllTasks = getAllTasks;
exports.deleteAllTasks = deleteAllTasks;
exports.addTask = addTask;
exports.getTaskById = getTaskById;
exports.deleteTask = deleteTask;
exports.getTasksByTag = getTasksByTag;
