import React from "react"
import type { SpacerProps } from "./Spacer.types"

const Spacer: React.FC<SpacerProps> = ({ gap }) => {
	return <div style={{ height: `${gap ?? 0}px` }} />
}

export default Spacer
