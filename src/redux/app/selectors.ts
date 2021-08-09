import { RootState } from '../store';
import { SortingAlgorithmType, Values } from './actions';

export const getArray = (state: RootState): Array<Values> => state.app.array;
export const getSize = (state: RootState): number => state.app.size;
export const getSelectedAlgorithm = (state: RootState): SortingAlgorithmType => state.app.selectedAlgorithm;
export const getIsSorting = (state: RootState): boolean => state.app.isSorting;
