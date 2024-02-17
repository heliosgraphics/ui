import type { FlexProps } from "../Flex/Flex.types"
import type { ReactNode } from "react"

export interface MainProps extends FlexProps {
	offsetTop?: number
	withAlternativeBackground?: boolean
}
