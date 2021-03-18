"use strict";

const T = require("../src/task");

const inputData = [
    {
        name: "myTask 2",
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

const outputData = {
    tasks: [
        {
            id: 0,
            name: "myTask 2",
            tags: [
                "tag1.1",
                "tag2.1",
            ],
            text: "my super text 1",
        },
        {
            id: 1,
            name: "myTask 2",
            tags: [
                "tag1.2",
                "tag2.2",
            ],
            text: "my super text 2",
        }],
};

test("this test should return an empty list of tasks", () => {
    const expectedResult = {
        tasks: [],
    };
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
