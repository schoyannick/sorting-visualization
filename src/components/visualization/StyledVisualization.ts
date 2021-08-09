import styled from 'styled-components';

export const StyledVisualization = styled.div`
    margin-top: 1vh;
    width: 100%;
    max-width: 800px;
    display: flex;
    justify-content: center;
`;

export const StyledVisualizationItem = styled.div`
    &:not(:last-of-type) {
        margin-right: 2px;
    }
`;