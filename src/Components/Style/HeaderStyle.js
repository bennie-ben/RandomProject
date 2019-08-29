import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const SHeader = styled.header`
    margin-bottom : 20px;
`
export const ListContainer = styled.ul`
    display : ${props => props.current ? "none" : "grid"};
    grid-template-columns : repeat(4,1fr);
    margin-bottom : 60px;
    padding : 20px;
    place-items : center center;

`

export const List = styled.li`
    text-decoration:none;
    color :#38470b;
    list-style-type:none;
`

export const SLink = styled(Link)`
    text-decoration:none;
    color :#38470b;
    border-bottom : ${ props => props.current ? "solid 1px #38470b" : "none"};
    transition : border-bottom.1s ease-in-out;
`