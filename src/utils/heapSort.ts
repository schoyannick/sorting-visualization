/* eslint-disable no-await-in-loop */
import { Values } from '../redux/app/actions';

const TIME_OUT = 20;

const swap = (arr: Array<Values>, i: number, j: number): void => {
    const temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
};

const heapSort = async (arr: Array<Values>, update: (newValues: Array<Values>) => void): Promise<Array<Values>> => {
    const size = arr.length;

    for (let i = Math.floor(size / 2 - 1); i >= 0; i--) {
        await heapify(arr, size, i, update);
        update(arr);
        await new Promise(resolve => setTimeout(resolve, TIME_OUT));
    }

    for (let i = size - 1; i >= 0; i--) {
        swap(arr, 0, i);
        arr[i] = {
            ...arr[i],
            isSorted: true,
        };
        update(arr);
        await new Promise(resolve => setTimeout(resolve, TIME_OUT));
        await heapify(arr, i, 0, update);
    }

    return arr;
};

const heapify = async (arr: Array<Values>, size: number, i: number, update: (newValues: Array<Values>) => void): Promise<void> => {
    let max = i;
    const left = 2 * i + 1;
    const right = 2 * i + 2;

    if (left < size && arr[left].number > arr[max].number) {
        max = left;
    }

    if (right < size && arr[right].number > arr[max].number) {
        max = right;
    }

    if (max !== i) {
        swap(arr, i, max);
        arr[i] = {
            ...arr[i],
            isCurrentlySorted: true,
        };
        arr[max] = {
            ...arr[max],
            isCurrentlySorted: true,
        };
        update(arr);
        await new Promise(resolve => setTimeout(resolve, TIME_OUT));
        arr[i] = {
            ...arr[i],
            isCurrentlySorted: false,
        };
        arr[max] = {
            ...arr[max],
            isCurrentlySorted: false,
        };
        await heapify(arr, size, max, update);
    }
};

export default heapSort;
