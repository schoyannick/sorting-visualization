import React from 'react';

import ChangeSize from './change-size/ChangeSize';
import GenerateArray from './generate-array/GenerateArray';
import SortButton from './sort-button/SortButton';
import SortingAlgorithm from './sorting-algorithms/SortingAlgorithm';
import { StyledHeader } from './StyledHeader';

const Header: React.FC = () => (
    <StyledHeader>
        <GenerateArray/>
        <ChangeSize/>
        <SortingAlgorithm/>
        <SortButton/>
    </StyledHeader>
);

export default Header;
