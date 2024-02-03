import React from "react"
import type { PProps } from "./P.types"

const P: React.FC<PProps> = (props) => {
	return (
		<p {...props} className={`p ${props.className}`} data-component="Text.P" />
	)
}

export default P
