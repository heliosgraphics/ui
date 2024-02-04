import type { FC } from "react"
// import { getColor } from "../utils/color"
import type { PieProps, PieItem } from "./Pie.types"

const Pie: FC<PieProps> = ({ size, data }) => {
	const r: number = size / 4
	const whole = data?.reduce((a, b) => a + b.value, 0)
	const circumferencePercentage: number = (2 * Math.PI * r) / whole

	return (
		<svg height={size} width={size} viewBox={`0 0 ${size} ${size}`}>
			{data.map((item, key) => {
				const thisData: Array<PieItem> = data.slice(0, key)
				const thisSize = thisData?.reduce((a, b) => a + b.value, 0)
				const thisColor = "red" // `var(--${getColor(item.color)})`

				return (
					<circle
						key={key}
						r={size / 4}
						cx={size / 2}
						cy={size / 2}
						fill="transparent"
						stroke={thisColor}
						strokeDashoffset={-thisSize * circumferencePercentage}
						strokeWidth={size / 2}
						strokeDasharray={`${circumferencePercentage * item.value} ${
							circumferencePercentage * whole
						}`}
						transform={`rotate(-90) translate(-${size})`}
					/>
				)
			})}
		</svg>
	)
}

export default Pie
