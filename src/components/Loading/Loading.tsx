import React from "react"
import classNames from "@sindresorhus/class-names"
import styles from "./Loading.module.css"
import { getColor } from "../utils/color"
import type { FUIColors } from "@heliosgraphics/library/types/colors"

interface LoadingProps {
	color?: FUIColors
	className?: string
	size: 10 | 20 | 40
}

const Loading: React.FC<LoadingProps> = ({
	className,
	size,
	color = "gray",
}) => {
	const rSize = size / 2
	const cSize = rSize + 2
	const dashSize = size + cSize
	const circleColor = getColor(color as any)
	const circleColorVariable: string =
		color === "currentcolor" ? "currentcolor" : `var(--${circleColor})`

	const loadingClasses: string = classNames(className, styles.loading, {
		[styles.loading32]: size === 10,
		[styles.loading64]: size === 20,
		[styles.loading128]: size === 40,
	})

	return (
		<svg
			className={loadingClasses}
			xmlns="http://www.w3.org/2000/svg"
			height={size + 4}
			width={size + 4}
		>
			<circle
				fill="none"
				strokeWidth={4}
				stroke={circleColorVariable}
				cx={cSize}
				cy={cSize}
				r={rSize}
				style={{ opacity: 0.25 }}
			/>
			<circle
				fill="none"
				strokeWidth={4}
				stroke={circleColorVariable}
				strokeDasharray={dashSize}
				strokeLinecap="round"
				cx={cSize}
				cy={cSize}
				r={rSize}
			/>
		</svg>
	)
}

export default Loading
