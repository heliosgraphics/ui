import React from "react"
import type { FUITypographyUtility } from "@heliosgraphics/library/types/typography"

const H4: React.FC<FUITypographyUtility> = (props) => {
	return <h4 {...props} className={`h4 ${props.className}`} />
}

export default H4
