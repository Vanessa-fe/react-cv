import React, { Component } from 'react';

export default class Project extends Component {
  state = {
    showInfo: false
  }

  handleInfo = () => {
    this.setState({
      showInfo:!this.state.showInfo
    })
  }


  render() {
    let{name, languagesIcons, source, picture, site} = this.props.item;

    
    return (
      <div className="project">
        <div className="icons">
          {languagesIcons.map(icon => 
          <i className={icon} key={icon}></i>
          )}
        </div>
        <h3>{name}</h3>
        <img src={picture} alt="" onClick={this.handleInfo}/>
        <span className="infos" onClick={this.handleInfo}>
          <i className='fas fa-plus-circle'></i>
        </span>

        {
          this.state.showInfo && (
            <div className="showInfos">
              <div className="infosContent">
                  <div className="head">
                    <h2>{name}</h2>
                    <div className="sourceCode">
                      <a href={source} rel="noopenner noreferrer" className="button" target="_blank">Code source</a>
                    </div>
                      <div className="sourceCode">
                          <a href={site} rel="noopenner noreferrer" className="button" target="_blank">Site</a>
                      </div>
                  </div>

                  <div className="button return" onClick={this.handleInfo}>
                    Retourner sur la page</div>
              </div>
            </div>
          )
        }
      </div>
    );
  }
}
