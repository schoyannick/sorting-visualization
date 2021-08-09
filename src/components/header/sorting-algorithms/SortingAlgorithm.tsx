import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ToggleButton from '@material-ui/lab/ToggleButton';
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup';
import { makeStyles } from '@material-ui/core';
import { SORTING_ALGORITHMS } from '../../../constants/sortingAlgorithms';

import { setSelectedAlgorithm, SortingAlgorithmType } from '../../../redux/app/actions';
import { getIsSorting, getSelectedAlgorithm } from '../../../redux/app/selectors';

const useStyles = makeStyles((theme) => ({
    root: () => ({
        color: theme.palette.primary.main,
    }),
}));
  
const SortingAlgorithm: React.FC = () => {
    const dispatch = useDispatch();

    const selectedSortingAlgorithm = useSelector(getSelectedAlgorithm);
    const isSorting = useSelector(getIsSorting);

    const handleChange = (_, newValue: SortingAlgorithmType) => {
        dispatch(setSelectedAlgorithm(newValue));
    };
  
    const classes = useStyles({ color: '3f51b5' });

    return (
        <ToggleButtonGroup
            value={selectedSortingAlgorithm}
            exclusive
            onChange={handleChange}
            aria-label="Sorting algorithm"
            size="small"
            style={{
                height: '36px',
            }}
        >
            {SORTING_ALGORITHMS.map((algorithm) => (
                <ToggleButton
                    value={algorithm.type}
                    key={algorithm.type}
                    aria-label={algorithm.text}
                    classes={classes}
                    style={{
                        textTransform: 'none',
                    }}
                    disabled={isSorting}
                >
                    {algorithm.text}
                </ToggleButton>
            ))}
        </ToggleButtonGroup>
    );
};

export default SortingAlgorithm;
