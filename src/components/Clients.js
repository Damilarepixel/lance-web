import React from 'react'
import Amazon from './amazon-brands.svg'
import Apper from './apper-brands.svg'
import Behance from './behance-brands.svg'
import Accusoft from './accusoft-brands.svg'
import Joomla from './joomla-brands.svg'



function Clients() {
    return (
        <div>
            <div className="clients-container">
                <h4>- We've Worked with</h4>

                <div className="clients-brands">
                    <div className="brands">
                        <img src={Amazon} alt='' id="client" />
                    </div>

                    <div className="brands">
                        <img src={Apper} alt='' id="client"/>
                    </div>

                    <div className="brands">
                        <img src={Joomla} alt='' id="client"/>
                    </div>

                    <div className="brands">
                        <img src={Behance} alt='' id="client"/>
                    </div>

                    <div className="brands">
                        <img src={Accusoft} alt='' id="client"/>
                    </div>

                    <div className="brands">
                        <img src={Amazon} alt='' id="client"/>
                    </div>
                </div>
            </div>

            
        </div>
    )
}

export default Clients
