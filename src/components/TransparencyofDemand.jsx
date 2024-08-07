import React from 'react';

//style
import './style/TransparencyOfDemand.scss';

//Assets | banner
import traficBanner from '../assets/banners/traffic-new.webp'

const TransparencyOfDemand = () => {
  return (
    <div className="transparency-section">
      <div className="transparency-container max-width">


        <div className="content">

          <h2>Transparency of Demand and Supply</h2>
          <p>
            Zeropark prioritizes delivering fair conditions to all parties involved in our ecosystem. As an ad exchange, we openly share our supply, ensuring advertisers’ confidence in audience investments.
          </p>
          <p>
            With compliance verifications for all sides of the ecosystem, our premium publishing portfolio is open only to brand-safe advertisers.
          </p>
          <p>
            Customize campaigns with 10 Commerce Media placement categories based on the available types of content and media for better control over audience reach.
          </p>

        </div>
        <div className="image-container">
          <img src={traficBanner} alt="Transparency" />
        </div>

      </div>
    </div>
  );
}

export default TransparencyOfDemand;