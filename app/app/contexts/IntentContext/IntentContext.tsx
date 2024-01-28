"use client"

import React, { useState, createContext } from "react"
import type { HeliosIntentionType } from "../../../../src"
import type { IntentProviderProps } from "./IntentContext.types"

const IntentContext = createContext<IntentProviderProps>({
	intent: "silent",
	setIntent: () => null,
})

const IntentProvider = (props) => {
	const [intent, setIntent] = useState<HeliosIntentionType>("silent")

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
