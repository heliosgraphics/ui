"use client"

import { useState, createContext } from "react"
import type { HeliosIntentionType, HeliosIconType, HeliosColors } from "@heliosgraphics/ui"
import type { WorkshopProviderProps } from "./WorkshopContext.types"

const DEFAULT_COLOR = "gray" as const
const DEFAULT_INTENT = "advise" as const
const DEFAULT_ICON = "robot" as HeliosIconType
const DEFAULT_HEADER = false as const
const DEFAULT_MENU = false as const
const DEFAULT_PADDING = false as const

const WorkshopContext = createContext<WorkshopProviderProps>({
	color: DEFAULT_COLOR,
	hasHeader: DEFAULT_HEADER,
	hasPadding: DEFAULT_PADDING,
	hasMenu: DEFAULT_MENU,
	icon: DEFAULT_ICON as HeliosIconType,
	intent: DEFAULT_INTENT,
	setColor: () => null,
	setHeader: () => null,
	setMenu: () => null,
	setIcon: () => null,
	setPadding: () => null,
	setIntent: () => null,
})

const WorkshopProvider = (props) => {
	const [color, setColor] = useState<HeliosColors>(DEFAULT_COLOR)
	const [intent, setIntent] = useState<HeliosIntentionType>(DEFAULT_INTENT)
	const [icon, setIcon] = useState<HeliosIconType>(DEFAULT_ICON)
	const [hasHeader, setHeader] = useState<boolean>(DEFAULT_HEADER)
	const [hasMenu, setMenu] = useState<boolean>(DEFAULT_MENU)
	const [hasPadding, setPadding] = useState<boolean>(DEFAULT_PADDING)

	return (
		<WorkshopContext.Provider
			value={{
				color,
				hasHeader,
				hasPadding,
				icon,
				hasMenu,
				intent,
				setColor,
				setPadding,
				setHeader,
				setMenu,
				setIcon,
				setIntent,
			}}
		>
			{props.children}
		</WorkshopContext.Provider>
	)
}

export { WorkshopContext, WorkshopProvider }
