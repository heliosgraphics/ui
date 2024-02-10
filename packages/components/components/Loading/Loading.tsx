import classNames from "@sindresorhus/class-names"
import styles from "./Loading.module.css"
import type { FC } from "react"
import type { LoadingProps } from "./Loading.types"

const Loading: FC<LoadingProps> = ({ className, size }) => {
	const rSize = size / 2
	const cSize = rSize + 2
	const dashSize = size + cSize

	const loadingClasses: string = classNames(className, styles.loading, {
		[styles.loading32]: size === 10,
		[styles.loading64]: size === 20,
		[styles.loading128]: size === 40,
	})

	return (
		<svg className={loadingClasses} xmlns="http://www.w3.org/2000/svg" height={size + 4} width={size + 4}>
			<circle fill="none" strokeWidth={4} stroke="currentcolor" cx={cSize} cy={cSize} r={rSize} style={{ opacity: 0.25 }} />
			<circle
				fill="none"
				strokeWidth={4}
				stroke="currentcolor"
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
