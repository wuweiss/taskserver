'use strict';

const { getAllTasks } = require('../src/task');

test('this test should return a list of tasks', () => {
    const expectedResult = {
        tasks: [],
    };
    expect(getAllTasks()).toEqual(expectedResult);
});
