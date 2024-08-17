import { Flex, Text } from "@heliosgraphics/ui"
import styles from "./Square.module.css"
import type { SquareProps } from "./Square.types"
import type { FC, CSSProperties } from "react"

export const Square: FC<SquareProps> = ({ lightness }) => {
	const style = {
		color: `hsl(var(--color) ${lightness}%)`,
		"--text-color": `hsl(var(--color) ${lightness - 40}%)`,
	} as CSSProperties

	const lineStyle = {
		background: `linear-gradient(to right, hsl(var(--color) ${lightness - 10}%), hsl(var(--color) ${lightness - 20}%))`,
	} as CSSProperties

	return (
		<Flex style={style} className={styles.square} isCentered={true} isColumn={true}>
			<Flex isColumn={true}>
				<Text type="tiny" fontFamily="mono" fontWeight="medium" className={styles.squareNote}>
					L{lightness}
				</Text>
			</Flex>
			<div style={lineStyle} className={styles.squareLine}></div>
		</Flex>
	)
}
