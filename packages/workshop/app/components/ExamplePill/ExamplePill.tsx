"use client"

import { Flex, Pill, Separator } from "@heliosgraphics/ui"
import { useContext, type FC } from "react"
import type { ExamplePillProps } from "./ExamplePill.types"
import { ColorContext } from "../../contexts/ColorContext"

const ExamplePill: FC<ExamplePillProps> = () => {
	const { color } = useContext(ColorContext)

	return (
		<Flex gap={8} isColumn={true}>
			<Flex gap={4} isWrapping={true}>
				<Pill color={color} label="Pill" />
				<Pill color={color} label="Small" isSmall={true} />
				<Pill color={color} label="Mono" isMono={true} />
				<Pill color={color} label="Mono Small" isSmall={true} isMono={true} />
			</Flex>
			<Separator isLight={true} />
			<Flex gap={4} isWrapping={true}>
				<Pill color={color} label="Pill" isDark={true} />
				<Pill color={color} label="Small" isSmall={true} isDark={true} />
				<Pill color={color} label="Mono" isMono={true} isDark={true} />
				<Pill color={color} label="Mono Small" isSmall={true} isMono={true} isDark={true} />
			</Flex>
		</Flex>
	)
}

export default ExamplePill
