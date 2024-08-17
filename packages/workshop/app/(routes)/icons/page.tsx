"use client"

import { Flex, Input, Tile, ICONS, type HeliosIconType } from "@heliosgraphics/ui"
import { useState, useContext, type ChangeEvent } from "react"
import { WorkshopContext } from "workshop/app/_contexts/WorkshopContext"
import { Page } from "workshop/app/_components/Page"

export default function IconsPage() {
	const { icon, setIcon } = useContext(WorkshopContext)
	// const [emphasis, setEmphasis] = useState<HeliosEmphasisType>("primary")
	const [filter, setFilter] = useState<string>("")
	const onFilter = (event?: ChangeEvent<HTMLInputElement>) => setFilter(event?.target?.value || "")
	const filteredIcons: Array<HeliosIconType> = ICONS?.filter((icon) => icon.includes(filter))

	return (
		<Page title="Icons" labelText="Work in Progress" labelIcon="bolt" labelColor="pink">
			<Flex gap={8}>
				<Input label="Find an Icon" onChange={onFilter} value={filter} placeholder="Eg.: arrow" />
			</Flex>
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
