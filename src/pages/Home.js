import React from 'react';
import Navigation from '../components/Navigation';
import Typewriter from 'typewriter-effect';

const Home = () => {
    return (
        <div className="home">
            <Navigation/>
            <div className="homeContent">
                <div className="content">
                    <h1>Vanessa FERRAND</h1>
                    <h2>Développeur Web</h2>
                    <h2 className='typeWriter'>
                        <Typewriter
                    onInit={(typewriter) =>
                        typewriter.typeString("Site en construction")
                    .start()}
                        />
                        </h2>               
                                    
                    <div className="pdf">
                        <a href="./media/vanessa_ferrand_cv.pdf" target="_blank">Télécharger le CV</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;