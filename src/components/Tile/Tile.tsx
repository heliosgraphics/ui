import React from "react"
import classNames from "@sindresorhus/class-names"
import styles from "./Tile.module.css"
import Icon from "../Icon"
import Flex from "../Flex"
import type { TileProps } from "./Tile.types"
import type { FUIColors } from "@heliosgraphics/library/types/colors"

const getTileColor = (
	color,
): { iconColor: FUIColors; tileColor: FUIColors } => {
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

	const iconColor: FUIColors = ("dark-" + color) as FUIColors
	const tileColor: FUIColors = ("light-" + color) as FUIColors

	return { iconColor, tileColor }
}

const Tile: React.FC<TileProps> = ({
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
			backgroundColor={tileColor}
			isCentered={true}
			style={{
				height: size + "px",
				minWidth: size + "px",
				width: size + "px",
			}}
		>
			{hex && <div className={styles.tile__hex} style={inlineTileHexStyle} />}
			<Icon name={icon} size={size / 1.6} color={iconColor} />
		</Flex>
	)
}

export default Tile
