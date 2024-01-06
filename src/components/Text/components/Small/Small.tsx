import React from "react"
import type { FUITypographyUtility } from "@heliosgraphics/library/types/typography"

const Small: React.FC<FUITypographyUtility> = (props) => {
	return <small {...props} className={`small ${props.className}`} />
}

export default Small
