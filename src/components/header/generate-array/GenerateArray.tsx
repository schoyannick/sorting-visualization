import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Button from '@material-ui/core/Button';

import { generateNewArray } from '../../../redux/app/actions';
import { getIsSorting } from '../../../redux/app/selectors';

const GenerateArray: React.FC = () => {
    const dispatch = useDispatch();
    const isSorting = useSelector(getIsSorting);

    return (
        <Button
            variant="outlined"
            color="primary"
            style={{
                textTransform: 'none',
            }}
            onClick={() => {
                dispatch(generateNewArray(50));
            }}
            disabled={isSorting}
        >
            New Array
        </Button>
    );
};

export default GenerateArray;
