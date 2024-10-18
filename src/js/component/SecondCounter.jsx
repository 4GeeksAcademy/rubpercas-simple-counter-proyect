import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClock } from '@fortawesome/free-solid-svg-icons'

const SecondCounter = () => {
    return (
        <div className="container-fluid d-flex align-items-center justify-content-center bg-black gap-3" style={{ height: '200px' }}>
            <div className="bg-dark rounded bg-opacity-50 color-white d-flex align-items-center justify-content-center my-shadow" style={{ width: '160px', height: '180px' }}>
                <FontAwesomeIcon icon={faClock} spinPulse style={{color: "#ffffff", height: '130px', width: '130px'}} />
            </div>
            <div className="bg-dark rounded bg-opacity-50 color-white d-flex align-items-center justify-content-center my-shadow" style={{ width: '120px', height: '180px' }}>
                <p className="num-count">0</p>
            </div>
            <div className="bg-dark rounded bg-opacity-50 color-white d-flex align-items-center justify-content-center my-shadow" style={{ width: '120px', height: '180px' }}>
                <p className="num-count">0</p>
            </div>
            <div className="bg-dark rounded bg-opacity-50 color-white d-flex align-items-center justify-content-center my-shadow" style={{ width: '120px', height: '180px' }}>
                <p className="num-count">0</p>
            </div>
            <div className="bg-dark rounded bg-opacity-50 color-white d-flex align-items-center justify-content-center my-shadow" style={{ width: '120px', height: '180px' }}>
                <p className="num-count">0</p>
            </div>
            <div className="bg-dark rounded bg-opacity-50 color-white d-flex align-items-center justify-content-center my-shadow" style={{ width: '120px', height: '180px' }}>
                <p className="num-count">0</p>
            </div>
            <div className="bg-dark rounded bg-opacity-50 color-white d-flex align-items-center justify-content-center my-shadow" style={{ width: '120px', height: '180px' }}>
                <p className="num-count">0</p>
            </div>
        </div>
    )
};

export default SecondCounter;