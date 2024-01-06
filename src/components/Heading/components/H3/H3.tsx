import React from "react"
import type { FUITypographyUtility } from "@heliosgraphics/library/types/typography"

const H3: React.FC<FUITypographyUtility> = (props) => {
	return <h3 {...props} className={`h3 ${props.className}`} />
}

export default H3
