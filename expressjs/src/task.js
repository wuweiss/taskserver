"use strict";

const R = require("ramda");

const taskStore = {
    tasks: {},
    size: 0,
};

const getAllTasks = () => R.compose(
    R.values,
    R.prop("tasks"),
)(taskStore);

function addTask({ name, tags, text }) {
    const id = taskStore.size;
    taskStore.size += 1;
    taskStore.tasks[id] = {
        id, name, tags, text,
    };

    return id;
}

const getTaskById = (id) => R.compose(
    R.prop(id),
    R.pick(id),
    R.prop("tasks"),
)(taskStore);

function deleteAllTask() {
    taskStore.tasks = {};
    taskStore.size = 0;
    return true;
}

function deleteTask(id) {
    const filterId = (taskId, task) => taskId !== `${task.id}`;

    taskStore.tasks = R.compose(
        R.values,
        R.filter(R.partial(filterId, id)),
        R.prop("tasks"),
    )(taskStore);
    return taskStore.tasks;
}

const filterTasks = (f) => R.compose(
    R.values,
    R.filter(f),
    R.prop("tasks"),
)(taskStore);

const findTag = (tag, task) => R.compose(
    R.includes(tag),
    R.prop("tags"),
)(task);

const getTasksByTag = (tag) => {
    const res = filterTasks(findTag.bind(null, tag));
    return res;
};

exports.getAllTasks = getAllTasks;
exports.addTask = addTask;
exports.getTaskById = getTaskById;
exports.deleteTask = deleteTask;
exports.deleteAllTask = deleteAllTask;
exports.getTasksByTag = getTasksByTag;
