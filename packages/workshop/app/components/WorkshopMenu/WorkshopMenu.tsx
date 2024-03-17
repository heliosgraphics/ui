"use client"

import { useContext, useState, type FC, type ChangeEvent } from "react"
import Link from "next/link"
import { WorkshopContext } from "../../contexts/WorkshopContext"
import {
	Menu,
	MenuItem,
	MenuCategory,
	MenuSeparator,
	MenuFilter,
	COMPONENTS,
	type HeliosComponentStatusType,
	type HeliosComponentCategoryType,
	HeliosColors,
	HeliosIconType,
} from "@heliosgraphics/ui"
import { usePathname } from "next/navigation"

const STATUS_COLORS: Record<HeliosComponentStatusType, HeliosColors> = {
	experimental: "purple",
	nominal: "pink",
	stable: "blue",
}

const STATUS_ICONS: Record<HeliosComponentStatusType, HeliosIconType> = {
	experimental: "bolt",
	nominal: "bullseye",
	stable: "tag",
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

	if (!hasMenu) return null

	return (
		<Menu>
			<MenuFilter value={filter} onChange={onValueChange} onClear={filter ? onClear : undefined} />
			{!filter && (
				<>
					<Link href="/">
						<MenuItem title="Index" isActive={pathname === "/"} />
					</Link>
					<Link href="/get-started">
						<MenuItem title="Get Started" isActive={pathname === "/get-started"} />
					</Link>
					{/* <Link href="/products">
						<MenuItem title="Products" isActive={pathname === "/products"} />
					</Link> */}
					<Link href="/about">
						<MenuItem title="About" isActive={pathname === "/about"} />
					</Link>
					<MenuSeparator />
					<MenuCategory category="Pages" />
					<Link href="/colors">
						<MenuItem title="Colors" isActive={pathname === "/colors"} />
					</Link>
					<Link href="/typography">
						<MenuItem title="Typography" isActive={pathname === "/typography"} />
					</Link>
					<Link href="/icons">
						<MenuItem title="Icons" isActive={pathname === "/icons"} />
					</Link>
				</>
			)}
			<MenuCategory category="Components" />
			{filteredComponents?.map((component, key) => {
				const { status, type } = COMPONENTS[component]
				const pillType = TYPE_NAMES[type]
				const statusType = STATUS_COLORS[status]
				const statusIcon = STATUS_ICONS[status]

				return (
					<Link href={`/components/${component}`} key={key}>
						<MenuItem
							title={component}
							isActive={pathname === `/components/${component}`}
							label={pillType}
							labelColor={status === "stable" ? "green" : status === "experimental" ? "red" : "gray"}
							labelHidden={false}
							labelIcon={statusIcon}
						/>
					</Link>
				)
			})}
		</Menu>
	)
}

export default WorkshopMenu
