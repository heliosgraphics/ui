import type { FC } from "react"
import type { TinyProps } from "./Tiny.types"

const Tiny: FC<TinyProps> = (props) => {
	return <small {...props} className={`tiny ${props.className}`} data-component="Text.Tiny" />
}

export { Tiny }
