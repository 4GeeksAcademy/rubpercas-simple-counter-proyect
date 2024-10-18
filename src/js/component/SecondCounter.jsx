import React from "react";
import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClock, faPlay, faStop, faClockRotateLeft, faBackwardStep, faCircleExclamation } from '@fortawesome/free-solid-svg-icons'


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
                            setHundreds(prevHundreds => {
                                if (prevHundreds === 9) {
                                    setHundreds(0);
                                    setThousands(prevThousands => {
                                        if (prevThousands === 9) {
                                            setThousands(0);
                                            setTenThousands(prevTenThousands => {
                                                if (prevTenThousands === 9) {
                                                    setTenThousands(0);
                                                    setHundredThousands(prevHundredThousand => prevHundredThousand + 1);
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
        <div className="row">
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
            <div className="row mt-1 d-flex align-items-center justify-content-center bg-black p-3">
                <h1 className="text-center text-white">OPCIONES</h1>
            </div>
            <div className="container-fluid d-flex align-items-center justify-content-center bg-black gap-3 p-3">

                <div className="d-flex flex-column align-items-center justify-content-center border rounded-1 p-2 my-shadow">
                    <div class="mb-1">
                        <label for="exampleFormControlInput1" class="form-label text-white d-flex flex-column align-items-center justify-content-center">Count down</label>
                        <input type="text" class="form-control my-custom-shadow" id="exampleFormControlInput1" placeholder="Tiempo (en segundos)" />
                    </div>
                    <button type="button" className="btn btn-dark mt-1 w-100"><FontAwesomeIcon icon={faClockRotateLeft} style={{ color: "#ffffff", }} />
                    </button>
                </div>
                <div className="d-flex gap-1 border rounded-1 p-2 my-shadow">
                    <button type="button" class="btn btn-dark"><FontAwesomeIcon icon={faPlay} style={{ color: "#ffffff", }} />
                    </button>
                    <button type="button" class="btn btn-dark"><FontAwesomeIcon icon={faStop} style={{ color: "#ffffff", }} />
                    </button>
                    <button type="button" class="btn btn-dark"><FontAwesomeIcon icon={faBackwardStep} style={{ color: "#ffffff", }} /></button>

                </div>
                <div className="d-flex flex-column align-items-center justify-content-center border rounded-1 p-2 my-shadow">
                    <div class="mb-1">
                        <label for="exampleFormControlInput1" class="form-label text-white d-flex flex-column align-items-center justify-content-center">Time for the alert</label>
                        <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Tiempo (en segundos)" />
                    </div>
                    <button type="button" className="btn btn-dark mt-1 w-100"><FontAwesomeIcon icon={faCircleExclamation} style={{ color: "#ffffff", }} />
                    </button>
                </div>
            </div>
        </div>

    )
};

export default SecondCounter;