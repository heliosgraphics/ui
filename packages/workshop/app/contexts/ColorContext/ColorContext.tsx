"use client"

import { useState, createContext } from "react"
import type { HeliosIntentionType } from "@heliosgraphics/ui"
import type { ColorProviderProps } from "./ColorContext.types"

const DEFAULT_COLOR = "gray" as const

const ColorContext = createContext<ColorProviderProps>({
	color: DEFAULT_COLOR,
	setColor: () => null,
})

const ColorProvider = (props) => {
	const [color, setColor] = useState<HeliosIntentionType>(DEFAULT_COLOR)

	return (
		<ColorContext.Provider
			value={{
				color,
				setColor,
			}}
		>
			{props.children}
		</ColorContext.Provider>
	)
}

export { ColorContext, ColorProvider }
