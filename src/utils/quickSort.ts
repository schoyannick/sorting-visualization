/* eslint-disable no-await-in-loop */
import { Values } from '../redux/app/actions';

const TIME_OUT = 20;

const partition = async (arr: Array<Values>, update: (newValues: Array<Values>) => void, left: number, right: number): Promise<number> => {
    const pivot = arr[right].number;

    let i = left;
    let j = right;

    while (i < j) {
        while (arr[i].number < pivot && i < right) {
            i++;
        }

        while (arr[j].number >= pivot && j > left) {
            j--;
        }

        if (i < j) {
            const temp = arr[j];
            arr[j] = arr[i];
            arr[i] = temp;
            arr[i] = {
                ...arr[i],
                isCurrentlySorted: true,
            };
            arr[j] = {
                ...arr[j],
                isCurrentlySorted: true,
            };
        }
        update(arr);
        await new Promise(resolve => setTimeout(resolve, TIME_OUT));

        arr[i] = {
            ...arr[i],
            isCurrentlySorted: false,
        };
        arr[j] = {
            ...arr[j],
            isCurrentlySorted: false,
        };
        update(arr);
        await new Promise(resolve => setTimeout(resolve, TIME_OUT));
    }

    if (arr[i].number > pivot) {
        const temp = arr[right];
        arr[right] = arr[i];
        arr[i] = temp;
    }
    arr[i] = {
        ...arr[i],
        isSorted: true,
    };
    update(arr);
    await new Promise(resolve => setTimeout(resolve, TIME_OUT));
    return i;
};

const quickSort = async (arr: Array<Values>, update: (newValues: Array<Values>) => void, left = 0, right = arr.length - 1): Promise<boolean> => {
    if (left <= right) {
        const divider = await partition(arr, update, left, right);
        quickSort(arr, update, left, divider - 1);
        quickSort(arr, update, divider + 1, right);
    }
    return true;
};

export default quickSort;
