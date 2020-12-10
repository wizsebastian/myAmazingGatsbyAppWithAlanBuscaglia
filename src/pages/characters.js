import React, { Component } from "react";
import Header from "../components/Header";
import axios from 'axios';

class Characters extends Component {
    state = {
        characters: []
    }

    componentDidMount() {
        axios.get(`https://rickandmortyapi.com/api/characters`)
    .then(res => {
            const characters = res.data;
            this.setState({
                characters
            })
            console.log('DATA', this.state.characters)
        })
    }
  render() {
    return <div>
        <Header/>
        Characters</div>;
  }
}

export default Characters;
