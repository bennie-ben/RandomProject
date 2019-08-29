import styled from 'styled-components';

export const Grid = styled.div`
    display : grid;
    grid-template-columns : repeat(3, 1fr);

`
export const Button = styled.button`
    background : transparent;
    cursor : pointer;
    border : 6px solid #38470b;
    border-radius 6px; 
    height : 55px;
    width : 200px;
    font-weight : 600;

`
export const ProfileContainer = styled.div`
    display : grid;
    place-items : center center;

`
export const Wrapper = styled.div`
    margin-top : 40px;
    margin-bottom : 80px;
`

