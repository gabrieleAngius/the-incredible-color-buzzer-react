import { useContext, useEffect, useState } from "react";
import { GameContext } from "./game/GameContext";
import musicSound from "../sounds/gamemusic.mp3";
import successSound from "../sounds/success-sound.mp3";
import failSound from "../sounds/fail-round.mp3";
import lostSound from "../sounds/match-lose.mp3";
import { muteAllSoundsEffects, unMuteAllSoundsEffects } from "../helpers/gameHelpers";

export default function Sounds() {
	const [music] = useState(new Audio(musicSound));
	music.loop = true;
    music.autoplay = true;

	const [playSounds, setPlaySounds] = useState(false);
	const { soundEffectsValue } = useContext(GameContext);
	const [soundEffects, setSoundEffects] = soundEffectsValue;

	useEffect(() => {
		
        const mutedSuccess = new Audio(successSound);
        mutedSuccess.muted = true;
        const mutedFail = new Audio(failSound);
        mutedFail.muted = true;
        const mutedLost = new Audio(lostSound);
        mutedLost.muted = true;

        
        setSoundEffects({
			success: mutedSuccess,
			fail: mutedFail,
			lost: mutedLost,
		});

		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	function toggleSounds() {
		if (playSounds) {
			setPlaySounds(false);
			music.pause();
			muteAllSoundsEffects(soundEffects);
			return;
		}

		setPlaySounds(true);
		music.play();
		unMuteAllSoundsEffects(soundEffects);
	}

	return (
		<button id="toggle-audio" onClick={toggleSounds} aria-label="toggle sounds">
			<i
				className={`fa fa-volume-${playSounds ? "up" : "off"}`}
				aria-hidden="true"
			></i>
		</button>
	);
}
