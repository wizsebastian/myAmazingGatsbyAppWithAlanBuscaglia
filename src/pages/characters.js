import React, { Component } from "react";
import axios from "axios";

import Header from "../components/Header";
import {
  CharacterCard,
  CharacterName,
  CharacterData,
  CharacterImage,
} from "../styles";

class Characters extends Component {
  state = {
    characters: [],
  };

  componentDidMount() {
    this.getData();
  }

  getData() {
    axios.get(`https://rickandmortyapi.com/api/character`).then((res) => {
      const characters = res.data;
      this.setState({
        characters,
      });
      console.log("HERE", this.state.characters.results);
    });
  }

  render() {
    const { result } = this.state.characters;
    return (
      <div>
        <Header />
        <div className="container">
          <div className="row">
            {this.state.characters.results &&
              this.state.characters.results.map((data) => (
                <div className="col-sm-4">
                  <CharacterCard>
                  <span className="badge badge-secondary">{data.gender}</span>
                    {/* <img src='https://cdn.dribbble.com/users/108183/screenshots/4719179/choose_a_type_of_user.png' alt='test' />                    <img src={data.image} alt={data.name}/> */}
                    <CharacterImage>
                      <img src={data.image} alt={data.name} />
                    </CharacterImage>
                    <div className="row mt-2">
                      
                      <div className="col-12 text-center">
                        <CharacterName>{data.name}</CharacterName>
                      </div>

                      <div className="col-3"><b>Specie:</b></div>
                      <div className="col-9">
                        <CharacterData>{data.species}</CharacterData>
                      </div>
                      <div className="col-3"><b>Status</b></div>
                      <div className="col-9">
                        <CharacterData>Status: {data.status}</CharacterData>
                      </div>
                    </div>
                  </CharacterCard>
                </div>
              ))}
          </div>
        </div>
      </div>
    );
  }
}

export default Characters;
