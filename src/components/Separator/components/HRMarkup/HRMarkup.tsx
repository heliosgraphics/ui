import React from "react"
import type { HRMarkupProps } from "./HRMarkup.types"

const HRMarkup: React.FC<HRMarkupProps> = (props) => {
	const { ...goodProps } = props

	return <hr {...goodProps} data-component="Separator" />
}

export default HRMarkup
