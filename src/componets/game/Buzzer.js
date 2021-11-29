export default function Buzzer({ color, callback }) {
	
    const buzzerColor = color ? color : "grey";

    const style = {
        backgroundColor: buzzerColor,
        border: `3px solid ${buzzerColor}`
    }
    
    return (
		<button
			className="radio"
			style= {style}
			onClick={() => callback(buzzerColor)}
		></button>
	);
}
