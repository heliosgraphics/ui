import React from "react"
import type { H3Props } from "./H3.types"

const H3: React.FC<H3Props> = (props) => {
	return (
		<h3
			{...props}
			className={`h3 ${props.className}`}
			data-component="Heading.H3"
		/>
	)
}

export default H3
