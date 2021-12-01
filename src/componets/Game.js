import { useEffect, useContext, useState } from "react";
import { Link, Navigate } from "react-router-dom";
import Light from "./game/Light";
import Lives from "./game/Lives";
import Points from "./game/Points";
import Timer from "./game/Timer";
import { GameContext } from "./game/GameContext";
import {
	getRandomColor,
	getRandomValue,
	colors,
	shuffleArray,
} from "../helpers/gameHelpers";
import Buzzer from "./game/Buzzer";
import { motion } from "framer-motion";

export default function Game() {
	const {
		defaultTimeValue,
		countdownValue,
		delayValue,
		timerOnValue,
		pointsValue,
		soundEffectsValue,
	} = useContext(GameContext);
	const [defaultTime] = defaultTimeValue;
	const [time, setTime] = countdownValue;
	const [delay, setDelay] = delayValue;
	const [, setTimerOn] = timerOnValue;
	const [, setPoints] = pointsValue;

	const [endMatch, setEndMatch] = useState(false);
	const [lightColor, setLightColor] = useState("grey");
	const [buzzerColors, setBuzzerColors] = useState(colors);
	const [lives, setLives] = useState(3);
	const [roundNumber, setRoundNumber] = useState(1);
	const timeDecrement = 200;

	const [soundEffects] = soundEffectsValue;

	useEffect(() => {
		setTime(defaultTime);

		return () => {
			setTimerOn(false);
			setTime(0);
			setLightColor("grey");
			setLives(3);
		};
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	useEffect(() => {
		setLightColor("grey");
		setBuzzerColors([]);
		setTimeout(() => {
			setLightColor(getRandomColor);
			setBuzzerColors(shuffleArray(colors));
			setTimerOn(true);
		}, delay);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [roundNumber]);

	function handleBuzz(buzzedColor) {
		setTimerOn(false);
		if (lightColor !== buzzedColor && lightColor !== "grey") {
			lostOneLife();
			return;
		}

		if (lightColor !== "grey") {
			refreshPoints();
			refreshTime();
			soundEffects.success.play();
			setDelay(getRandomValue(500, 1500));
			setRoundNumber((prevN) => prevN + 1);
		}
	}

	function lostOneLife(expiredTime) {
		setLives((prevLives) => prevLives - 1);

		if (lives === 0) {
			soundEffects.lost.play();
			setTimerOn(false);
			setEndMatch(true);
			return;
		}

		if (expiredTime) {
			setTime(defaultTime);
		}

		soundEffects.fail.play();
		setDelay(getRandomValue(500, 1500));
		setRoundNumber((prevN) => prevN + 1);
	}

	function refreshPoints() {
		const fraction = time / 3;

		if (time <= fraction) {
			setPoints((prevPoints) => (prevPoints += 10));
			return;
		}

		if (time <= fraction * 2) {
			setPoints((prevPoints) => (prevPoints += 25));
			return;
		}

		setPoints((prevPoints) => (prevPoints += 50));
	}

	function refreshTime() {
		if (time >= defaultTime / 5) {
			setTime((prevTime) => (prevTime -= timeDecrement));
		}
	}

	return (
		<motion.section
			id="game"
			className="display modal"
			animate={{ y: 0 }}
			initial={{ y: "-100vh" }}
			transition={{ type: "tween", stiffness: 50, duration: .7}}
		>
			{endMatch && <Navigate to="/end-match" />}
			<h2>Round {roundNumber}</h2>
			<div className="row">
				<Link to="/end-match">
					<button className="generic-button blue small" id="leave">
						Esci
					</button>
				</Link>
				<Lives lives={lives} />
				<Points />
			</div>
			<div className="column">
				<Timer callback={lostOneLife} />
				<Light color={lightColor} />
				<div className="row" id="buzzers-container">
					<Buzzer color={buzzerColors[0]} callback={handleBuzz} />
					<Buzzer color={buzzerColors[1]} callback={handleBuzz} />
					<Buzzer color={buzzerColors[2]} callback={handleBuzz} />
					<Buzzer color={buzzerColors[3]} callback={handleBuzz} />
				</div>
			</div>
		</motion.section>
	);
}
