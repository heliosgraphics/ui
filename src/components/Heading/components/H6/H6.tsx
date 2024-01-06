import React from "react"
import type { FUITypographyUtility } from "@heliosgraphics/library/types/typography"

const H6: React.FC<FUITypographyUtility> = (props) => {
	return <h6 {...props} className={`h6 ${props.className}`} />
}

export default H6
