import { motion } from "framer-motion";
import { opacityEnter } from "../../helpers/animations";
export default function Step1() {
	
	return (
		<motion.div
			className="step-container"
			variants={opacityEnter}
			exit="out"
			animate="in"
			initial="out"
			transition={{
				delay: .3,
				duration: .8
			}}
		>
			<h2>Come giocare</h2>
			<p>
				Il gioco consiste nel selezionare (tramite uno dei 4 bottoni) il colore
				del quale si è illuminata la luce centrale,{" "}
				<strong>prima che il tempo finisca.</strong>
			</p>
			<p>
				<em>
					Attenzione, selezionare un bottone prima che la luce si sia accesa
					porterà alla perdita del round, quindi fai attenzione a premere al
					momento giusto!
				</em>
			</p>
		</motion.div>
	);
}
