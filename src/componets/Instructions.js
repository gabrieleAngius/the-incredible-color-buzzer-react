import { useState } from "react";
import { Link } from "react-router-dom";
import Step from "./Step";

const Instructions = () => {
	let [actualStep, setActualStep] = useState(1);
	const goNextStep = () => {
		const nextOne = actualStep + 1;

		if (nextOne !== 5) {
			setActualStep((prevValue) => prevValue + 1);
		}
	};

	const goPrevStep = () => {
		const prevOne = actualStep - 1;

		if (prevOne !== 0) {
			setActualStep((prevValue) => prevValue - 1);
		}
	};
	return (
		<section id="how-to-play" className="display modal">
			<Link to="/" id="close-how-to">
				<i className="fa fa-times"></i>
			</Link>
			<Step number={actualStep} />
			<div className="buttons">
				<button
					id="prec"
					className="generic-button small white"
					onClick={goPrevStep}
					disabled={actualStep === 1 ? true : false}
				>
					Precedente
				</button>
				<button
					id="succ"
					className="generic-button small red"
					onClick={goNextStep}
					disabled={actualStep === 4 ? true : false}
				>
					Successivo
				</button>
			</div>
		</section>
	);
};

export default Instructions;
