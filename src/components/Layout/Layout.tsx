"use client"

import React from "react"
// import styles from "./Layout.module.css";
import { LayoutProvider } from "./contexts/LayoutProvider"
import type { LayoutProps } from "./Layout.types"

// deprecated
const Layout: React.FC<LayoutProps> = ({ children }) => {
	return (
		<LayoutProvider>
			<main>{children}</main>
		</LayoutProvider>
	)
}

export default Layout
