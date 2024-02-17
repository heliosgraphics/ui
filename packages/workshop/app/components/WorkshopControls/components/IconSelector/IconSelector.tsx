import { useContext, type FC } from "react"
import { Flex, Select, ICONS } from "@heliosgraphics/ui"
import { WorkshopContext } from "../../../../contexts/WorkshopContext"
import type { IconSelectorProps } from "./IconSelector.types"

const IconSelector: FC<IconSelectorProps> = () => {
	const { icon, setIcon } = useContext(WorkshopContext)

	const icons = ICONS.map((icon) => ({ name: icon, value: icon }))
	const onIconChange = (event) => setIcon(event.target.value)

	return (
		<Flex gap={4}>
			<Select label="Icon Selector" isLabelHidden={true} items={icons} onChange={onIconChange} selectedValue={icon} />
		</Flex>
	)
}

export default IconSelector
