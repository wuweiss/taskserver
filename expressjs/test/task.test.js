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
});
