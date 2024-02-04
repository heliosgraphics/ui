import { Flex, Text } from "@heliosgraphics/ui"
import styles from "./Square.module.css"
import type { SquareProps } from "./Square.types"
import type { FC, CSSProperties } from "react"

const Square: FC<SquareProps> = ({ lightness, color }) => {
	const style = {
		color: `hsl(var(--color) ${lightness}%)`,
		"--text-color": `hsl(var(--color) ${lightness - 40}%)`,
	} as CSSProperties

	return (
		<Flex style={style} className={styles.square}>
			<Text type="tiny" fontWeight="medium" className={styles.squareNote}>
				L{lightness}
			</Text>
		</Flex>
	)
}

export default Square
