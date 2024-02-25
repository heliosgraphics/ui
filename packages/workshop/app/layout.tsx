import "@heliosgraphics/fractures"
import "@heliosgraphics/fractures/dist/fractures.easings.css"
import "@heliosgraphics/ui/components.css"
import { Main, Setup } from "@heliosgraphics/ui"
import type { ReactNode } from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
	title: "Helios UI",
	description: "Helios visual language and abstraction system",
	icons: {
		icon: "/favicon.svg",
	},
	metadataBase: new URL("https://ui.helios.graphics"),
	openGraph: {
		images: "/1200x630-ui-image.png",
	},
}

export default function RootLayout({ children }: { children: ReactNode }) {
	return (
		<html lang="en" suppressHydrationWarning={true}>
			<head>
				<Setup />
			</head>
			<body>
				<Main withAlternativeBackground={true} gap={1}>
					{children}
				</Main>
			</body>
		</html>
	)
}
