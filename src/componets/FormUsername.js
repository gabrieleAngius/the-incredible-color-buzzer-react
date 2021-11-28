import { useState } from "react";
import { sendData } from "../helpers/fetch";

export default function FormUsername({ score }) {
	const [username, setUsername] = useState("");
	const [customMessage, setCustomMessage] = useState("");

	function updateUsername(e) {
		setUsername(e.target.value);
	}

	function sendUsername(e) {
		e.preventDefault();
		if(username.length === 0 || !username.trim()) {
			setCustomMessage('Compila il campo di input !');
			return;
		}
		sendData(username, score).then((res) => setCustomMessage(res));
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
				>
					{" "}
					<i className="fa fa-arrow-right fa-2x"></i>{" "}
				</button>
			</span>
			<p> {customMessage} </p>
		</form>
	);
}
