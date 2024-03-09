"use client"

import { Flex, Toggle } from "@heliosgraphics/ui"
import { useContext, type FC } from "react"
import { WorkshopContext } from "../../contexts/WorkshopContext"
import type { DebugSelectorProps } from "./DebugSelector.types"

const DebugSelector: FC<DebugSelectorProps> = () => {
	const { hasCover, hasPadding, setPadding, hasHeader, hasMenu, setCover, setMenu, setHeader } =
		useContext(WorkshopContext)

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
	const onDebugCover = () => setCover(!hasCover)

	return (
		<Flex isColumn={true} gap={4}>
			<Toggle isSmall={true} intent="silent" onChange={onDebugCover} label="Cover" isChecked={hasCover} />
			<Toggle isSmall={true} intent="silent" onChange={onDebugHeader} label="Navigation" isChecked={hasHeader} />
			<Toggle isSmall={true} intent="silent" onChange={onDebugMenu} label="Menu" isChecked={hasMenu} />
			<Toggle isSmall={true} intent="silent" onChange={onDebugPadding} label="Padding" isChecked={hasPadding} />
			<Toggle isSmall={true} intent="danger" onChange={onDebugToggle} label="Debug Mode" isChecked={undefined} />
		</Flex>
	)
}

export default DebugSelector
