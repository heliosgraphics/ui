"use client"

import { useContext, useState, type FC, type ChangeEvent } from "react"
import Link from "next/link"
import { WorkshopContext } from "../../contexts/WorkshopContext"
import { Menu, MenuItem, MenuFilter, Separator, COMPONENTS } from "@heliosgraphics/ui"

const WorkshopMenu: FC = () => {
	const { hasMenu } = useContext(WorkshopContext)
	const [value, setValue] = useState<string>("")

	const onValueChange = (event: ChangeEvent<HTMLInputElement>) => setValue(event.target.value)

	return (
		hasMenu && (
			<Menu>
				<MenuFilter value={value} onChange={onValueChange} />
				<Link href="/">
					<MenuItem title="Index" />
				</Link>
				<MenuItem title="About" />
				<MenuItem title="Examples" />
				<MenuItem title="Pricing" />
				<Separator isLight={true} />
				<MenuItem title="CSS" />
				<MenuItem title="Colors" />
				<MenuItem title="Typography" />
				<Separator isLight={true} />
				{COMPONENTS?.map((component, key) => {
					return (
						<Link href={`/components/${component}`} key={key}>
							<MenuItem title={component} />
						</Link>
					)
				})}
			</Menu>
		)
	)
}

export default WorkshopMenu
