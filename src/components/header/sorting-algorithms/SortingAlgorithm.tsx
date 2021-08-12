import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { makeStyles } from '@material-ui/core';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';

import { SORTING_ALGORITHMS } from '../../../constants/sortingAlgorithms';
import { setSelectedAlgorithm } from '../../../redux/app/actions';
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

    const handleChange = (event) => {
        dispatch(setSelectedAlgorithm(event.target.value));
    };

    const classes = useStyles({ color: '3f51b5' });

    return (
        <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={selectedSortingAlgorithm}
            onChange={handleChange}
            autoWidth
            style={{
                width: '110px',
            }}
            disabled={isSorting}
        >
            {SORTING_ALGORITHMS.map((algorithm) => (
                <MenuItem
                    value={algorithm.type}
                    key={algorithm.type}
                    classes={classes}
                >
                    {algorithm.text}
                </MenuItem>
            ))}
        </Select>
    );
};

export default SortingAlgorithm;
