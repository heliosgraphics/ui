import React from "react"
import { SeparatorProps } from "./Separator.types"
import VerticalSeparator from "./components/VerticalSeparator"
import HorizontalSeparator from "./components/HorizontalSeparator"

const Separator: React.FC<SeparatorProps> = (props) => {
	if (props.isVertical) {
		return <VerticalSeparator {...props} />
	} else {
		return <HorizontalSeparator {...props} />
	}
}

export default Separator
