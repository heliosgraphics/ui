"use client"

import React from "react"
// import styles from "./Layout.module.css";
import { LayoutProvider } from "./contexts/LayoutProvider"
import type { LayoutProps } from "./Layout.types"

// TODO @chrispuska Next and context will be dropped - this was an experimental version.
const Layout: React.FC<LayoutProps> = ({ children }) => {
	return (
		<LayoutProvider>
			<main>{children}</main>
		</LayoutProvider>
	)
}

export default Layout
