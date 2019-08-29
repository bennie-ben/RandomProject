import React from 'react';
import styled from "styled-components";
import { Offline, Online } from "react-detect-offline";

const Grid = styled.div`
    display : grid;
    grid-template-columns : repeat(3, 1fr);
`
const TextContainer = styled.div`
    display : grid;
    justify-items : flex-end;
    font-size : 13px;
`
const WifiConnection = () => {
    return (
        <Grid>
            <div/>
            <div/>
            <TextContainer>
                <Online>Listening On : http://localhost:3000</Online>
                <Offline>Only shown offline (surprise!)</Offline>
            </TextContainer>
        </Grid>
    )
}


export default WifiConnection;