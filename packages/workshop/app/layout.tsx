import "@heliosgraphics/fractures"
import "@heliosgraphics/fractures/dist/fractures.easings.css"
import "@heliosgraphics/components/components.css"
import "@heliosgraphics/components/components.markdown.css"
import { Setup } from "@heliosgraphics/components"
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
