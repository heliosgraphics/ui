"use client"

import { useContext, useState, type FC, type ChangeEvent } from "react"
import Link from "next/link"
import { WorkshopContext } from "../../contexts/WorkshopContext"
import {
	Menu,
	MenuItem,
	MenuCategory,
	MenuFilter,
	COMPONENTS,
	type HeliosComponentStatusType,
	type HeliosComponentCategoryType,
	HeliosColors,
	HeliosIconType,
} from "@heliosgraphics/ui"
import { usePathname } from "next/navigation"

const STATUS_COLORS: Record<HeliosComponentStatusType, HeliosColors> = {
	experimental: "pink",
	nominal: "gray",
	stable: "green",
}

const STATUS_ICONS: Record<HeliosComponentStatusType, HeliosIconType> = {
	experimental: "bolt",
	nominal: "bolt",
	stable: "check",
}

const STATUS_NAMES: Record<HeliosComponentStatusType, string> = {
	experimental: "WIP",
	nominal: "Ok",
	stable: "Stable",
}

const TYPE_NAMES: Record<HeliosComponentCategoryType, string> = {
	content: "Content",
	pattern: "Pattern",
	core: "Core",
	layout: "Layout",
}

const WorkshopMenu: FC = () => {
	const pathname = usePathname()
	const [filteredComponents, setFilteredComponents] = useState<Array<string>>([...Object.keys(COMPONENTS)])
	const { hasMenu } = useContext(WorkshopContext)
	const [filter, setFilter] = useState<string>("")

	const onValueChange = (event: ChangeEvent<HTMLInputElement>) => {
		const newValue: string = event.target.value
		const newFiltered = Object.keys(COMPONENTS).filter((c) => c.toLowerCase().includes(newValue.toLowerCase()))

		setFilter(newValue)
		setFilteredComponents(newFiltered)
	}

	const onClear = (): void => {
		setFilter("")
		setFilteredComponents([...Object.keys(COMPONENTS)])
	}
	const groupedComponents: Record<string, Array<string>> = filteredComponents.reduce((acc, component) => {
		const { type } = COMPONENTS[component]

		acc[type] = acc[type] || []
		acc[type].push(component)

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
					<MenuCategory category="Pages" isFolder={false}>
						<Link href="/colors">
							<MenuItem title="Colors" isActive={pathname === "/colors"} />
						</Link>
						<Link href="/typography">
							<MenuItem title="Typography" isActive={pathname === "/typography"} />
						</Link>
						<Link href="/icons">
							<MenuItem title="Icons" isActive={pathname === "/icons"} />
						</Link>
					</MenuCategory>
				</>
			)}

			{Object.entries(groupedComponents).map(([type, components]) => {
				return (
					<MenuCategory key={type} category={TYPE_NAMES[type]} isFolder={true}>
						{components.map((component, key) => {
							const { status } = COMPONENTS[component]
							const statusColor = STATUS_COLORS[status]
							const statusIcon = STATUS_ICONS[status]

							return (
								<Link href={`/components/${component}`} key={key}>
									<MenuItem
										title={component}
										isActive={pathname === `/components/${component}`}
										labelColor={statusColor}
										labelHidden={true}
										label={status !== "stable" && STATUS_NAMES[status]}
										labelIcon={statusIcon}
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
