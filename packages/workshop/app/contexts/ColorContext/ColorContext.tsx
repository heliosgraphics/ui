"use client"

import { useState, createContext } from "react"
import type { HeliosIntentionType } from "@heliosgraphics/ui"
import type { ColorProviderProps } from "./ColorContext.types"

const ColorContext = createContext<ColorProviderProps>({
	color: "purple",
	setColor: () => null,
})

const ColorProvider = (props) => {
	const [color, setColor] = useState<HeliosIntentionType>("purple")

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
