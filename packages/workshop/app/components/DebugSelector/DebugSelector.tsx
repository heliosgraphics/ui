import { Toggle } from "@heliosgraphics/ui"
import type { DebugSelectorProps } from "./DebugSelector.types"
import { useContext, type FC } from "react"
import { WorkshopContext } from "../../contexts/WorkshopContext"

const DebugSelector: FC<DebugSelectorProps> = () => {
	const { hasHeader, setHeader } = useContext(WorkshopContext)

	const onDebugToggle = () => {
		const hasDebug: boolean = document?.body?.classList?.contains?.("debug")
		if (hasDebug) {
			document.body.classList.remove("debug")
		} else {
			document.body.classList.add("debug")
		}
	}

	const onDebugHeader = () => setHeader(!hasHeader)

	return (
		<>
			<Toggle isSmall={true} intent="advise" onChange={onDebugToggle} label="Debug Mode" isChecked={undefined} />
			<Toggle isSmall={true} intent="advise" onChange={onDebugHeader} label="Header" isChecked={hasHeader} />
		</>
	)
}

export default DebugSelector
