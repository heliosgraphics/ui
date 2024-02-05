"use client"

import type { FC } from "react"
import { Tile } from "@heliosgraphics/ui"
import type { ExampleTileProps } from "./ExampleTile.types"

const ExampleTile: FC<ExampleTileProps> = () => {
	return <Tile color="red" icon="arrow-left" size={32} />
}

export default ExampleTile
