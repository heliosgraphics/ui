"use client"

import styles from "./Cover.module.css"
import { getClasses } from "@heliosgraphics/utils"
import { Flex } from "@heliosgraphics/ui"
import { useContext, type FC } from "react"
import { ResponsiveRadiusType } from "@heliosgraphics/ui/components/Flex/Flex.types"
import { WorkshopContext } from "workshop/app/contexts/WorkshopContext"
import type { CoverProps } from "./Cover.types"
import { usePathname } from "next/navigation"

const Cover: FC<CoverProps> = () => {
	const { hasCover, hasPadding } = useContext(WorkshopContext)
	const pageRadius: ResponsiveRadiusType | undefined = hasPadding ? ["none", "small", "normal"] : undefined
	const pathname = usePathname()

	if (!hasCover) return null

	const isComponentPage: boolean = pathname.includes("components")
	const isHome: boolean = pathname === "/"

	const coverClasses: string = getClasses(styles.cover, {
		[styles.coverHome]: isHome,
		[styles.coverAlt]: isComponentPage,
	})

	return <Flex className={coverClasses} withRadius={pageRadius}>{` `}</Flex>
}

export default Cover
