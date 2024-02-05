"use client"

import type { FC } from "react"
import { Masonry, Text } from "@heliosgraphics/ui"
import type { ExampleMasonryProps } from "./ExampleMasonry.types"

const ExampleMasonry: FC<ExampleMasonryProps> = () => {
	return (
		<Masonry>
			<Text type="small">01</Text>
			<Text type="small">02</Text>
			<Text type="small">03</Text>
			<Text type="small">04</Text>
			<Text type="small">05</Text>
			<Text type="small">06</Text>
		</Masonry>
	)
}

export default ExampleMasonry
