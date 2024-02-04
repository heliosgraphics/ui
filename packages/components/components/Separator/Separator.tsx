import { SeparatorProps } from "./Separator.types"
import HorizontalSeparator from "./components/HorizontalSeparator"
import type { FC } from "react"
import VerticalSeparator from "./components/VerticalSeparator"

const Separator: FC<SeparatorProps> = (props) => {
	if (props.isVertical) {
		return <VerticalSeparator {...props} />
	} else {
		return <HorizontalSeparator {...props} />
	}
}

export default Separator
