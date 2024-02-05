"use client"

import { Shimmer } from "@heliosgraphics/ui"
import type { FC } from "react"
import type { ExampleShimmerProps } from "./ExampleShimmer.types"

const ExampleShimmer: FC<ExampleShimmerProps> = () => {
	return <Shimmer height={20} width={120} />
}

export default ExampleShimmer
