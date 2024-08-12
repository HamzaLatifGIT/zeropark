import React, { useState } from 'react';
import CountUp from 'react-countup';

//style
import './style/Growth.scss'

const CommerceMedia = () => {
    const [activeTab, setActiveTab] = useState('Monetization');
    const [countStarted, setCountStarted] = useState(true);

    const handleTabChange = (tab) => {
        setActiveTab(tab);
    };


    const handleCountUpStart = () => {
        if (!countStarted) {
            setCountStarted(true);
        }
    };


    let content;
    if (activeTab === 'Monetization') {
        content = (
            <div >
                <p data-aos='fade-up' data-aos-delay='300' data-sal-fade>Commerce Media is a source of steady monetization for our publishers that spreads over months and years.<br /> By joining Commerce Media ecosystem, media owners can improve their yield by prioritizing organic platform growth.</p>
                <div className="statistics" data-aos='fade-up' data-aos-delay='400'>
                    <div className="stat-item">
                        <p>+$1
                            <small>Million</small>
                        </p>

                        <hr />
                        <span>Advertiser Budgets Waiting to be Unlocked</span>
                    </div>
                    <div className="stat-item">
                        <p>~<CountUp end={100} enableScrollSpy={true} onStart={handleCountUpStart} start={countStarted ? null : 0} />%

                        </p>
                        <hr />
                        <span style={{ marginTop: '47px' }} >Sellout Rate</span>
                    </div>
                    <div className="stat-item">
                        <p>+$<CountUp end={15} enableScrollSpy={true} onStart={handleCountUpStart} start={countStarted ? null : 0} />
                            <small>Million</small> </p>

                        <hr />
                        <span>Publisher Payouts Last Year</span>
                    </div>
                </div>
            </div>
        );
    } else {
        content = (
            <div >
                <p data-sal='slide-up' data-aos='fade-up' data-aos-delay='300'>Zeropark Commerce Media's benefits for brand advertisers include secure supply distribution, transparent performance and optimization for long-tailed campaigns.<br /> The continuity and growth of our Publisher Portfolio allows all to scale performance in the long and short run.</p>
                <div className="statistics" data-aos='fade-up' data-aos-delay='400'>
                    <div className="stat-item">
                        <p>+<CountUp end={8} enableScrollSpy={true} onStart={handleCountUpStart} start={countStarted ? null : 0} />%</p>
                        <hr />
                        <span style={{ marginTop: '47px' }}>Average Conversion Rate</span>
                    </div>
                    <div className="stat-item">
                        <p>+<CountUp end={20} />
                            <small>Million</small></p>
                        <hr />
                        <span>Conversions Last Year</span>
                    </div>
                    <div className="stat-item">
                        <p>+<CountUp end={140} />
                            <small>Million</small></p>
                        <hr />
                        <span>Monthly Available Volume</span>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="commerce-media">
            <div className="commerce-container max-width">
                <h1 data-sal='slide-up'>A stable system for stable growth</h1>
                <div className="tabs" data-aos='fade-up' >
                    <div className="horizontal-line"></div>

                    <button
                        className={`tab ${activeTab === 'Monetization' ? 'active' : ''}`}
                        onClick={() => handleTabChange('Monetization')}
                        style={{ borderRadius: '10px 0px 0px 10px' }}
                    >
                        Monetization
                    </button>
                    <button
                        className={`tab ${activeTab === 'Advertising' ? 'active' : ''}`}
                        onClick={() => handleTabChange('Advertising')}
                        style={{ borderRadius: '0px 10px 10px 0px' }}
                    >
                        Advertising
                    </button>
                </div>
                {content}
                <button className="signup-button btn" data-aos='fade-up' data-aos-delay='500'>Sign up</button>
            </div>
        </div>
    );
};

export default CommerceMedia;
