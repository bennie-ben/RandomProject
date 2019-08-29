import React from 'react';
import { Loading } from './Loading';
import { PrototypeAPI } from "../api";
import { Grid, ProfileContainer, Button, Wrapper } from './Style/ClickStyle';

class Prototype extends React.Component{

    state = {
        loading:true,
        title:"",
        description:"",
        profile:"",
        mission:"",
        index:0
    }

    _setIndex(){
        const number = Math.floor((Math.random() * PrototypeAPI.length));
        return number
    }

    componentDidMount(){
        const { mission, title, profile, description} = PrototypeAPI[0];
        setTimeout(()=>
            this.setState({
                loading:false,
                description,
                title,
                profile,
                mission
            }),1000
        )
    }

    async componentDidUpdate(){
        
        const { title, mission, description, profile } = await PrototypeAPI[this._setIndex()];
        if( this.state.loading ){
        setTimeout(()=>
            this.setState({
                loading:false,
                title,
                mission, 
                description,
                profile
            }),1000
        )}
    }
    
    render(){
        const { title, mission, description, profile, loading} = this.state;
        return(loading ? <Loading/> : 
            <Grid>
                <div/>
                <ProfileContainer>
                    <span>
                        <img src={profile} title={title} alt={title}/>
                    </span>
                    <p>Title : {title}</p>
                    <p>Description : {description}</p>
                    <p>Mission : {mission}</p>
                    <Wrapper>
                        <Button type="submit" onClick={() => this.setState({loading:true})}>HIT ME</Button>
                    </Wrapper>
                </ProfileContainer>
                <div/>
            </Grid>
        );
    }
}

export default Prototype;
