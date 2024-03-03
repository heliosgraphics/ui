"use client"

import { useContext, type FC } from "react"
import Link from "next/link"
import { WorkshopContext } from "../../contexts/WorkshopContext"
import { Menu, MenuItem, Separator, COMPONENTS } from "@heliosgraphics/ui"

const WorkshopMenu: FC = () => {
	const { hasMenu } = useContext(WorkshopContext)

	return (
		hasMenu && (
			<Menu>
				<MenuItem title="Index" />
				<MenuItem title="About" />
				<MenuItem title="Pricing" />
				<Separator isLight={true} />
				<MenuItem title="CSS" />
				<MenuItem title="Colors" />
				<MenuItem title="Typography" />
				<Separator isLight={true} />
				<Link href="/component/Button">
					<MenuItem title="Button" />
				</Link>
				{/* {COMPONENTS?.map((component, key) => {
					return <MenuItem key={key} title={component} />
				})} */}
			</Menu>
		)
	)
}

export default WorkshopMenu
