import { Toggle } from "../../../../src"
import type { DebugSelectorProps } from "./DebugSelector.types"

const DebugSelector: React.FC<DebugSelectorProps> = () => {
	const onDebugToggle = () => {
		if (document.body.classList.contains("debug")) {
			document.body.classList.remove("debug")
		} else {
			document.body.classList.add("debug")
		}
	}

	return <Toggle intent="silent" onChange={onDebugToggle} label="Debug Mode" />
}

export default DebugSelector
