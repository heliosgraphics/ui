import React from "react"
import type { FUITypographyUtility } from "@heliosgraphics/library/types/typography"

const H2: React.FC<FUITypographyUtility> = (props) => {
	return <h2 {...props} className={`h2 ${props.className}`} />
}

export default H2
