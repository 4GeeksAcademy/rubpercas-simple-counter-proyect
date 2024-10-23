import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay, faPause, faBackwardStep } from '@fortawesome/free-solid-svg-icons'

const Buttons = ({ handleReset, handleStop, handleResume }) => {
    return (
        <div className="row">
            <div className="container-fluid d-flex align-items-center justify-content-center bg-black">
                <h1 className="text-center text-white rounded border mt-2 my-shadow p-1">OPCIONES</h1>
            </div>
            <div className="container-fluid d-flex align-items-center justify-content-center bg-black gap-3 p-3">
                <button
                    id="btn-reset"
                    className="btn btn-dark mb-2 me-2 border border-light"
                    onClick={handleReset}
                >
                    <FontAwesomeIcon icon={faBackwardStep} style={{ color: "#ffffff", }} />
                </button>
                <button
                    id="btn-stop"
                    className="btn btn-dark mb-2 me-2 border border-light"
                    onClick={handleStop}
                >
                    <FontAwesomeIcon icon={faPause} style={{ color: "#ffffff", }} />
                </button>
                <button
                    id="btn-resume"
                    className="btn btn-dark mb-2 border border-light"
                    onClick={handleResume}
                >
                    <FontAwesomeIcon icon={faPlay} style={{ color: "#ffffff", }} />
                </button>
            </div>
        </div>
    );
};

export default Buttons; 