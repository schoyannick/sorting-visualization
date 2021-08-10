import { createAction } from '@reduxjs/toolkit';
import { GENERATE_NEW_ARRAY, SET_IS_SORTING, SET_SELECTED_ALGORITHM, SET_SIZE, UPDATE_ARRAY } from './types';

export enum SortingAlgorithmType {
    BUBLE_SORT = 0,
    QUICK_SORT = 1,
    HEAP_SORT = 2,
    MERGE_SORT = 3,
}

export type Values = {
    number: number,
    isSorted: boolean,
    isCurrentlySorted: boolean,
    key: string,
};

export type AppState = {
    array: Array<Values>,
    selectedAlgorithm: SortingAlgorithmType,
    size: number,
    isSorting: boolean,
};

export const generateNewArray = createAction<number>(GENERATE_NEW_ARRAY);
export const setSize = createAction<number>(SET_SIZE);
export const setSelectedAlgorithm = createAction<SortingAlgorithmType>(SET_SELECTED_ALGORITHM);
export const setIsSorting = createAction<boolean>(SET_IS_SORTING);
export const setArray = createAction<Array<Values>>(UPDATE_ARRAY);
