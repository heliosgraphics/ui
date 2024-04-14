import { Flex, Text } from "@heliosgraphics/ui"
import styles from "./Box.module.css"
import type { BoxProps } from "./Box.types"
import type { FC } from "react"

const Box: FC<BoxProps> = ({ children, height }) => {
	return (
		<Flex
			className={styles.box}
			padding={16}
			style={{
				height: height ? `${height}px` : "inherit",
			}}
		>
			<Text type="small" fontFamily="mono">
				{children}
			</Text>
		</Flex>
	)
}

export default Box
