import React from "react"
import type { FUITypographyUtility } from "@heliosgraphics/library/types/typography"

const Tiny: React.FC<FUITypographyUtility> = (props) => {
	return <small {...props} className={`tiny ${props.className}`} />
}

export default Tiny
