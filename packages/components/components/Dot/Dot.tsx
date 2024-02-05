import { useId, useMemo } from "react"
import styles from "./Dot.module.css"
import type { DotProps } from "./Dot.types"
import type { FC } from "react"

const Dot: FC<DotProps> = ({ colorAccent, size = 8, color = "blue" }) => {
	const dotId: string = useId()
	const dotColor: string = `hsla(var(--${color}-hue), var(--${color}-saturation), 50%, 0.5)`
	const dotColorAccent: string = `hsla(var(--${color}-hue), var(--${color}-saturation), 50%, 0.25)`

	const dotStyle = {
		height: size + "px",
		maxHeight: size + "px",
		maxWidth: size + "px",
		width: size + "px",
	}

	// "--dotColor": dotColor,
	// "--dotColorAccent": dotColor,

	return (
		<div className={styles.dot} style={dotStyle}>
			<svg width="100%" height="100%" style={{}} viewBox="0 0 20 20">
				<linearGradient id={dotId}>
					<stop stopColor={`var(--${dotColorAccent})`} offset="0%" />
					<stop stopColor={`var(--${dotColor})`} offset="100%" />
				</linearGradient>
				<circle fill={`url(#${dotId})`} cx={10} cy={10} r={10} />
			</svg>
		</div>
	)
}

export default Dot
