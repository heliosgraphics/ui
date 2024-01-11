"use client"

import React, { useEffect, useState, createContext } from "react"
import { usePathname } from "next/navigation"
import type { LayoutProviderProps } from "./LayoutProvider.types"

const LayoutContext = createContext<LayoutProviderProps>({
	isActive: false,
	setActive: (_state: boolean) => null,
})

const LayoutProvider = (props) => {
	const [isActive, setActive] = useState<boolean>(false)
	const pathname = usePathname()

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
