"use client"

import { useContext, useState, type FC, type ChangeEvent } from "react"
import Link from "next/link"
import { WorkshopContext } from "../../contexts/WorkshopContext"
import { Menu, MenuItem, MenuCategory, MenuSeparator, MenuFilter, COMPONENTS } from "@heliosgraphics/ui"
import { usePathname } from "next/navigation"

const WorkshopMenu: FC = () => {
	const pathname = usePathname()
	const [filteredComponents, setFilteredComponents] = useState<Array<string>>([...COMPONENTS])
	const { hasMenu } = useContext(WorkshopContext)
	const [value, setValue] = useState<string>("")

	const onValueChange = (event: ChangeEvent<HTMLInputElement>) => {
		const newValue: string = event.target.value
		const newFiltered = COMPONENTS.filter((c) => c.toLowerCase().includes(newValue.toLowerCase()))

		setValue(newValue)
		setFilteredComponents(newFiltered)
	}

	if (!hasMenu) return null

	return (
		<Menu>
			<MenuFilter value={value} onChange={onValueChange} />
			<Link href="/">
				<MenuItem title="Index" isActive={pathname === "/"} />
			</Link>
			<Link href="/about">
				<MenuItem title="About" isActive={pathname === "/about"} />
			</Link>
			<Link href="/get-started">
				<MenuItem title="Get Started" isActive={pathname === "/get-started"} />
			</Link>
			<MenuSeparator />
			<MenuCategory category="Pages" />
			<Link href="/colors">
				<MenuItem title="Colors" isActive={pathname === "/colors"} />
			</Link>
			<Link href="/typography">
				<MenuItem title="Typography" isActive={pathname === "/typography"} />
			</Link>
			<MenuCategory category="Components" />
			{filteredComponents?.map((component, key) => {
				return (
					<Link href={`/components/${component}`} key={key}>
						<MenuItem title={component} isActive={pathname === `/components/${component}`} />
					</Link>
				)
			})}
		</Menu>
	)
}

export default WorkshopMenu
