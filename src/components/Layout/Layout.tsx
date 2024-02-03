"use client"

// import styles from "./Layout.module.css";
import { LayoutProvider } from "./contexts/LayoutProvider"
import type { FC } from "react"
import type { LayoutProps } from "./Layout.types"

// deprecated
const Layout: FC<LayoutProps> = ({ children }) => {
	return (
		<LayoutProvider>
			<main>{children}</main>
		</LayoutProvider>
	)
}

export default Layout
