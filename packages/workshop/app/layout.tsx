import "@heliosgraphics/fractures"
import "@heliosgraphics/fractures/dist/fractures.easings.css"
import "../../src/components.css"
import "../../src/components.markdown.css"
import { Setup } from "../../src"
import type { ReactNode } from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
	title: "Thebe Component Workshop",
}

export default function RootLayout({ children }: { children: ReactNode }) {
	return (
		<html lang="en" suppressHydrationWarning={true}>
			<head>
				<Setup />
			</head>
			<body>{children}</body>
		</html>
	)
}