export default function Light({color}) {
	return (
		<svg>
			<circle cx="75" cy="75" r="60" fill={color} id="light" />
		</svg>
	);
}
