import styles from "./Progress.module.css"
import type { FC } from "react"
import type { ProgressProps } from "./Progress.types"

const Progress: FC<ProgressProps> = ({ max = 100, value = 0 }) => (
	<progress className={styles.progress} max={max} value={value} />
)

export default Progress
