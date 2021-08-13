import styled from 'styled-components';

export const StyledHeader = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    align-items: center;
    height: 80px;

    @media only screen and (max-width: 600px) {
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-gap: 20px;
        margin: 20px 0 40px 0;
    }
`;