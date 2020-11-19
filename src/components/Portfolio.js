import React from 'react'
import Ux from './otuuna isometric.png'

function Portfolio() {
    return (
        <div className="portfolio-container">
            <h3>Featured Projects</h3>
            <div class="grid">
                <div className="image-div">
                    <img src={Ux} alt="" />
                </div>
                <div className="image-div">
                    <img src={Ux} alt="" />
                </div>
                <div className="image-div">
                    <img src={Ux} alt="" />
                </div>
                <div className="image-div">
                    <img src={Ux} alt="" />
                </div>
                <div className="image-div">
                    <img src={Ux} alt="" />
                </div>
                <div className="image-div">
                    <img src={Ux} alt="" />
                </div>
            </div>
        </div>
    )
}

export default Portfolio
