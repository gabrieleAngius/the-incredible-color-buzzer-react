import { motion } from "framer-motion";
import { opacityEnter } from "../../helpers/animations";
export default function Step2() {
	return (
		<motion.div
			id="step-2"
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
			<h2>Le vite</h2>
			<p>
				In totale hai a disposizione 3 vite! Usale bene: perderle tutte e 3
				porterà alla finde della partita.
			</p>
			<p>
				<em>
					Piccolo aiuto: far scadere il tempo ti farà perdere una vita ma non
					diminuirà il tempo a disposizione!
				</em>
			</p>
			<p className="small-p">*maggiori info nella prossima sezione</p>
		</motion.div>
	);
}
