"use client"

import { Alert, Flex, Input, Tile, ICONS, type HeliosIconType } from "@heliosgraphics/ui"
import { useState, useContext, type FC, type ChangeEvent } from "react"
import { WorkshopContext } from "workshop/app/contexts/WorkshopContext"
import type { ExampleIconProps } from "./ExampleIcon.types"

const ExampleIcon: FC<ExampleIconProps> = () => {
	const { icon, setIcon } = useContext(WorkshopContext)
	// const [emphasis, setEmphasis] = useState<HeliosEmphasisType>("primary")
	const [filter, setFilter] = useState<string>("")
	const onFilter = (event: ChangeEvent<HTMLInputElement>) => setFilter(event.target.value)
	const filteredIcons: Array<HeliosIconType> = ICONS?.filter((icon) => icon.includes(filter))

	// const items = EMPHASES.map((emphasis) => {
	// 	return { name: emphasis, value: emphasis }
	// })

	// const onEmphasisChange = (event) => setEmphasis(event.target.value)

	return (
		<Flex isColumn={true} gap={16}>
			x
		</Flex>
	)
}

export default ExampleIcon
