import classNames from "@sindresorhus/class-names"
import { Icon, Text, Flex } from "../.."
import styles from "./Tile.module.css"
import { useId, type FC } from "react"
import type { TileProps } from "./Tile.types"

const Tile: FC<TileProps> = ({ size, text, icon, iconAccent, color, colorAccent, isRounded, isRound }) => {
	const tileId: string = useId()

	const iconColor: string = `hsl(var(--${color}-hue), var(--${color}-saturation), 50%)`
	const tileColor: string = `hsla(var(--${color}-hue), var(--${color}-saturation), 50%, 0.25)`
	const tileColorAccent: string = `hsla(var(--${colorAccent}-hue), var(--${colorAccent}-saturation), 50%, 0.15)`

	const tileClasses = classNames(styles.tile, {
		[styles.tileLarge]: size >= 48,
		["radius-normal"]: isRounded,
		["radius-max"]: isRound,
	})

	const tileSize = {
		color: iconColor,
		height: `${size}px`,
		minWidth: `${size}px`,
		width: `${size}px`,
	}

	const accentIconStyle = {
		color: tileColor,
	}

	return (
		<Flex className={tileClasses} isCentered={true} isColumn={true} style={tileSize}>
			<svg width="100%" height="100%" viewBox="0 0 ${size} ${size}" className={styles.tile__background}>
				<linearGradient id={tileId}>
					<stop stopColor={tileColor} offset="0%" />
					{colorAccent && <stop stopColor={tileColorAccent} offset="100%" />}
				</linearGradient>
				<rect fill={`url(#${tileId})`} x={0} y={0} width={size} height={size} rx={isRound ? size : isRounded ? 8 : 0} />
			</svg>
			<Icon name={icon} size={size * 0.5} />
			{iconAccent && (
				<Flex style={accentIconStyle} isCentered={true}>
					<Icon name={iconAccent} size={size * 1} className={styles.tile__iconAccent} />
				</Flex>
			)}
			{text && (
				<Text type="small" fontFamily="mono" lineClamp={1}>
					{text}
				</Text>
			)}
		</Flex>
	)
}

export default Tile
