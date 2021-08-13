import cloneDeep from 'lodash.clonedeep';
import React, { useEffect , useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { generateNewArray, setArray, setIsSorting, SortingAlgorithmType, Values } from '../redux/app/actions';
import { getArray, getIsSorting, getSelectedAlgorithm, getSize } from '../redux/app/selectors';
import bubbleSort from '../utils/bubbleSort';

import { GlobalStyles } from '../utils/globalStyles';
import heapSort from '../utils/heapSort';
import quickSort from '../utils/quickSort';
import Header from './header/Header';
import { StyledApp } from './StyledApp';
import Visualization from './visualization/Visualization';

const App: React.FC = () => {
    const dispatch = useDispatch();

    const size = useSelector(getSize);
    const isSorting = useSelector(getIsSorting);
    const selectedAlgorithm = useSelector(getSelectedAlgorithm);
    const array = useSelector(getArray);

    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        if (mounted) {
            dispatch(generateNewArray());
        } else {
            setMounted(true);
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [size]);

    const updateArray = (newValues: Array<Values>) => {
        dispatch(setArray(cloneDeep(newValues)));
    };

    useEffect(() => {
        const handleSort = async () => {
            const copyArr = cloneDeep(array);
            switch (selectedAlgorithm) {
            case SortingAlgorithmType.BUBLE_SORT:
                await bubbleSort(copyArr, updateArray);
                dispatch(setIsSorting(false));
                break;
            case SortingAlgorithmType.QUICK_SORT:
                await quickSort(copyArr, updateArray);
                dispatch(setIsSorting(false));
                break;
            case SortingAlgorithmType.HEAP_SORT:
                await heapSort(copyArr, updateArray);
                dispatch(setIsSorting(false));
                break;
            default:
                dispatch(setIsSorting(false));
                break;
            }
        };

        if (isSorting) {
            handleSort();
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isSorting]);

    useEffect(() => {
        dispatch(setIsSorting(false));
    }, [dispatch, selectedAlgorithm]);

    useEffect(() => {
        const jssStyles = document.querySelector('#jss-server-side');
        if (jssStyles) {
            jssStyles.parentElement.removeChild(jssStyles);
        }
    }, []);

    return (
        <>
            <GlobalStyles/>
            <StyledApp>
                <Header/>
                <Visualization/>
            </StyledApp>
        </>
    );
};

export default App;
