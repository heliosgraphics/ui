import { ShimmerProps } from "./Shimmer.types"
import classNames from "@sindresorhus/class-names"
import styles from "./Shimmer.module.css"
import type { FC } from "react"

const Shimmer: FC<ShimmerProps> = ({ isRounded, paddingTop, paddingBottom, height, width }) => {
	const shimmerDivClasses: string = classNames({
		["radius-max"]: isRounded,
		["radius-3"]: !isRounded,
	})

	return (
		<div
			className={styles.shimmer}
			style={{
				height: height + "px",
				paddingTop: (paddingTop ?? 0) + "px",
				paddingBottom: (paddingBottom ?? 0) + "px",
				width: width + "px",
			}}
		>
			<div className={shimmerDivClasses} />
		</div>
	)
}

export default Shimmer
