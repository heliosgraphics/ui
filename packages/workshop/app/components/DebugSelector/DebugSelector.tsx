import { Toggle } from "../../../../src"
import type { DebugSelectorProps } from "./DebugSelector.types"
import type { FC } from "react"

const DebugSelector: FC<DebugSelectorProps> = () => {
	const onDebugToggle = () => {
		const hasDebug: boolean = document.body.classList.contains("debug")

		if (hasDebug) {
			document.body.classList.remove("debug")
		} else {
			document.body.classList.add("debug")
		}
	}

	return (
		<Toggle
			isSmall={true}
			intent="highlight"
			onChange={onDebugToggle}
			label="Debug Mode"
		/>
	)
}

export default DebugSelector