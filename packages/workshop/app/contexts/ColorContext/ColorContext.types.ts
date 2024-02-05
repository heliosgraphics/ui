import type { SetStateAction, Dispatch } from 'react'
import type { HeliosColors } from "@heliosgraphics/ui"

export interface ColorProviderProps {
	color: HeliosColors
	setColor: Dispatch<SetStateAction<HeliosColors>>
}
