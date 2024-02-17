import "@heliosgraphics/fractures"
import "@heliosgraphics/fractures/dist/fractures.easings.css"
import "@heliosgraphics/ui/components.css"
import { Main, Setup } from "@heliosgraphics/ui"
import type { ReactNode } from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
	title: "Helios UI Workshop",
}

export default function RootLayout({ children }: { children: ReactNode }) {
	return (
		<html lang="en" suppressHydrationWarning={true}>
			<head>
				<Setup />
			</head>
			<body className="helios-scrollbar">
				<Main withAlternativeBackground={true} gap="px">
					{children}
				</Main>
			</body>
		</html>
	)
}
