import type { FC } from "react"
import type { H6Props } from "./H6.types"

const H6: FC<H6Props> = (props) => {
	return <h6 {...props} className={`h6 ${props.className}`} data-component="Heading.H6" />
}

export { H6 }
