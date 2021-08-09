import { createReducer } from '@reduxjs/toolkit';
import createRandomArray from '../../utils/createRandomArray';
import { AppState, generateNewArray, setArray, setIsSorting, setSelectedAlgorithm, setSize, SortingAlgorithmType } from './actions';

const initialState: AppState = {
    array: [],
    selectedAlgorithm: SortingAlgorithmType.BUBLE_SORT,
    size: 50,
    isSorting: false,
};

const reducer = createReducer(initialState, (builder) => {
    builder.addCase(generateNewArray, (draft) => {
        draft.array = createRandomArray(draft.size).map((number, index) => ({
            number,
            isSorted: false,
            isCurrentlySorted: false,
            key: `${index}-${number}`,
        }));
    });

    builder.addCase(setSize, (draft, action) => {
        draft.size = Math.max(action.payload, 5);
    });

    builder.addCase(setSelectedAlgorithm, (draft, action) => {
        draft.selectedAlgorithm = action.payload;
    });

    builder.addCase(setIsSorting, (draft, action) => {
        draft.isSorting = action.payload;
    });

    builder.addCase(setArray, (draft, action) => {
        draft.array = action.payload;
    });
});

export default reducer;