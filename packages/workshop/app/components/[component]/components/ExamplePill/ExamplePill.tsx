"use client"

import { Button, ButtonGroup, Flex, Pill, Separator, type HeliosSizeType } from "@heliosgraphics/ui"
import { useState, useContext, type FC } from "react"
import { WorkshopContext } from "workshop/app/contexts/WorkshopContext"
import LiveComponent from "workshop/app/components/[component]/components/LiveComponent"
import type { ExamplePillProps } from "./ExamplePill.types"

const ExamplePill: FC<ExamplePillProps> = () => {
	const [isRounded, setRounded] = useState<boolean>(false)
	const [hasIcon, setIcon] = useState<boolean>(false)
	const [label, setLabel] = useState<boolean>(false)
	const [size, setSize] = useState<HeliosSizeType>("normal")

	const { color, icon } = useContext(WorkshopContext)

	const onToggleRounded = () => setRounded(!isRounded)
	const onToggleIcon = () => setIcon(!hasIcon)
	const onToggleLabel = () => setLabel(!label)
	const onToggleSize = () => setSize(size === "normal" ? "small" : size === "small" ? "tiny" : "normal")

	return (
		<>
			<Separator isLight={true} />
			<Flex gap={12} isColumn={true} padding={16}>
				<Flex gap={4} isWrapping={true}>
					<Pill
						color={color}
						label="Pill"
						isLabelHidden={label}
						isRounded={isRounded}
						icon={hasIcon ? icon : undefined}
						size={size}
					/>
					<Pill
						color={color}
						label="Mono"
						isLabelHidden={label}
						isMono={true}
						isRounded={isRounded}
						icon={hasIcon ? icon : undefined}
						size={size}
					/>
					<Pill
						color={color}
						label="Pill"
						isLabelHidden={label}
						isDark={true}
						isRounded={isRounded}
						icon={hasIcon ? icon : undefined}
						size={size}
					/>
					<Pill
						color={color}
						label="Mono"
						isLabelHidden={label}
						isMono={true}
						isDark={true}
						isRounded={isRounded}
						icon={hasIcon ? icon : undefined}
						size={size}
					/>
				</Flex>
				<ButtonGroup>
					<Button intent="silent" value="Rounded" onClick={onToggleRounded} size="small" />
					<Button intent="silent" value="Icons" onClick={onToggleIcon} size="small" />
					<Button intent="silent" value="Size" onClick={onToggleSize} size="small" />
					<Button intent="silent" value="Label" onClick={onToggleLabel} size="small" />
				</ButtonGroup>
			</Flex>
		</>
	)
}

export default ExamplePill
