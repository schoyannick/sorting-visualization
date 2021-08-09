import styled from 'styled-components';

export const StyledHeader = styled.div`
    height: 80px;
    display: flex;
    justify-content: space-between;
    width: 100%;
    align-items: center;

    @media only screen and (max-width: 600px) {
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-gap: 20px;
        margin-top: 20px;
    }
`;