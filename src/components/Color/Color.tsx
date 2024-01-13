import type { ColorProps } from "./Color.types"

const SIZE = 64

const Color: React.FC<ColorProps> = ({ hsl }) => (
	<svg
		width="100%"
		height="100%"
		style={{
			height: `${SIZE}px`,
			minWidth: `${SIZE}px`,
			maxWidth: `${SIZE}px`,
			width: `${SIZE}px`,
		}}
		viewBox="0 0 20 20"
	>
		<rect
			fill={`var(--${colorScale || "purple"}-${colorTone ?? 500})`}
			width={20}
			height={20}
			rx={0}
		/>
	</svg>
)

export default Color
