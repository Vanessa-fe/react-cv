import React from 'react';
import Navigation from '../components/Navigation';
import { CopyToClipboard } from 'react-copy-to-clipboard';

const Contact = () => {
    return (
        <div className="contact">
            <Navigation />
            <div className="contactContent">
                <div className="header">               
                </div>
                <div className="contactBox">
                        <h1>Contactez moi</h1>
                        <ul>
                            <li>
                                <i className='fas fa-map-marker-alt'></i>
                                <span>Lille</span>
                            </li>
                            <li>
                                <i className="fas fa-mobile-alt"></i>
                                <CopyToClipboard text="0782424745">
                                    <span className='clickInput' onClick={() => { alert('Téléphone copié');}}> 07 82 42 47 45 </span>
                                </CopyToClipboard>
                            </li>
                            <li>
                                <i className="fas fa-envelope"></i>
                                <CopyToClipboard text="van3ssacod3@gmail.com">
                                    <span className='clickInput' onClick={() => { alert('Mail copié');}}> van3ssacod3@gmail.com </span>
                                </CopyToClipboard>
                            </li>
                        </ul>
                </div>
                <div className="socialNetwork">
                        <ul>                            
                                <a href="https://www.linkedin.com/in/vanessa-ferrand-75223214b/" target="_blank" rel="noopener noreferrer">
                                    <h4>LinkedIn</h4>
                                    <i className="fab fa-linkedin"></i>
                                </a>                           
                                <a href="https://github.com/Vanessa-fe" target="_blank" rel="noopener noreferrer">
                                    <h4>Gihub</h4>
                                    <i className="fab fa-github"></i>
                                </a>
                         </ul>
                </div>
            </div>
        </div>
    );
};

export default Contact;

