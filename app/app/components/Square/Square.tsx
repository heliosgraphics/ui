import React from "react"
import { Flex, Text } from "../../../../src"
import styles from "./Square.module.css"
import type { SquareProps } from "./Square.types"

const Square: React.FC<SquareProps> = ({ lightness, color }) => {
	const style = {
		color: `hsl(var(--color) ${lightness}%)`,
		"--text-color": `hsl(var(--color) ${lightness - 40}%)`,
	} as React.CSSProperties

	return (
		<Flex style={style} className={styles.square}>
			<Text type="tiny" fontWeight="medium" className={styles.squareNote}>
				L{lightness}
			</Text>
		</Flex>
	)
}

export default Square
