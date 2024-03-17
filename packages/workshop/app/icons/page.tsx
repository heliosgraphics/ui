"use client"

import { Flex, Input, Tile, Text, ICONS, type HeliosIconType } from "@heliosgraphics/ui"
import { useState, useContext, type ChangeEvent } from "react"
import { WorkshopContext } from "workshop/app/contexts/WorkshopContext"
import Page from "workshop/app/components/Page"

export default function Home() {
	const { icon, setIcon } = useContext(WorkshopContext)
	// const [emphasis, setEmphasis] = useState<HeliosEmphasisType>("primary")
	const [filter, setFilter] = useState<string>("")
	const onFilter = (event: ChangeEvent<HTMLInputElement>) => setFilter(event.target.value)
	const filteredIcons: Array<HeliosIconType> = ICONS?.filter((icon) => icon.includes(filter))

	return (
		<Page title="Icons">
			<Flex gap={8}>
				<Input label="Find an Icon" onChange={onFilter} value={filter} placeholder="Eg.: arrow" />
			</Flex>
			<Text type="small" emphasis="secondary">
				A work in progress 🥲
			</Text>
			<Flex isWrapping={true} gap={2}>
				{filteredIcons.map((ic, key) => {
					const onIconSet = () => setIcon(ic)
					const isActive: boolean = ic === icon

					return (
						<Tile
							key={key}
							onClick={onIconSet}
							color="gray"
							text={ic}
							icon={ic}
							size={64}
							isRounded={true}
							colorAccent={isActive ? "orange" : undefined}
						/>
					)
				})}
			</Flex>
		</Page>
	)
}
