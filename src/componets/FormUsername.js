import { useState } from "react";
import { sendData } from "../helpers/fetch";

export default function FormUsername({ score, toggleExitButtons }) {
	const [username, setUsername] = useState("");
	const [customMessage, setCustomMessage] = useState("");
	const [disableSubmit, setDisableSubmit] = useState(false);

	const iconStates = {
		default: "fa-arrow-right",
		animated: "fa-circle-o-notch fa-spin",
		success: "fa-check"
	}
	const [animateSubmitIcon, setAnimateSubmitIcon] = useState(iconStates.default);

	function updateUsername(e) {
		setUsername(e.target.value);
	}

	function sendUsername(e) {
		e.preventDefault();
		setAnimateSubmitIcon(iconStates.animated);
		if(username.length === 0 || !username.trim()) {
			setCustomMessage('Compila il campo di input !');
			setAnimateSubmitIcon(iconStates.default);
			return;
		}
		sendData(username, score).then((res) => {
			if(res) {
				setCustomMessage('Punteggio registrato correttamente');
				setAnimateSubmitIcon(iconStates.success);
				toggleExitButtons(false);
				setDisableSubmit(true);
			} else {
				setCustomMessage('Errore: punteggio non registrato')
				setAnimateSubmitIcon(iconStates.default);
			}
		});
	}

	return (
		<form onSubmit={sendUsername}>
			<label htmlFor="username">Il tuo username:</label>
			<span>
				<input
					type="text"
					name="username"
					id="username"
					max="3"
					maxLength="3"
					size="3"
					value={username}
					onChange={updateUsername}
				/>
				<button
					className="generic-button white"
					id="save-user-button"
					type="submit"
					disabled={disableSubmit}
				>
					{" "}
					<i className={`fa ${animateSubmitIcon} fa-2x`}></i>{" "}
				</button>
			</span>
			<p> {customMessage} </p>
		</form>
	);
}
