import "@heliosgraphics/fractures"
import "@heliosgraphics/fractures/dist/fractures.easings.css"
import "@heliosgraphics/ui/components.css"
import { Main, Setup } from "@heliosgraphics/ui"
import type { ReactNode } from "react"
import type { Metadata } from "next"
import { WorkshopProvider } from "./contexts/WorkshopContext"
import WorkshopNavigation from "./components/WorkshopNavigation"
import WorkshopMenu from "./components/WorkshopMenu"
import WorkshopContent from "./components/WorkshopContent"
import Cover from "./components/Cover"
import { Analytics } from "@vercel/analytics/react"

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
				<WorkshopProvider>
					<Main>
						<WorkshopNavigation />
						<WorkshopMenu />
						<WorkshopContent>
							<Cover />
							{children}
						</WorkshopContent>
					</Main>
					<Analytics />
				</WorkshopProvider>
			</body>
		</html>
	)
}
