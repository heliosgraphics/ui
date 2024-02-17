import type { FlexProps } from "../Flex/Flex.types"
import type { ReactNode } from "react"

export interface MainProps extends FlexProps {
	className?: string
	children: ReactNode
	withAlternativeBackground?: boolean
}
