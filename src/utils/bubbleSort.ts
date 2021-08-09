/* eslint-disable no-await-in-loop */
import { Values } from '../redux/app/actions';

const bubbleSort = async (arr: Array<Values>, update: (newValues: Array<Values>) => void): Promise<boolean> => {
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            arr[i].isCurrentlySorted = true;
            arr[j].isCurrentlySorted = true;
            if (arr[i].number > arr[j].number) {
                const temp = arr[j];
                arr[j] = {
                    ...arr[i],
                    isCurrentlySorted: true,
                };
                arr[i] = {
                    ...temp,
                    isCurrentlySorted: true,
                };
                update(arr);
                await new Promise(resolve => setTimeout(resolve, 1));
            }
            arr[j].isCurrentlySorted = false;
        }
        arr[i].isSorted = true;
        arr[i].isCurrentlySorted = false;
        update(arr);
        await new Promise(resolve => setTimeout(resolve, 1));
    }
    return true;
};

export default bubbleSort;
