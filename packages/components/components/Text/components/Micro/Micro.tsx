import type { FC } from "react"
import type { MicroProps } from "./Micro.types"

const Micro: FC<MicroProps> = (props) => {
	return <small {...props} className={`micro ${props.className}`} data-component="Text.Micro" />
}

export { Micro }
