"use client"

import { Flex } from "@heliosgraphics/ui"
import { WorkshopProvider } from "../contexts/WorkshopContext"
import WorkshopNavigation from "./WorkshopNavigation"
import WorkshopMenu from "./WorkshopMenu"
import WorkshopContent from "./WorkshopContent"

export default function Home({ children }) {
	return (
		<WorkshopProvider>
			<WorkshopNavigation />
			<WorkshopMenu />
			<WorkshopContent>{children}</WorkshopContent>
		</WorkshopProvider>
	)
}
