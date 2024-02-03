import React from "react"
import type { TinyProps } from "./Tiny.types"

const Tiny: React.FC<TinyProps> = (props) => {
	return (
		<small
			{...props}
			className={`tiny ${props.className}`}
			data-component="Text.Tiny"
		/>
	)
}

export default Tiny
