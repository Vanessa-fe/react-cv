import React from 'react';

const Hobbies = () => {
    return (
       
            <div className="hobbies">
                <h3>Intérêts</h3>
                <ul>
                    <li className="hobby">
                    <i class="fas fa-cake fa-lg"></i>
                        <span> Pâtisserie</span>
                    </li>
                    <li className="hobby">
                     <i class="fa-solid fa-shirt"></i>
                        <span> Couture</span>
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
        
    );
};

export default Hobbies;