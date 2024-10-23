import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClock } from '@fortawesome/free-solid-svg-icons'

const SecondsCounter = ({ digits }) => {

  return (
    <div className="row">
      <div className="container-fluid d-flex align-items-center justify-content-center bg-black gap-3" style={{ height: '200px' }}>
        <div className="bg-dark rounded bg-opacity-50 color-white d-flex align-items-center justify-content-center my-shadow" style={{ width: '160px', height: '180px' }}>
          <FontAwesomeIcon icon={faClock} spinPulse style={{ color: "#ffffff", height: '130px', width: '130px' }} />
        </div>
        <div className="bg-dark rounded bg-opacity-50 color-white d-flex align-items-center justify-content-center my-shadow" style={{ width: '120px', height: '180px' }}>
          <p className="num-count">{digits[0]}</p>
        </div>
        <div className="bg-dark rounded bg-opacity-50 color-white d-flex align-items-center justify-content-center my-shadow" style={{ width: '120px', height: '180px' }}>
          <p className="num-count">{digits[1]}</p>
        </div>
        <div className="bg-dark rounded bg-opacity-50 color-white d-flex align-items-center justify-content-center my-shadow" style={{ width: '120px', height: '180px' }}>
          <p className="num-count">{digits[2]}</p>
        </div>
        <div className="bg-dark rounded bg-opacity-50 color-white d-flex align-items-center justify-content-center my-shadow" style={{ width: '120px', height: '180px' }}>
          <p className="num-count">{digits[3]}</p>
        </div>
        <div className="bg-dark rounded bg-opacity-50 color-white d-flex align-items-center justify-content-center my-shadow" style={{ width: '120px', height: '180px' }}>
          <p className="num-count">{digits[4]}</p>
        </div>
        <div className="bg-dark rounded bg-opacity-50 color-white d-flex align-items-center justify-content-center my-shadow" style={{ width: '120px', height: '180px' }}>
          <p className="num-count">{digits[5]}</p>
        </div>
      </div>
    </div>
  );
};

export default SecondsCounter;
