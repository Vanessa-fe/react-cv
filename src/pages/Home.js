import React from 'react';
import Navigation from '../components/Navigation';

const Home = () => {
    return (
        <div className="home">
            <Navigation/>
            <div className="homeContent">
                <div className="content">
                    <div className="h1">
                        <h1>Vanessa FERRAND</h1>
                    </div>
                    <div className="h2">
                        <h2>Développeuse web et web mobile</h2>
                    </div>
                    <div className="pdf">
                        <a href="./media/VFCV.pdf" target="_blank">Télécharger le CV</a>
                        <a href="./media/VANESSA_FERRAND.pdf" target="_blank">Télécharger le CV professionnel</a>
                    </div>
                </div>
            </div>
            </div>
            );
            };

            export default Home;