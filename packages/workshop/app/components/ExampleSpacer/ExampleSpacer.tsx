"use client"

import { Spacer } from "@heliosgraphics/ui"
import type { FC } from "react"
import type { ExampleSpacerProps } from "./ExampleSpacer.types"

const ExampleSpacer: FC<ExampleSpacerProps> = () => {
	return <Spacer gap={24} />
}

export default ExampleSpacer
