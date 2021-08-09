import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Slider from '@material-ui/core/Slider';
import { StyledChangeSize, StyledChangeSizeText } from './StyledChangeSize';
import { getIsSorting, getSize } from '../../../redux/app/selectors';
import { setSize } from '../../../redux/app/actions';

const ChangeSize: React.FC = () => {
    const dispatch = useDispatch();
    const size = useSelector(getSize);
    const isSorting = useSelector(getIsSorting);

    const handleChange = (_, newValue: number) => {
        const newSize = Math.max(0.5, newValue);
        if (newSize * 5 !== size) {
            dispatch(setSize(newSize * 5));
        }
    };

    return (
        <StyledChangeSize>
            <StyledChangeSizeText>
                Change Size
            </StyledChangeSizeText>

            <Slider
                value={size / 5} 
                onChange={handleChange}
                aria-labelledby="continuous-slider" 
                min={0}
                max={20}
                style={{
                    width: '100px',
                }}
                disabled={isSorting}
            />
        </StyledChangeSize>
    );
};

export default ChangeSize;
