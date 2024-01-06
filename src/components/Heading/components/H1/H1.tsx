import React from "react"
import type { FUITypographyUtility } from "@heliosgraphics/library/types/typography"

const H1: React.FC<FUITypographyUtility> = (props) => {
	return <h1 {...props} className={`h1 ${props.className}`} />
}

export default H1
