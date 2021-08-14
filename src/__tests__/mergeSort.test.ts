import mergeSort from '../utils/mergeSort';
import { emptyTestData, randomTestData, randomTestDataResult, sortedTestData } from './testData';

test('random array', async () => {
    expect(await mergeSort(randomTestData, () => null)).toEqual(randomTestDataResult);
});

test('empty array', async () => {
    expect(await mergeSort(emptyTestData, () => null)).toEqual(emptyTestData);
});

test('sorted array', async () => {
    expect(await mergeSort(sortedTestData, () => null)).toEqual(sortedTestData);
});
