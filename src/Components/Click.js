import React from 'react';
import { Loading } from './Loading';
import { ClickAPI } from "../api";
import { Grid, ProfileContainer, Button, Wrapper } from './Style/ClickStyle';

class SwithProfile extends React.Component{

    state = {
        loading:true,
        name:"",
        title:"",
        profile:"",
        index:0
    }

    _setIndex(){
        const number = Math.floor((Math.random() * ClickAPI.length));
        return number
    }

    componentDidMount(){
        const { name, title, profile} = ClickAPI[0];
        setTimeout(()=>
            this.setState({
                loading:false,
                name,
                title,
                profile
            }),1000
        )
    }

    async componentDidUpdate(){
        
        const { name, title, profile } = await ClickAPI[this._setIndex()];
        if( this.state.loading ){
        setTimeout(()=>
            this.setState({
                loading:false,
                name,
                title,
                profile
            }),1000
        )}
    }
    
    render(){
        const { name, title, profile, loading} = this.state;
        return(loading ? <Loading/> : 
            <Grid>
                <div/>
                <ProfileContainer>
                    <span>
                        <img src={profile} title={title} alt={title}/>
                    </span>
                    <p>{name}</p>
                    <p>{title}</p>
                    <Wrapper>
                        <Button type="submit" onClick={() => this.setState({loading:true})}>HIT ME</Button>
                    </Wrapper>
                </ProfileContainer>
                <div/>
            </Grid>
        );
    }
}

export default SwithProfile;