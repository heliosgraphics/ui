"use client"

import styles from "./Cover.module.css"
import { getClasses } from "@heliosgraphics/utils"
import { useContext, type FC } from "react"
import { WorkshopContext } from "workshop/app/contexts/WorkshopContext"
import type { CoverProps } from "./Cover.types"
import { usePathname } from "next/navigation"

const NUMBER = 96 as const

const Cover: FC<CoverProps> = () => {
	const { hasCover } = useContext(WorkshopContext)
	const pathname = usePathname()

	if (!hasCover) return null

	const isComponentPage: boolean = pathname.includes("components")
	const coverClasses: string = getClasses(styles.cover, { [styles.coverAlt]: isComponentPage })

	return (
		<div className={coverClasses}>
			{Array.from({ length: NUMBER }, (_, key) => {
				const tileClasses: string = getClasses(styles.coverTile)

				return <div key={key} className={tileClasses}></div>
			})}
		</div>
	)
}

export default Cover
