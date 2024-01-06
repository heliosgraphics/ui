import React from "react"
import styles from "./Progress.module.css"
import type { ProgressProps } from "./Progress.types"

const Progress: React.FC<ProgressProps> = ({ max = 100, value = 0 }) => (
	<progress className={styles.progress} max={max} value={value} />
)

export default Progress
