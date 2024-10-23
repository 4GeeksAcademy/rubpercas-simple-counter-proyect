import React, { useEffect, useState, useRef } from "react";
import SecondsCounter from "./SecondsCounter";
import Buttons from "./Buttons";


const Home = () => {
	const [seconds, setSeconds] = useState(0);
	const [isRunning, setIsRunning] = useState(true);
	const [reverse, setReverse] = useState(null);
	const intervalRef = useRef(null);

	const formatDigits = (num) => {
		const str = num.toString().padStart(6, "0");
		return str.split("");
	};


	useEffect(() => {                               
		if (isRunning) {
			intervalRef.current = setInterval(() => {
				setSeconds(prev => {
					if (prev === 0 && reverse !== null) {
						handleStop()
						alert("Tu tiempo ha terminado");
						return prev
					}
					if (reverse !== null && prev > 0) {
						return prev - 1
					}
					if (reverse === null) {
						return prev + 1
					}
				})
			}, 1000);

		}

		return () => clearInterval(intervalRef.current);
	}, [isRunning, reverse]);


	const handleReset = () => { 
			setIsRunning(false);   
			setSeconds(0);         
			setReverse(null);       
	};

	const handleStop = () => {
		setIsRunning(false);        
		clearInterval(intervalRef.current);
	};

	const handleResume = () => {
		setIsRunning(true);    
	};

	const handleReverse = (event) => {
		const value = Number(event.target.value);
		if (!isNaN(value) && value >= 0) {  
			setReverse(value); 
			setSeconds(value); 
			setIsRunning(false);   
		}
	};

	return (
		<div className="container-fluid">
			<div className="cardsContainer">
				<SecondsCounter digits={formatDigits(seconds)} />
			</div>
			<div className="button text-center mt-2">
				<Buttons
					handleReset={handleReset}
					handleStop={handleStop}
					handleResume={handleResume}
				/>
				<div className="row d-flex justify-content-center align-items-center bg-black">
					<input
						type="number"
						className="form-control my-custom-shadow w-25 mb-2"
						id="reverse"
						name="reverse"
						placeholder="Your count down here"
						onChange={handleReverse}
					/>
				</div>
			</div>
		</div>
	);
};

export default Home;
