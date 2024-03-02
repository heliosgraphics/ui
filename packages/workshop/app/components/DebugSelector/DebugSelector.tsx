import { Flex, Toggle } from "@heliosgraphics/ui"
import { useContext, type FC } from "react"
import { WorkshopContext } from "../../contexts/WorkshopContext"
import type { DebugSelectorProps } from "./DebugSelector.types"

const DebugSelector: FC<DebugSelectorProps> = () => {
	const { hasPadding, setPadding, hasHeader, hasMenu, setMenu, setHeader } = useContext(WorkshopContext)

	const onDebugToggle = () => {
		const hasDebug: boolean = document?.body?.classList?.contains?.("debug")
		if (hasDebug) {
			document.body.classList.remove("debug")
		} else {
			document.body.classList.add("debug")
		}
	}

	const onDebugHeader = () => setHeader(!hasHeader)
	const onDebugMenu = () => setMenu(!hasMenu)
	const onDebugPadding = () => setPadding(!hasPadding)

	return (
		<Flex isColumn={true} gap={4}>
			<Toggle isSmall={true} intent="advise" onChange={onDebugToggle} label="Debug Mode" isChecked={undefined} />
			<Toggle isSmall={true} intent="advise" onChange={onDebugHeader} label="Header" isChecked={hasHeader} />
			<Toggle isSmall={true} intent="advise" onChange={onDebugMenu} label="Menu" isChecked={hasMenu} />
			<Toggle isSmall={true} intent="advise" onChange={onDebugPadding} label="Padding" isChecked={hasPadding} />
		</Flex>
	)
}

export default DebugSelector
