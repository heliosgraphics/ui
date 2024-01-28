import "@heliosgraphics/fractures"
import "@heliosgraphics/fractures/dist/fractures.easings.css"
import "../../src/components.css"
import "../../src/components.markdown.css"
import { Setup } from "../../src"
import type { Metadata } from "next"

export const metadata: Metadata = {
	title: "Thebe Component Workshop",
}

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html lang="en">
			<head>
				<Setup />
			</head>
			<body>{children}</body>
		</html>
	)
}
