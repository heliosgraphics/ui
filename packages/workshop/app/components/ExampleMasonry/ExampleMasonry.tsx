"use client"

import { Alert, Flex, Masonry, Text } from "@heliosgraphics/ui"
import Box from "../Box"
import type { FC } from "react"
import type { ExampleMasonryProps } from "./ExampleMasonry.types"

const ExampleMasonry: FC<ExampleMasonryProps> = () => {
	return (
		<Flex isColumn={true} gap={16}>
			<Alert intent="silent" icon="info">
				WIP
			</Alert>
			<Masonry>
				<Text type="small">
					<Box>01</Box>
				</Text>
				<Text type="small">
					<Box height={400}>02</Box>
				</Text>
				<Text type="small">
					<Box height={240}>03</Box>
				</Text>
				<Text type="small">
					<Box>04</Box>
				</Text>
				<Text type="small">
					<Box>05</Box>
				</Text>
			</Masonry>
		</Flex>
	)
}

export default ExampleMasonry
