import React from 'react';

const Experience = () => {
    return (
        <div className="experience">
          <h3>Expérience</h3>
          <div className="exp1">
            <h4>Développeur Front-End - Atecna</h4>
            <h5>2021-2022</h5>            
              <ul>
                <li>
                  <h5 className="mission">Mailing (Braze (outil d’emailing), Jira, Photoshop, IntelliJ) - Estée Lauder Cie.</h5>
                      <p>Les objectifs de la mission : </p>
                      <ul className="liste">
                        <li><i class="fa-brands fa-html5"></i> Agilité sur les prises de brief (très fluctuant)</li>
                        <li><i class="fa-brands fa-html5"></i> Gestion du delivery avec des retours des équipes <br /> <span>....</span>  marketing</li>
                        <li><i class="fa-brands fa-html5"></i> Intégration et optimisation des campagnes d’emailing</li>
                        <li><i class="fa-brands fa-html5"></i> Savoir adapter les maquettes graphiques</li>                    
                      </ul>                      
                </li>
              </ul>
              <ul>
                <li>
                  <h5 className="mission">Projet Wordpress/PHP (Caldera Form, ACF, Organisation Agile, Gitlab) - Synlab</h5>
                      <p>Les objectifs de la mission :</p>
                      <ul className="liste">
                        <li><i class="fa-brands fa-php"></i> Refonte d’un site sous Wordpress</li>
                        <li><i class="fa-brands fa-php"></i> Intégration front-end</li>
                        <li><i class="fa-brands fa-php"></i> Installation de plugins</li>                  
                      </ul>        
                </li>
              </ul>
              <ul>
                <li>
                  <h5 className="mission">Projet JS/REACTJS/jQuery - Meilleurtaux.com</h5>
                      <p>Les objectifs de la mission :</p>
                        <ul className="liste">
                        <li><i class="fa-brands fa-react"></i> Intégration de REACT.Js</li>
                        <li><i class="fa-brands fa-react"></i> Correctifs de bug</li>                 
                      </ul>  
                      
                </li>
              </ul>
          </div>
          <div className="exp2">
            <h4>Assistante de formation - AFPA</h4>
            <h5>2018-2020</h5>
            <p>J'occupais un poste </p>
          </div>
        </div>
    );
};

export default Experience;