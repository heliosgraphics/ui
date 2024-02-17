"use client"

import { useState, createContext } from "react"
import type { HeliosIntentionType, HeliosIconType } from "@heliosgraphics/ui"
import type { WorkshopProviderProps } from "./WorkshopContext.types"

const DEFAULT_COLOR = "gray" as const
const DEFAULT_INTENT = "advise" as const
const DEFAULT_ICON = "robot" as const
const DEFAULT_HEADER = true as const

const WorkshopContext = createContext<WorkshopProviderProps>({
	color: DEFAULT_COLOR,
	hasHeader: DEFAULT_HEADER,
	icon: DEFAULT_ICON,
	intent: DEFAULT_INTENT,
	setColor: () => null,
	setHeader: () => null,
	setIcon: () => null,
	setIntent: () => null,
})

const WorkshopProvider = (props) => {
	const [color, setColor] = useState<HeliosIntentionType>(DEFAULT_COLOR)
	const [intent, setIntent] = useState<HeliosIntentionType>(DEFAULT_INTENT)
	const [icon, setIcon] = useState<HeliosIconType>(DEFAULT_ICON)
	const [hasHeader, setHeader] = useState<boolean>(DEFAULT_HEADER)

	return (
		<WorkshopContext.Provider
			value={{
				color,
				hasHeader,
				icon,
				intent,
				setColor,
				setHeader,
				setIcon,
				setIntent,
			}}
		>
			{props.children}
		</WorkshopContext.Provider>
	)
}

export { WorkshopContext, WorkshopProvider }
