import type { FC } from "react"
import type { SmallProps } from "./Small.types"

const Small: FC<SmallProps> = (props) => {
	return <small {...props} className={`small ${props.className}`} data-component="Text.Small" />
}

export default Small
