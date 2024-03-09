import styles from "./Cover.module.css"
import { getClasses } from "@heliosgraphics/utils"
import type { FC } from "react"
import type { CoverProps } from "./Cover.types"

const NUMBER = 96 as const

const Cover: FC<CoverProps> = () => {
	return (
		<div className={styles.cover}>
			{Array.from({ length: NUMBER }, (_, key) => {
				const randomNumber = Math.floor(Math.random() * 12) + 1
				const isRandom: boolean = key % randomNumber === 0
				const tileClasses: string = getClasses(styles.coverTile, { [styles.coverTileAlt]: isRandom })

				return <div key={key} className={tileClasses}></div>
			})}
		</div>
	)
}

export default Cover
