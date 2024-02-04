import type { Dispatch, SetStateAction } from "react"

export interface LayoutProviderProps {
	isActive: boolean
	setActive: Dispatch<SetStateAction<boolean>>
}
