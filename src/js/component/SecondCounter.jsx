import React from "react";
import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClock } from '@fortawesome/free-solid-svg-icons'


const SecondCounter = () => {
    const [units, setUnits] = useState(0);
    const [dozens, setDozens] = useState(0);
    const [hundreds, setHundreds] = useState(0);
    const [thousands, setThousands] = useState(0);
    const [tenThousands, setTenThousands] = useState(0);
    const [hundredThousands, setHundredThousands] = useState(0);

    useEffect(() => {
        const counterInterval = setInterval(() => {
            setUnits(prevUnits => {
                if (prevUnits === 9) {
                    setUnits(0);
                    setDozens(prevDozens => {
                        if (prevDozens === 9) {
                            setDozens(0);
                            setHundreds (prevHundreds => {
                                if (prevHundreds === 9) {
                                    setHundreds(0);
                                    setThousands (prevThousands => {
                                        if (prevThousands === 9) {
                                            setThousands(0);
                                            setTenThousands (prevTenThousands => {
                                                if (prevTenThousands === 9) {
                                                    setTenThousands(0);
                                                    setHundredThousands (prevHundredThousand => prevHundredThousand + 1);
                                                } else {
                                                    return prevTenThousands + 1;
                                                }
                                            });
                                        } else {
                                            return prevThousands + 1;
                                        }
                                    });
                                } else {
                                    return prevHundreds + 1;
                                }
                            });
                        } else {
                            return prevDozens + 1;
                        }
                    });
                } else {
                    return prevUnits + 1;
                }
            });
        }, 1000);

        return () => clearInterval(counterInterval);
    }, []);

    return (
        <div className="container-fluid d-flex align-items-center justify-content-center bg-black gap-3" style={{ height: '200px' }}>
            <div className="bg-dark rounded bg-opacity-50 color-white d-flex align-items-center justify-content-center my-shadow" style={{ width: '160px', height: '180px' }}>
                <FontAwesomeIcon icon={faClock} spinPulse style={{ color: "#ffffff", height: '130px', width: '130px' }} />
            </div>
            <div className="bg-dark rounded bg-opacity-50 color-white d-flex align-items-center justify-content-center my-shadow" style={{ width: '120px', height: '180px' }}>
                <p className="num-count">{hundredThousands}</p>
            </div>
            <div className="bg-dark rounded bg-opacity-50 color-white d-flex align-items-center justify-content-center my-shadow" style={{ width: '120px', height: '180px' }}>
                <p className="num-count">{tenThousands}</p>
            </div>
            <div className="bg-dark rounded bg-opacity-50 color-white d-flex align-items-center justify-content-center my-shadow" style={{ width: '120px', height: '180px' }}>
                <p className="num-count">{thousands}</p>
            </div>
            <div className="bg-dark rounded bg-opacity-50 color-white d-flex align-items-center justify-content-center my-shadow" style={{ width: '120px', height: '180px' }}>
                <p className="num-count">{hundreds}</p>
            </div>
            <div className="bg-dark rounded bg-opacity-50 color-white d-flex align-items-center justify-content-center my-shadow" style={{ width: '120px', height: '180px' }}>
                <p className="num-count">{dozens}</p>
            </div>
            <div className="bg-dark rounded bg-opacity-50 color-white d-flex align-items-center justify-content-center my-shadow" style={{ width: '120px', height: '180px' }}>
                <p className="num-count">{units}</p>
            </div>
        </div>
    )
};

export default SecondCounter;