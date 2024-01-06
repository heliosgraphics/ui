import React from "react"
import type { FUITypographyUtility } from "@heliosgraphics/library/types/typography"

const P: React.FC<FUITypographyUtility> = (props) => {
	return <p {...props} className={`p ${props.className}`} />
}

export default P
