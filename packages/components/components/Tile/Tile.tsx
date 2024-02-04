import classNames from "@sindresorhus/class-names"
import Flex from "../Flex"
import Icon from "../Icon"
import styles from "./Tile.module.css"
import type { FC } from "react"
import type { TileProps } from "./Tile.types"

const getTileColor = (color): { iconColor: string; tileColor: string } => {
	switch (color) {
		case "white":
			return {
				iconColor: "gray",
				tileColor: "white",
			}
		case "gray":
			return {
				iconColor: "gray",
				tileColor: "lightest-gray",
			}
	}

	const iconColor: string = ("dark-" + color) as string
	const tileColor: string = ("light-" + color) as string

	return { iconColor, tileColor }
}

const Tile: FC<TileProps> = ({
	size,
	hex,
	icon,
	color,
	isRounded,
	isRound,
}) => {
	const { iconColor, tileColor } = getTileColor(color)

	const tileClasses = classNames(styles.tile, {
		["radius-2"]: isRounded,
		["radius-max"]: isRound,
	})

	const inlineTileHexStyle = {
		height: `${size}px`,
		width: `${size}px`,
		minWidth: `${size}px`,
		background: `linear-gradient(${hex}, transparent)`,
	}

	return (
		<Flex
			className={tileClasses}
			isCentered={true}
			style={{
				height: size + "px",
				minWidth: size + "px",
				width: size + "px",
			}}
		>
			{hex && <div className={styles.tile__hex} style={inlineTileHexStyle} />}
			<Icon name={icon} size={size / 1.6} />
		</Flex>
	)
}

export default Tile
