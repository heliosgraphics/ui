import React from "react"
import type { FUITypographyUtility } from "@heliosgraphics/library/types/typography"

const H5: React.FC<FUITypographyUtility> = (props) => {
	return <h5 {...props} className={`h5 ${props.className}`} />
}

export default H5
