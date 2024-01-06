import React from "react"

export interface LayoutProviderProps {
	isActive: boolean
	setActive: React.Dispatch<React.SetStateAction<boolean>>
}
