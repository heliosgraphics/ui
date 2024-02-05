"use client"

import { Pill } from "@heliosgraphics/ui"
import type { FC } from "react"
import type { ExamplePillProps } from "./ExamplePill.types"

const ExamplePill: FC<ExamplePillProps> = () => {
	return <Pill color="red" label="Pill" />
}

export default ExamplePill
