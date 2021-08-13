import bubbleSort from '../utils/bubbleSort';
import { emptyTestData, randomTestData, randomTestDataResult, sortedTestData } from './testData';

test('random array', async () => {
    expect(await bubbleSort(randomTestData, () => null)).toEqual(randomTestDataResult);
});

test('empty array', async () => {
    expect(await bubbleSort(emptyTestData, () => null)).toEqual(emptyTestData);
});

test('sorted array', async () => {
    expect(await bubbleSort(sortedTestData, () => null)).toEqual(sortedTestData);
});
