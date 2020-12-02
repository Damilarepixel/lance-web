import React from 'react'
import Facebook from './facebook.png'
import Behance from './behance.png'
import LinkedIn from './linkedin.png'

function Links() {
    return (
        <div className="footer-main">
            <div>
                <ul className="links">
                    <div>
                    <p className="footer-links">About Us</p>
                    </div>
                    <div>
                    <p className="footer-links">Our Work</p>
                    </div>
                    <div>
                    <p className="footer-links">Careers</p>
                    </div>
                    <div>
                    <p className="footer-links">Contact</p>
                    </div>
                </ul>
            </div>

            <hr />

            <div className="last-item">
                    
                        <p className="footer-link">&#169; Lance Studio 2020</p>
                    
            </div>
        </div>
    )
}

export default Links
