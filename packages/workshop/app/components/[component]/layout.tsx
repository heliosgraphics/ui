"use client"

import { Flex } from "@heliosgraphics/ui"
// import { WorkshopContext } from "../../contexts/WorkshopContext"
// import { useContext } from "react"

export default function Home({ children }) {
	// const {hasPadding} = useContext(WorkshopContext)

	return (
		<Flex
			isColumn={true}
			gap={8}
			padding={[8, 16, 24]}
			withBackground={true}
			// withRadius={["none", "small", "normal"]}
		>
			{children}
		</Flex>
	)
}
