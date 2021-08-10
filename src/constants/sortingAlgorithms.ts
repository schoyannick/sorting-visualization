import { SortingAlgorithmType } from '../redux/app/actions';

export const SORTING_ALGORITHMS = [{
    type: SortingAlgorithmType.BUBLE_SORT,
    text: 'Bubble Sort',
}, {
    type: SortingAlgorithmType.QUICK_SORT,
    text: 'Quick Sort',
}, {
    type: SortingAlgorithmType.HEAP_SORT,
    text: 'Heap Sort',
}, {
    type: SortingAlgorithmType.MERGE_SORT,
    text: 'Merge Sort',
}];

