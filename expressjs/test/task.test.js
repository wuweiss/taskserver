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
    },
    {
        name: "myTask 2",
        tags: [
            "tag1.2",
            "tag2.2",
        ],
        text: "my super text 2",
    }];

const outputData = [
    {
        id: 0,
        name: "myTask 1",
        tags: [
            "tag1.1",
            "tag2.1",
        ],
        text: "my super text 1",
    }, {
        id: 1,
        name: "myTask 2",
        tags: [
            "tag1.2",
            "tag2.2",
        ],
        text: "my super text 2",
    },
];

test("this test should return an empty list of tasks", () => {
    const expectedResult = [];
    expect(T.getAllTasks()).toEqual(expectedResult);
});

test("this test should add two tasks to the list", () => {
    const expectedResults = [0, 1];

    expect(T.addTask(inputData[0])).toBe(expectedResults[0]);
    expect(T.addTask(inputData[1])).toBe(expectedResults[1]);
});

test("this test should return two tasks as a list", () => {
    expect(T.getAllTasks()).toEqual(outputData);
});

test("this test gets tasks by a tag", () => {
    const inputData = "tag1.1";
    const expectedResult = [outputData[0]];
    expect(T.getTasksByTag(inputData)).toEqual(expectedResult);
});


test("this test gets an empty result for unknown tag", () => {
    const inputData = "unknown tag";
    const expectedResult = [];
    expect(T.getTasksByTag(inputData)).toEqual(expectedResult);
});


test("this test deleltes a tasks by id", () => {
    const inputData = "1";
    const expectedResult = [outputData[0]];
    expect(T.deleteTask(inputData)).toEqual(expectedResult);
});
