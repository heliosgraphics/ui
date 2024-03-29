"use client"

import { useState, useEffect, createContext } from "react"
import type { HeliosIntentionType, HeliosIconType, HeliosColors, HeliosThemes } from "@heliosgraphics/ui"
import type { WorkshopProviderProps } from "./WorkshopContext.types"

const DEFAULT_COLOR = "gray" as const
const DEFAULT_COLOR_ACCENT = "orange" as const
const DEFAULT_COVER = true as const
const DEFAULT_HEADER = true as const
const DEFAULT_ICON = "robot" as HeliosIconType
const DEFAULT_ICON_ACCENT = "bolt" as HeliosIconType
const DEFAULT_INTENT = "advise" as const
const DEFAULT_MENU = true as const
const DEFAULT_PADDING = true as const

const WorkshopContext = createContext<WorkshopProviderProps>({
	color: DEFAULT_COLOR,
	colorAccent: DEFAULT_COLOR_ACCENT,
	hasCover: DEFAULT_COVER,
	hasHeader: DEFAULT_HEADER,
	hasMenu: DEFAULT_MENU,
	hasPadding: DEFAULT_PADDING,
	icon: DEFAULT_ICON as HeliosIconType,
	iconAccent: DEFAULT_ICON_ACCENT as HeliosIconType,
	intent: DEFAULT_INTENT,
	theme: "system",
	setColor: () => null,
	setColorAccent: () => null,
	setCover: () => null,
	setHeader: () => null,
	setIcon: () => null,
	setIconAccent: () => null,
	setIntent: () => null,
	setMenu: () => null,
	setPadding: () => null,
})

const WorkshopProvider = (props) => {
	const [color, setColor] = useState<HeliosColors>(DEFAULT_COLOR)
	const [colorAccent, setColorAccent] = useState<HeliosColors>(DEFAULT_COLOR_ACCENT)
	const [intent, setIntent] = useState<HeliosIntentionType>(DEFAULT_INTENT)
	const [icon, setIcon] = useState<HeliosIconType>(DEFAULT_ICON)
	const [iconAccent, setIconAccent] = useState<HeliosIconType>(DEFAULT_ICON_ACCENT)
	const [hasCover, setCover] = useState<boolean>(DEFAULT_COVER)
	const [hasHeader, setHeader] = useState<boolean>(DEFAULT_HEADER)
	const [hasMenu, setMenu] = useState<boolean>(DEFAULT_MENU)
	const [hasPadding, setPadding] = useState<boolean>(DEFAULT_PADDING)
	const [theme, setTheme] = useState<HeliosThemes>("system")

	const handleThemeChange = () => {
		const theme: HeliosThemes = document.documentElement.getAttribute("data-theme") as HeliosThemes

		return setTheme(theme)
	}

	useEffect(() => handleThemeChange())

	return (
		<WorkshopContext.Provider
			value={{
				color,
				colorAccent,
				hasCover,
				hasHeader,
				hasMenu,
				hasPadding,
				icon,
				iconAccent,
				intent,
				setColor,
				setColorAccent,
				setCover,
				setHeader,
				setIcon,
				setIconAccent,
				setIntent,
				setMenu,
				setPadding,
				theme,
			}}
		>
			{props.children}
		</WorkshopContext.Provider>
	)
}

export { WorkshopContext, WorkshopProvider }
