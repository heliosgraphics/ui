"use client"

import { useState, type FC } from "react"
import { Text, Flex, Select, Loading, EMPHASES, type HeliosEmphasisType } from "@heliosgraphics/ui"
import type { ExampleLoadingProps } from "./ExampleLoading.types"
import LiveComponent from "../LiveComponent"

const SAMPLE_CODE = `<Flex gap={4}>
	<Loading size={40} emphasis={emphasis} />
	<Loading size={20} emphasis={emphasis} />
	<Loading size={10} emphasis={emphasis} />
</Flex>`

const ExampleLoading: FC<ExampleLoadingProps> = () => {
	return <LiveComponent code={SAMPLE_CODE} />
}

export default ExampleLoading
