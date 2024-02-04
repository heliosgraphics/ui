"use client"

import { useEffect, useState, createContext } from "react"
import type { LayoutProviderProps } from "./LayoutProvider.types"

const LayoutContext = createContext<LayoutProviderProps>({
	isActive: false,
	setActive: (_state: boolean) => null,
})

const LayoutProvider = (props) => {
	const [isActive, setActive] = useState<boolean>(false)
	const pathname = "TODO"

	useEffect(() => {
		setActive(false)
	}, [pathname])

	return (
		<LayoutContext.Provider
			value={{
				isActive,
				setActive,
			}}
		>
			{props.children}
		</LayoutContext.Provider>
	)
}

export { LayoutContext, LayoutProvider }
