"use client"

import { Flex } from "@heliosgraphics/ui"
import { getClasses } from "@heliosgraphics/utils"
import { ResponsiveRadiusType } from "@heliosgraphics/ui/components/Flex/Flex.types"
import { useContext, useCallback, useRef, useEffect, type FC } from "react"
import { usePathname } from "next/navigation"
import { WorkshopContext } from "workshop/app/_contexts/WorkshopContext"
import styles from "./Cover.module.css"

export const Cover: FC = () => {
	const canvasRef = useRef<HTMLCanvasElement | null>(null)
	const pathname = usePathname()
	const { hasCover, hasPadding } = useContext(WorkshopContext)

	const pageRadius: ResponsiveRadiusType | undefined = hasPadding ? ["none", "small", "normal"] : undefined
	const isComponentPage: boolean = pathname.includes("components")

	const coverClasses: string = getClasses(styles.cover, {
		[styles.coverAlt]: isComponentPage,
	})

	const drawGlitchSquare = (ctx: CanvasRenderingContext2D, x: number, y: number, size: number, opacity: number) => {
		const bgColor = getComputedStyle(document.documentElement).getPropertyValue("--ui-bg-disabled").trim()

		ctx.globalAlpha = opacity
		ctx.fillStyle = bgColor
		ctx.fillRect(x, y, size, size)
		ctx.globalAlpha = 1.0
	}

	const generateGlitchArt = useCallback((ctx: CanvasRenderingContext2D, width: number = 0, height: number = 0) => {
		ctx.clearRect(0, 0, width, height)
		const squareSize = 48
		const squares: Array<{ opacity: number; x: number; y: number }> = []

		for (let y = 0; y < height; y += squareSize) {
			for (let x = 0; x < width; x += squareSize) {
				if (Math.random() > 0.9) squares.push({ x, y, opacity: 0 })
			}
		}

		const animate = () => {
			ctx.clearRect(0, 0, width, height)
			squares.forEach((square) => {
				if (square.opacity < 0.75) {
					square.opacity += 0.05
				}

				drawGlitchSquare(ctx, square.x, square.y, squareSize, square.opacity)
			})

			requestAnimationFrame(animate)
		}

		animate()
	}, [])

	const onGenerate = useCallback(() => {
		const canvas: HTMLCanvasElement | null = canvasRef?.current
		const context = canvas?.getContext?.("2d")

		if (!canvas) return

		canvas.width = globalThis.innerWidth
		canvas.height = globalThis.innerHeight

		return generateGlitchArt(context, canvas.width, canvas.height)
	}, [generateGlitchArt])

	useEffect(() => onGenerate(), [hasCover, onGenerate])

	if (!hasCover) return null

	return (
		<Flex className={coverClasses} withRadius={pageRadius}>
			<canvas ref={canvasRef} />
		</Flex>
	)
}
