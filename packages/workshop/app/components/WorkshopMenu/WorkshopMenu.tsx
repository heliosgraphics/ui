"use client"

import { useContext, useState, type FC, type ChangeEvent } from "react"
import Link from "next/link"
import { WorkshopContext } from "../../contexts/WorkshopContext"
import { Menu, MenuItem, MenuFilter, Separator, COMPONENTS } from "@heliosgraphics/ui"
import { usePathname } from "next/navigation"

const WorkshopMenu: FC = () => {
	const pathname = usePathname()
	const { hasMenu } = useContext(WorkshopContext)
	const [value, setValue] = useState<string>("")

	const onValueChange = (event: ChangeEvent<HTMLInputElement>) => setValue(event.target.value)

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
			<Link href="/license">
				<MenuItem title="License" isActive={pathname === "/license"} />
			</Link>
			<Separator isLight={true} />
			<Link href="/colors">
				<MenuItem title="Colors" isActive={pathname === "/colors"} />
			</Link>
			<Link href="/typography">
				<MenuItem title="Typography" isActive={pathname === "/typography"} />
			</Link>
			<Separator isLight={true} />
			{COMPONENTS?.map((component, key) => {
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
