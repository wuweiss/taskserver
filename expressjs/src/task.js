"use strict";

const R = require("ramda");

const taskStore = {
    tasks: {},
    counter: 0,
};

const getAllTasks = () => R.compose(
    R.values,
    R.prop("tasks"),
)(taskStore);

// month range is 0-11 ¯\_(ツ)_/¯...JS...
const createDate = (due) => new Date(Date.UTC(due.year, due.month - 1, due.day));

const addTask = (task) => {
    const id = taskStore.counter;
    const dueDate = createDate(task.due);

    taskStore.counter += 1;
    taskStore.tasks[id] = {
        id,
        name: task.name,
        tags: task.tags,
        text: task.text,
        due: dueDate,
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
    taskStore.counter = 0;
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

const getTasksByTag = (tag) => filterTasks(findTag.bind(null, tag));

const filterDate = (due, task) => due.getTime() >= task.due.getTime();

const getTasksDue = (due) => filterTasks(filterDate.bind(null, createDate(due)));

exports.getAllTasks = getAllTasks;
exports.addTask = addTask;
exports.getTaskById = getTaskById;
exports.deleteTask = deleteTask;
exports.deleteAllTask = deleteAllTask;
exports.getTasksByTag = getTasksByTag;
exports.getTasksDue = getTasksDue;
