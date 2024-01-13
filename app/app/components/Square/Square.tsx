import React from "react"
import { Flex, Text } from "../../../../src"
import styles from "./Square.module.css"
import type { SquareProps } from "./Square.types"

const Square: React.FC<SquareProps> = ({ color, lightness, isRounded }) => {
	const style = {
		color: `hsl(var(--color) ${lightness}%)`,
		"--text-color": `hsl(var(--color) ${lightness - 50}%)`,
	} as React.CSSProperties

	return (
		<Flex style={style} className={styles.square} padding={2}>
			<Text type="tiny" fontWeight="medium">
				{lightness}
			</Text>
		</Flex>
	)
}

export default Square
