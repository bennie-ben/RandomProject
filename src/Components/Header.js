import React from 'react';
import { withRouter } from 'react-router-dom';
import { SHeader, Grid, ListContainer, List, SLink } from "./Style/HeaderStyle";


class Header extends React.Component {
    
    render(){
        const { location : { pathname } } = this.props;
        return(
            <SHeader>
                <ListContainer current = { pathname === "/" } >
                    <List><SLink current = { pathname === "/click" } to="/click">CLICK</SLink></List>
                    <List><SLink current = { pathname === "/about" } to="/about">ABOUT</SLink></List>
                    <List><SLink current = { pathname === "/profile" } to="/profile">PROFILE</SLink></List>
                    <List><SLink current = { pathname === "/prototype" } to="/prototype">PROTOTYPE</SLink></List>
                </ListContainer>
            </SHeader>
            )
    }
}

export default withRouter(Header);