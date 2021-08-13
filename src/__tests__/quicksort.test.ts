import quickSort from '../utils/quickSort';
import { emptyTestData, randomTestData, randomTestDataResult, sortedTestData } from './testData';

test('random array', async () => {
    expect(await quickSort(randomTestData, () => null)).toEqual(randomTestDataResult);
});

test('empty array', async () => {
    expect(await quickSort(emptyTestData, () => null)).toEqual(emptyTestData);
});

test('sorted array', async () => {
    expect(await quickSort(sortedTestData, () => null)).toEqual(sortedTestData);
});
