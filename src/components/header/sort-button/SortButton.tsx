import React from 'react';
import { useDispatch } from 'react-redux';
import Button from '@material-ui/core/Button';

import { generateNewArray, setIsSorting } from '../../../redux/app/actions';

const SortButton: React.FC = () => {
    const dispatch = useDispatch();

    return (
        <Button
            variant="outlined"
            color="primary"
            style={{
                textTransform: 'none',
            }}
            onClick={() => {
                dispatch(setIsSorting(true));
            }}
        >
            Sort!
        </Button>
    );
};

export default SortButton;
