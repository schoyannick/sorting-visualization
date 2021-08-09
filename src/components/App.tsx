import cloneDeep from 'lodash.clonedeep';
import React, { useEffect , useRef } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { generateNewArray, setArray, setIsSorting, SortingAlgorithmType, Values } from '../redux/app/actions';
import { getArray, getIsSorting, getSelectedAlgorithm, getSize } from '../redux/app/selectors';
import bubbleSort from '../utils/bubbleSort';

import { GlobalStyles } from '../utils/globalStyles';
import Header from './header/Header';
import { StyledApp } from './StyledApp';
import Visualization from './visualization/Visualization';

const App: React.FC = () => {
    const dispatch = useDispatch();

    const size = useSelector(getSize);
    const isSorting = useSelector(getIsSorting);
    const sortInterval = useRef(null);
    const selectedAlgorithm = useSelector(getSelectedAlgorithm);
    const array = useSelector(getArray);
    
    useEffect(() => {
        dispatch(generateNewArray());
    }, [dispatch, size]);

    const updateArray = (newValues: Array<Values>) => {
        dispatch(setArray(cloneDeep(newValues)));
    };
 
    useEffect(() => {
        const handleSort = async () => {
            switch (selectedAlgorithm) {
            case SortingAlgorithmType.BUBLE_SORT:
                await bubbleSort(cloneDeep(array), updateArray);
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
