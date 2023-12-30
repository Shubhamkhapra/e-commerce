import React from 'react';
import { withRouter } from 'react-router-dom';
import studioBug from "../../assets/studio-bag.png";
import "./main-section.style.scss"


const MainSection = ({history}) => {
    return (
        <div className="main-section-container">
            <div className="main-section-middle">
                <div className="ms-m-image">
                    <img src={studioBug} alt="studio-bug"/>
                </div>
                <div className='ms-m-description'>
                    <h2>Designed fo fashion. Crafted for sport.</h2>
                    <p>
                        We make products that effortlessly transition from day to night, from the board room to the fitness studio, and everywhere in between.
                        each SK piece is made with versatility in mind — so you can go about your busy day with confidence.
                    </p>
                    <button className='button is-black' id='shop-now' onClick={() => history.push('/product/1')}>STUDIO BAG</button>
                </div>
            </div>
        </div>
    )
}

export default withRouter(MainSection);