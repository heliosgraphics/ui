import React from "react"
import { Flex, Text } from "@heliosgraphics/ui"
import type { Headinglist, HeadingInfoType, HeadingInfoProps } from "./HeadingInfo.types"

// TODO tiny is not 18px in fractures
const HEADING_IFNO: Record<Headinglist, HeadingInfoType> = {
	0: {
		fontSize: 56,
		lineHeight: 64,
		fontFamily: "sans",
		fontWeight: "bold",
	},
	1: {
		fontSize: 36,
		lineHeight: 44,
		fontFamily: "sans",
		fontWeight: "bold",
	},
	2: {
		fontSize: 32,
		lineHeight: 40,
		fontFamily: "sans",
		fontWeight: "bold",
	},
	3: {
		fontSize: 28,
		lineHeight: 36,
		fontFamily: "sans",
		fontWeight: "bold",
	},
	4: {
		fontSize: 24,
		lineHeight: 32,
		fontFamily: "sans",
		fontWeight: "bold",
	},
	5: {
		fontSize: 20,
		lineHeight: 26,
		fontFamily: "sans",
		fontWeight: "bold",
	},
	6: {
		fontSize: 18,
		lineHeight: 24,
		fontFamily: "sans",
		fontWeight: "bold",
	},
	paragraph: {
		fontSize: 16,
		lineHeight: 24,
		fontFamily: "sans",
		fontWeight: "normal",
	},
	small: {
		fontSize: 14,
		lineHeight: 20,
		fontFamily: "sans",
		fontWeight: "normal",
	},
	tiny: {
		fontSize: 12,
		lineHeight: 18,
		fontFamily: "sans",
		fontWeight: "normal",
	},
	monoParagraph: {
		fontSize: 16,
		lineHeight: 24,
		fontFamily: "mono",
		fontWeight: "normal",
	},
	monoSmall: {
		fontSize: 14,
		lineHeight: 20,
		fontFamily: "mono",
		fontWeight: "normal",
	},
	monoTiny: {
		fontSize: 12,
		lineHeight: 18,
		fontFamily: "mono",
		fontWeight: "normal",
	},
}

const HeadingInfo: React.FC<HeadingInfoProps> = ({ children, level }) => {
	const { fontSize, fontFamily, fontWeight, lineHeight } = HEADING_IFNO[level]

	return (
		<Flex isColumn={true}>
			<Text type="tiny" fontFamily="mono">
				{fontSize} &middot; {lineHeight}
			</Text>
			<div
				className={`${fontFamily}`}
				style={{
					fontSize: `${fontSize}px`,
					fontWeight: fontWeight,
					lineHeight: `${lineHeight}px`,
				}}
			>
				{children}
			</div>
		</Flex>
	)
}

export default HeadingInfo
