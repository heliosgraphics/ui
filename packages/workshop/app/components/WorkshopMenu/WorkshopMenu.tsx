"use client"

import { useContext, type FC } from "react"
import { WorkshopContext } from "../../contexts/WorkshopContext"
import { NavigationPanel } from "@heliosgraphics/ui"

const WorkshopMenu: FC = () => {
	const { hasMenu } = useContext(WorkshopContext)

	return hasMenu && <NavigationPanel>zzz</NavigationPanel>
}

export default WorkshopMenu
