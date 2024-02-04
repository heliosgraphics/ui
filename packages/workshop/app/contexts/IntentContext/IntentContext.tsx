"use client"

import { useState, createContext } from "react"
import type { HeliosIntentionType } from "@heliosgraphics/components"
import type { IntentProviderProps } from "./IntentContext.types"

const IntentContext = createContext<IntentProviderProps>({
	intent: "advise",
	setIntent: () => null,
})

const IntentProvider = (props) => {
	const [intent, setIntent] = useState<HeliosIntentionType>("advise")

	return (
		<IntentContext.Provider
			value={{
				intent,
				setIntent,
			}}
		>
			{props.children}
		</IntentContext.Provider>
	)
}

export { IntentContext, IntentProvider }
