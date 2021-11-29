import { useContext, useEffect, useState } from "react";
import { GameContext } from "./game/GameContext";
import musicSound from "../sounds/gamemusic.mp3";
import successSound from "../sounds/success-sound.mp3";
import failSound from "../sounds/fail-round.mp3";
import lostSound from "../sounds/match-lose.mp3";

export default function Sounds() {
    const [music] = useState(new Audio(musicSound))
	music.loop = true;
    
    const [playSounds, setPlaySounds] = useState(false);
    const {soundEffectsValue} = useContext(GameContext);
    const [soundEffects, setSoundEffects] = soundEffectsValue;
    
    useEffect(() => {
        setSoundEffects({
            success: new Audio(successSound),
            fail: new Audio(failSound),
            lost: new Audio(lostSound),
        })
    }, [])
    
    
	function toggleSounds() {
        if(playSounds) {
            setPlaySounds(false);
            music.pause();
            muteAllSoundsEffects();
            return;
        }
        
        setPlaySounds(true);
        music.play();
        unMuteAllSoundsEffects();
	}

    function muteAllSoundsEffects() {
        for(let sound in soundEffects) {
            soundEffects[sound].muted = true;
        }
    }

    function unMuteAllSoundsEffects() {
        for(let sound in soundEffects) {
            soundEffects[sound].muted = false;
        }
    }

	return (
		<button id="toggle-audio" onClick={toggleSounds} aria-label="toggle sounds">
			<i className={`fa fa-volume-${playSounds ? "up" : "off"}`} aria-hidden="true"></i>
		</button>
	);
}
