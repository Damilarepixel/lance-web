import React from 'react'
import Ux from './otuuna isometric.png'

function Portfolio() {
    return (
        <div className="portfolio-container">


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

            <div class="more-btn">
                <button className="more">View more</button>
            </div>
        </div>
    )
}

export default Portfolio
