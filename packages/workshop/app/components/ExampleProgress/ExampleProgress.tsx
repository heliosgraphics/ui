"use client"

import { Progress } from "@heliosgraphics/ui"
import type { FC } from "react"
import type { ExampleProgressProps } from "./ExampleProgress.types"

const ExampleProgress: FC<ExampleProgressProps> = () => {
	return <Progress max={100} value={24} />
}

export default ExampleProgress
