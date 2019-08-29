import React from 'react';
import { Link } from 'react-router-dom';
import styled from "styled-components";

const Div = styled.div`
    display:grid;
    place-items:center center;
    width:100%,
    height:100%;
    
`

const Greeting = styled.p`
    padding:50px;
    font-size:50px;
    font-weight:100;
    
`

const StartBTN = styled.button`
    height:80px;
    width:300px;
    border-radius:7px;  
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-size: 30px;
    font-weight:200;
`

const SLink = styled(Link)`
    text-decoration:none;
    color: #38470b;
`

const Welcome = () => {
    return (
        <Div>
            <Greeting>HELLO</Greeting>
            <StartBTN type="submit"><SLink to="/click">GET STARTED</SLink></StartBTN>
        </Div>
    )
}

export default Welcome;