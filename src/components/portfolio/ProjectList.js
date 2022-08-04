import React, { Component } from 'react';
import { portfolioData } from '../../data/portfolioData';
import Project from './Project';

export default class ProjectList extends Component {
    state = {
        projects:portfolioData,
        radios: [
            {id: 1, value: "Javascript"},
            {id: 2, value: "CSS"},            
            {id: 3, value: "Php"},
            {id: 4, value: "React"}
        ],
        selectedRadio: 'javascript'
    };

    // Pour récupérer les infos et lier les languages dans les boutons radio
    handleRadio = (event) => {
      let radio = event.target.value;
      this.setState({selectedRadio: radio})
    }


  render() {
    let {projects, radios, selectedRadio} = this.state;

    return (
      <div className="portfolioContent">
        <ul className="radioDisplay">
          {
            radios.map((radio) =>{
              return (
                <li key={radio.id}>
                  <input 
                    type="radio"
                    name="radio"
                    checked={radio.value ===
                    selectedRadio}
                    value={radio.value}
                    id={radio.value}
                    onChange={this.handleRadio}
                   />
                   <label htmlFor={radio.value}>{radio.value}</label>
                </li>
              )
            }
            )
          }


        </ul>

        <div className="projects"> 
            {
              // Ici on map (affichage) tous les projets de la base de données du fichier portfolioData.js
             projects
             .filter(item => item.languages.includes(selectedRadio))
              .map(item => {
              return (
                <Project 
                  key={item.id}
                  item={item}
                />
              )
             })
            }
        </div>
      </div>
    );
  }
}
