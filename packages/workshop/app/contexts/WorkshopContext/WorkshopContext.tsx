"use client"

import { useState, createContext } from "react"
import type { HeliosIntentionType, HeliosIconType } from "@heliosgraphics/ui"
import type { WorkshopProviderProps } from "./WorkshopContext.types"

const DEFAULT_COLOR = "gray" as const

const WorkshopContext = createContext<WorkshopProviderProps>({
	color: DEFAULT_COLOR,
	setColor: () => null,
})

const WorkshopProvider = (props) => {
	const [color, setColor] = useState<HeliosIntentionType>(DEFAULT_COLOR)
	const [intent, setIntent] = useState<HeliosIntentionType>("advise")
	const [icon, setIcon] = useState<HeliosIconType>("robot")

	return (
		<WorkshopContext.Provider
			value={{
				intent,
				setIntent,
				color,
				setColor,
				icon,
				setIcon,
			}}
		>
			{props.children}
		</WorkshopContext.Provider>
	)
}

export { WorkshopContext, WorkshopProvider }
