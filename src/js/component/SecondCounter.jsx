import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClock, faPlay, faStop, faClockRotateLeft, faBackwardStep, faCircleExclamation } from '@fortawesome/free-solid-svg-icons'

// Función SecondCounter que renderiza el contador completo.
const SecondCounter = () => {
    const [digits, setDigits] = useState([0, 0, 0, 0, 0, 0]); //useState para la variable digits (nuestro array con los dígitos del contador inicializado a 0)
    const [isPaused, setIsPaused] = useState(false); //useState para la variable isPaused para controlar los botones de play y pause.
    const [allDigits, setAllDigits] = useState([]);

    const resetCounter = () => { // funcion que formatea el contador a 0 de nuevo para el boton restart.
        setDigits([0, 0, 0, 0, 0, 0]);
    };

    const incrementDigits = (index) => { //función que controla el incremento de los digitos.
        if (index < 0) {
            return;
        }

        setDigits((prevDigits) => {
            const newDigits = [...prevDigits];
            newDigits[index] = (newDigits[index] + 1) % 10;
            if (newDigits[index] === 0) {
                incrementDigits(index - 1);
            }
            return newDigits;
        });
    };

    const arrayAux = (e) => {        
        const inputValue = e.target.value;
        const digitsArray = inputValue.split('');
        const digitsArrayAsNumbers = digitsArray.map(digit => Number(digit));
        setDigits(digitsArrayAsNumbers);
    }


    useEffect(() => {
        let intervalId;

        const startInterval = () => {
            intervalId = setInterval(() => {
                incrementDigits(digits.length - 1)
            }, 1000);
        };

        const stopInterval = () => {
            clearInterval(intervalId);
        };

        !isPaused ? startInterval() : stopInterval();

        return () => clearInterval(intervalId);
    }, [isPaused]);


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
            <div className="row mt-1 d-flex align-items-center justify-content-center bg-black p-3">
                <h1 className="text-center text-white">OPCIONES</h1>
            </div>
            <div className="container-fluid d-flex align-items-center justify-content-center bg-black gap-3 p-3">

                <div className="d-flex flex-column align-items-center justify-content-center border rounded-1 p-2 my-shadow">
                    <div className="mb-1">
                        <label className="form-label text-white d-flex flex-column align-items-center justify-content-center" htmlFor="count-down-input">Count down</label>
                        <input type="number" className="form-control my-custom-shadow" id="count-down-input" placeholder="Tiempo (en segundos)" onChange={arrayAux} />
                    </div>
                    <button type="button" className="btn btn-dark mt-1 w-100" id="count-down-button"><FontAwesomeIcon icon={faClockRotateLeft} style={{ color: "#ffffff", }} />
                    </button>
                </div>
                <div className="d-flex gap-1 border rounded-1 p-2 my-shadow">
                    <button type="button" className="btn btn-dark" id="play" onClick={() => setIsPaused(false)}><FontAwesomeIcon icon={faPlay} style={{ color: "#ffffff", }} />
                    </button>
                    <button type="button" className="btn btn-dark" id="pause" onClick={() => setIsPaused(true)}><FontAwesomeIcon icon={faStop} style={{ color: "#ffffff", }} />
                    </button>
                    <button type="button" className="btn btn-dark" id="restart" onClick={resetCounter}><FontAwesomeIcon icon={faBackwardStep} style={{ color: "#ffffff", }} /></button>

                </div>
                <div className="d-flex flex-column align-items-center justify-content-center border rounded-1 p-2 my-shadow">
                    <div className="mb-1">
                        <label className="form-label text-white d-flex flex-column align-items-center justify-content-center" htmlFor="alert-time-input">Time for the alert</label>
                        <input type="number" className="form-control" id="alert-time-input" placeholder="Tiempo (en segundos)" />
                    </div>
                    <button type="button" className="btn btn-dark mt-1 w-100"><FontAwesomeIcon icon={faCircleExclamation} style={{ color: "#ffffff", }} />
                    </button>
                </div>
            </div>
        </div>

    )
};

export default SecondCounter;


// codigo de Juan David:

// import './App.css'
// import { useState, useEffect } from 'react'


// function App() {
//   const [counter, setCounter] = useState(0);
//   const [idInteval, setIdInterval] = useState("");

//   useEffect(() => {
//     const id = setInterval(() => {
//       setCounter(prevCounter => prevCounter + 1)
//     }, 500)

//     setIdInterval(id)
//   }, [])

//   const decreaseCounter = () => {
//     if (idInteval) {
//       return alert('Hay un intervalo ejecutandose')
//     }
//     const id = setInterval(() => {
//       setCounter(prevCounter => {
//         if (prevCounter == 0) {
//           clearInterval(id)
//           return 0
//         }
//         return prevCounter - 1
//       })

//     }, 500)
//     setIdInterval(id)
//   }

//   const stopInterval = () => {
//     clearInterval(idInteval);
//     setIdInterval("")
//   }

//   return (
//     <>
//       <h1>{counter}</h1>
//       <input
//         type="text"
//         disabled={idInteval ? true : false}
//         onChange={(e) => {
//          let aux = setCounter(e.target.value);
//            return Array.from(aux);
//            }}
//         style={{
//           display: "block",
//           padding: "10px",
//           marginBottom: "10px"
//         }}
//         placeholder='Ingresa una cantidad en segundos' />
//       <button onClick={stopInterval}>Detener</button>
//       <button onClick={decreaseCounter}>Iniciar</button>

//     </>
//   )


// }

// export default App