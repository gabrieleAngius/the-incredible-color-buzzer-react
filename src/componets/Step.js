import Step1 from "./steps/Step1";
import Step2 from "./steps/Step2";
import Step3 from "./steps/Step3";
import Step4 from "./steps/Step4";

const Step = ({ number }) => {
	if (number === 1) {
		return <Step1 />;
	}

	if (number === 2) {
		return <Step2 />;
	}

	if (number === 3) {
		return <Step3 />;
	}

	if (number === 4) {
		return <Step4 />;
	}
};

export default Step;
