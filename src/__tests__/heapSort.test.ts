import heapSort from '../utils/heapSort';
import { emptyTestData, randomTestData, randomTestDataResult, sortedTestData } from './testData';

test('random array', async () => {
    expect(await heapSort(randomTestData, () => null)).toEqual(randomTestDataResult);
});

test('empty array', async () => {
    expect(await heapSort(emptyTestData, () => null)).toEqual(emptyTestData);
});

test('sorted array', async () => {
    expect(await heapSort(sortedTestData, () => null)).toEqual(sortedTestData);
});
