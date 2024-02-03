import React from "react"
import type { H1Props } from "./H1.types"

const H1: React.FC<H1Props> = (props) => {
	return (
		<h1
			{...props}
			className={`h1 ${props.className}`}
			data-component="Heading.H1"
		/>
	)
}

export default H1
