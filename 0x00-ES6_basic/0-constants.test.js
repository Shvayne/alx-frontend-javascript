import { taskFirst, taskNext } from "./0-constants";

describe('Test task functions', () => {
    test('taskFirst returns correct string', () => {
        expect (taskFirst()).toBe('I prefer const when I can.');
    });

    test('TaskNext returns correct combination', () => {
        expect(taskNext()).toBe('But sometimes let is okay');
    });
});