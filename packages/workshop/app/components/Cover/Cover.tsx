"use client"

import styles from "./Cover.module.css"
import { getClasses } from "@heliosgraphics/utils"
import { Flex } from "@heliosgraphics/ui"
import { useContext, type FC } from "react"
import { ResponsiveRadiusType } from "@heliosgraphics/ui/components/Flex/Flex.types"
import { WorkshopContext } from "workshop/app/contexts/WorkshopContext"
import { usePathname } from "next/navigation"
import type { CoverProps } from "./Cover.types"
import React, { useRef, useEffect } from "react"

const Cover: FC<CoverProps> = () => {
	const canvasRef = useRef(null)
	const pathname = usePathname()
	const { hasCover, hasPadding } = useContext(WorkshopContext)

	const pageRadius: ResponsiveRadiusType | undefined = hasPadding ? ["none", "small", "normal"] : undefined
	const isComponentPage: boolean = pathname.includes("components")

	const coverClasses: string = getClasses(styles.cover, {
		[styles.coverAlt]: isComponentPage,
	})

	useEffect(() => {
		const canvas = canvasRef?.current
		const context = canvas?.getContext("2d")

		const drawGlitchSquare = (ctx, x, y, size) => {
			const bgColor = getComputedStyle(document.documentElement).getPropertyValue("--ui-bg").trim()

			ctx.fillStyle = bgColor
			ctx.fillRect(x, y, size, size)
		}

		if (!canvas) return

		const generateGlitchArt = (ctx, width, height) => {
			ctx.clearRect(0, 0, width, height)
			const squareSize = 48
			const spacing = 0

			for (let y = 0; y < height; y += squareSize + spacing) {
				for (let x = 0; x < width; x += squareSize + spacing) {
					if (Math.random() > 0.9) {
						drawGlitchSquare(ctx, x, y, squareSize)
					}
				}
			}
		}

		canvas.width = globalThis.innerWidth
		canvas.height = globalThis.innerHeight

		return generateGlitchArt(context, canvas.width, canvas.height)
	}, [canvasRef, hasCover])

	if (!hasCover) return null

	return (
		<Flex className={coverClasses} withRadius={pageRadius}>
			<canvas ref={canvasRef} style={{ display: "block" }} />
		</Flex>
	)
}

export default Cover
