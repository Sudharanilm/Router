import "./PricingCardStyles.css";
import { Link } from "react-router-dom";

import React from 'react'

function PricingCard() {
    return (
        <div className="Pricing">
            <div className="card-container">
                <div className="card">
                    <h3>- Basic -</h3>
                    <span className="bar"></span>
                    <p className="btc">$ 100</p><br />
                    <p>- 3 Days -</p><br />
                    <p>-3 Pages -</p><br />
                    <p>- Featured -</p><br />
                    <p>- Responsive Design -</p><br />
                    <Link to="/contact" className="btn">PURCHASE NOW</Link>
                </div>

                <div className="card">
                    <h3>- Premium -</h3>
                    <span className="bar"></span>
                    <p className="btc">$ 200</p><br />
                    <p>- 2 Days -</p><br />
                    <p>- 5 Pages -</p><br />
                    <p>- Featured -</p><br />
                    <p>- Responsive Design -</p><br />
                    <Link to="/contact" className="btn">PURCHASE NOW</Link>
                </div>

                <div className="card">
                    <h3>- Business -</h3>
                    <span className="bar"></span>
                    <p className="btc">$ 300</p><br />
                    <p>- 5 Days -</p><br />
                    <p>- 8 Pages -</p><br />
                    <p>- Featured -</p><br />
                    <p>- Responsive Design -</p><br />
                    <Link to="/contact" className="btn">PURCHASE NOW</Link>
                </div>
            </div>
        </div>
    );
}

export default PricingCard;





