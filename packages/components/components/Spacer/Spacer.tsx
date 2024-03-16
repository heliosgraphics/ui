import type { FC } from "react"
import type { SpacerProps } from "./Spacer.types"

const Spacer: FC<SpacerProps> = ({ gap }) => {
	return <div style={{ height: `${gap ?? 0}px` }} />
}

export { Spacer }
