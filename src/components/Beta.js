import React from 'react'
import Workers from './workers.jpg'

function Beta() {
    return (
        <div className="about-container">
            <div className="aboutUs">
                <h3 id="beta">
                    We design for humans
                </h3>
                <p>CKDigital is a world-class and Lagos-based digital agency, offering web design, digital marketing and branding services. After 7 years and over 400 projects, we are proud of our reputation for excellence, client service and success.</p>
            </div>

            <div className="team-image">
                <img src={Workers} alt='happy people' />
            </div>
        </div>
    )
}

export default Beta
