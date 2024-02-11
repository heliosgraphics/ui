"use client"

import { Button, ButtonGroup, Flex, HeliosIconType, Pill, Separator } from "@heliosgraphics/ui"
import { ColorContext } from "../../contexts/ColorContext"
import { useState, useContext, type FC } from "react"
import type { ExamplePillProps } from "./ExamplePill.types"

const ExamplePill: FC<ExamplePillProps> = () => {
	const [isRounded, setRounded] = useState<boolean>(false)
	const [icon, setIcon] = useState<HeliosIconType | undefined>(undefined)

	const { color } = useContext(ColorContext)

	const onToggleRounded = () => setRounded(!isRounded)
	const onToggleIcon = () => setIcon(!icon ? "tag" : undefined)

	return (
		<Flex gap={12} isColumn={true}>
			<ButtonGroup>
				<Button intent="silent" value="Rounded" onClick={onToggleRounded} size="small" />
				<Button intent="silent" value="Icons" onClick={onToggleIcon} size="small" />
			</ButtonGroup>
			<Flex gap={4} isWrapping={true}>
				<Pill color={color} label="Pill" isRounded={isRounded} icon={icon} />
				<Pill color={color} label="Small" isSmall={true} isRounded={isRounded} icon={icon} />
				<Pill color={color} label="Mono" isMono={true} isRounded={isRounded} icon={icon} />
				<Pill color={color} label="Mono Small" isSmall={true} isMono={true} isRounded={isRounded} icon={icon} />
			</Flex>
			<Separator isLight={true} />
			<Flex gap={4} isWrapping={true}>
				<Pill color={color} label="Pill" isDark={true} isRounded={isRounded} icon={icon} />
				<Pill color={color} label="Small" isSmall={true} isDark={true} isRounded={isRounded} icon={icon} />
				<Pill color={color} label="Mono" isMono={true} isDark={true} isRounded={isRounded} icon={icon} />
				<Pill color={color} label="Mono Small" isSmall={true} isMono={true} isDark={true} isRounded={isRounded} icon={icon} />
			</Flex>
		</Flex>
	)
}

export default ExamplePill
