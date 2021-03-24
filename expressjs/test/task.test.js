"use strict";

const T = require("../src/task");

const inputData = [
    {
        name: "myTask 1",
        tags: [
            "tag1.1",
            "tag2.1",
        ],
        text: "my super text 1",
        due: {
            year: 2021,
            month: 4,
            day: 3,
        },
    },
    {
        name: "myTask 2",
        tags: [
            "tag1.2",
            "tag2.2",
        ],
        text: "my super text 2",
        due: {
            year: 2021,
            month: 4,
            day: 4,
        },
    },
    {
        name: "myTask 3",
        tags: [
            "tag1.3",
            "tag2.3",
        ],
        text: "my super text 3",
        due: {
            year: 2021,
            month: 4,
            day: 5,
        },
    },
];

// month range is 0-11 ¯\_(ツ)_/¯...JS...
const due = [
    new Date(Date.UTC(2021, 3, 3)),
    new Date(Date.UTC(2021, 3, 4)),
    new Date(Date.UTC(2021, 3, 5)),
];

const outputData = [
    {
        id: 0,
        name: "myTask 1",
        tags: [
            "tag1.1",
            "tag2.1",
        ],
        text: "my super text 1",
        due: due[0],
    }, {
        id: 1,
        name: "myTask 2",
        tags: [
            "tag1.2",
            "tag2.2",
        ],
        text: "my super text 2",
        due: due[1],
    }, {
        id: 2,
        name: "myTask 3",
        tags: [
            "tag1.3",
            "tag2.3",
        ],
        text: "my super text 3",
        due: due[2],
    },
];

test("should return an empty list of tasks", () => {
    const expectedResult = [];
    expect(T.getAllTasks()).toEqual(expectedResult);
});

test("should add three tasks to the list", () => {
    const expectedResults = [0, 1, 2];

    expect(T.addTask(inputData[0])).toBe(expectedResults[0]);
    expect(T.addTask(inputData[1])).toBe(expectedResults[1]);
    expect(T.addTask(inputData[2])).toEqual(expectedResults[2]);
});

test("should return all tasks as a list", () => {
    expect(T.getAllTasks()).toEqual(outputData);
});

test("should get tasks by a tag", () => {
    const tag = "tag1.1";
    const expectedResult = [outputData[0]];
    expect(T.getTasksByTag(tag)).toEqual(expectedResult);
});

test("should get an empty result for unknown tag", () => {
    const tag = "unknown tag";
    const expectedResult = [];
    expect(T.getTasksByTag(tag)).toEqual(expectedResult);
});

test("should return a task by id", () => {
    const id = "1";
    expect(T.getTaskById(id)).toEqual(outputData[1]);
});

test("should return tasks due a date", () => {
    const myDate = {
        year: 2021,
        month: 4,
        day: 4,
    };
    const expectedResult = [outputData[0], outputData[1]];
    expect(T.getTasksDue(myDate)).toEqual(expectedResult);
});

test("should delete a task by id", () => {
    const id = "1";
    const expectedResult = [outputData[0], outputData[2]];
    expect(T.deleteTask(id)).toEqual(expectedResult);
});

test("should delete all tasks in store", () => {
    const expectedResult = true;
    expect(T.deleteAllTask()).toBe(expectedResult);
});
