import React, { useState, createContext } from "react";
import { getRandomValue } from "../../helpers/gameHelpers";

export const GameContext = createContext();

export const GameProvider = (props) => {
	const [defaultTime, setDefaultTime] = useState(6000)
	const [countdown, setCountdown] = useState(0);
	const [delay, setDelay] = useState(getRandomValue(500, 1500));
	const [timerOn, setTimerOn] = useState(false);
	const [points, setPoints] = useState(0);

	const value = {
		defaultTimeValue: [defaultTime, setDefaultTime],
		countdownValue: [countdown, setCountdown],
		delayValue: [delay, setDelay],
		timerOnValue: [timerOn, setTimerOn],
		pointsValue: [points, setPoints],
	};

	return (
		<GameContext.Provider value={value}>{props.children}</GameContext.Provider>
	);
};
