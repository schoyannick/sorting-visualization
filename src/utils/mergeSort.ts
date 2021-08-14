import { Values } from '../redux/app/actions';

const TIME_OUT = 25;

const merge = async (arr: Array<Values>, update: (newValues: Array<Values>) => void, start: number, mid: number, end: number): Promise<void> => {
    let start2 = mid + 1;

    const isLastMerge = start === 0 && end === arr.length - 1;

    while (start <= mid && start2 <= end) {
        if (isLastMerge) {
            for (let i = 0; i <= start + 4 && i < arr.length; i++) {
                if (!arr[i].isSorted) {
                    arr[i] = {
                        ...arr[i],
                        isSorted: true,
                    };
                    update(arr);
                    await new Promise(resolve => setTimeout(resolve, TIME_OUT));
                }
            }
        }

        if (arr[start].number <= arr[start2].number) {
            if (isLastMerge) {
                if (!arr[start].isSorted) {
                    arr[start] = {
                        ...arr[start],
                        isSorted: true,
                    };
                    update(arr);
                    await new Promise(resolve => setTimeout(resolve, TIME_OUT));
                }
            }
            start++;
        } else {
            const value = arr[start2];
            let index = start2;

            while (index !== start) {
                if (!arr[index].isSorted) {
                    arr[index] = {
                        ...arr[index],
                        isCurrentlySorted: true,
                    };
                }

                if (!arr[index - 1].isSorted) {
                    arr[index - 1] = {
                        ...arr[index - 1],
                        isCurrentlySorted: true,
                    };
                }
                arr[index] = arr[index - 1];
                index--;
            }

            arr[start] = value;
            update(arr);
            await new Promise(resolve => setTimeout(resolve, TIME_OUT));

            for (let i = 0; i < arr.length; i++) {
                if (arr[i].isCurrentlySorted) {
                    arr[i] = {
                        ...arr[i],
                        isCurrentlySorted: false,
                    };
                }
            }
            update(arr);
            await new Promise(resolve => setTimeout(resolve, TIME_OUT));
            start++;
            mid++;
            start2++;
        }
    }
};

const mergeSort = async (arr: Array<Values>, update: (newValues: Array<Values>) => void, start = 0, end: number = arr.length - 1): Promise<Array<Values>> => {
    if (start < end) {
        const mid = start + Math.floor((end - start) / 2);

        await mergeSort(arr, update, start, mid);
        await mergeSort(arr, update, mid + 1, end);
        await merge(arr, update, start, mid, end);
    }

    return arr;
};

export default mergeSort;
