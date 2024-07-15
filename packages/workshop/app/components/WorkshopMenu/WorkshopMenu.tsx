"use client"

import { useContext, useState, type FC, type ChangeEvent } from "react"
import Link from "next/link"
import { getStatus, TYPE_NAMES } from "@heliosgraphics/ui/constants/meta"
import { WorkshopContext } from "../../contexts/WorkshopContext"
import {
	Menu,
	MenuItem,
	MenuCategory,
	MenuFilter,
	COMPONENTS,
	type HeliosComponentCategoryType,
} from "@heliosgraphics/ui"
import { usePathname } from "next/navigation"

const WorkshopMenu: FC = () => {
	const pathname = usePathname()
	const [filteredComponents, setFilteredComponents] = useState<Array<string>>([...Object.keys(COMPONENTS)])
	const { hasMenu } = useContext(WorkshopContext)
	const [filter, setFilter] = useState<string>("")

	const onValueChange = (event?: ChangeEvent<HTMLInputElement>) => {
		const newValue: string = event?.target?.value || ""
		const newFiltered = Object.keys(COMPONENTS).filter((c) => c.toLowerCase().includes(newValue.toLowerCase()))

		setFilter(newValue)
		setFilteredComponents(newFiltered)
	}

	const onClear = (): void => {
		setFilter("")
		setFilteredComponents([...Object.keys(COMPONENTS)])
	}
	const groupedComponents: Record<string, Array<string>> = filteredComponents.reduce((acc: any, component) => {
		const { _type } = COMPONENTS[component]

		acc[_type] = acc[_type] || []
		acc[_type].push(component)

		return acc
	}, {})

	if (!hasMenu) return null

	return (
		<Menu>
			<MenuFilter value={filter} onChange={onValueChange} onClear={filter ? onClear : undefined} />
			{!filter && (
				<>
					<MenuCategory>
						<Link href="/">
							<MenuItem title="Index" isActive={pathname === "/"} />
						</Link>
						<Link href="/about">
							<MenuItem title="About" isActive={pathname === "/about"} />
						</Link>
						<Link href="/get-started">
							<MenuItem title="Get Started" isActive={pathname === "/get-started"} />
						</Link>
					</MenuCategory>
					<MenuCategory category="Concepts" isFolder={true}>
						<Link href="/colors">
							<MenuItem title="Colors" isActive={pathname === "/colors"} />
						</Link>
						<Link href="/typography">
							<MenuItem title="Typography" isActive={pathname === "/typography"} />
						</Link>
						<Link href="/icons">
							<MenuItem
								title="Icons"
								isActive={pathname === "/icons"}
								label="Experimental"
								labelColor="pink"
								labelIcon="bolt"
							/>
						</Link>
					</MenuCategory>
				</>
			)}

			{Object.entries(groupedComponents).map(([type, components]) => {
				return (
					<MenuCategory key={type} category={TYPE_NAMES[type as HeliosComponentCategoryType]} isFolder={true}>
						{components.map((component, key) => {
							const { status, color, icon, name } = getStatus(component)

							return (
								<Link href={`/components/${component}`} key={key}>
									<MenuItem
										title={component}
										isActive={pathname === `/components/${component}`}
										labelColor={color}
										labelHidden={true}
										label={status !== "stable" ? name : undefined}
										labelIcon={icon}
									/>
								</Link>
							)
						})}
					</MenuCategory>
				)
			})}
		</Menu>
	)
}

export default WorkshopMenu
