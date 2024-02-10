import classNames from "@sindresorhus/class-names"
import Flex from "../Flex"
import Icon from "../Icon"
import styles from "./Tile.module.css"
import type { FC } from "react"
import type { TileProps } from "./Tile.types"

const Tile: FC<TileProps> = ({ size, icon, color, isRounded, isRound }) => {
	const tileClasses = classNames(styles.tile, {
		["radius-2"]: isRounded,
		["radius-max"]: isRound,
	})

	const tileSize = {
		height: `${size}px`,
		width: `${size}px`,
		minWidth: `${size}px`,
	}

	return (
		<Flex className={tileClasses} isCentered={true} style={tileSize}>
			<Icon name={icon} size={size} />
		</Flex>
	)
}

export default Tile
