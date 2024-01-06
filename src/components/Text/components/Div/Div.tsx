import React from "react"
import type { FUITypographyUtility } from "@heliosgraphics/library/types/typography"

const Div: React.FC<FUITypographyUtility> = (props) => {
	return <div {...props} className={`p ${props.className}`} />
}

export default Div
