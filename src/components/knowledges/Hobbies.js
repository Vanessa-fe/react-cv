import React from 'react';

const Hobbies = () => {
    return (
        <div>
            <div className="hobbies">
                <h3>Intérêts</h3>
                <ul>
                    <li className="hobby">
                    <i class="fas fa-cake"></i>
                        <span>Pâtisserie</span>
                    </li>
                    <li className="hobby">
                        <i className="fas fa-running"></i>
                        <span>Couture</span>
                    </li>
                    <li className="hobby">
                        <i className="fas fa-tent"></i>
                        <span>Camper</span>
                    </li>
                    <li className="hobby">
                        <i className="fas fa-computer"></i>
                        <span>Informatique</span>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Hobbies;