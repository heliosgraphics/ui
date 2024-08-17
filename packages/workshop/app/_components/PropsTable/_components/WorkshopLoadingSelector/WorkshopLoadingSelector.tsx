"use client"

import { useContext, type FC } from "react"
import { Flex, Toggle } from "@heliosgraphics/ui"
import { WorkshopContext } from "workshop/app/_contexts/WorkshopContext"

export const WorkshopLoadingSelector: FC = () => {
	const { isLoading, setLoading } = useContext(WorkshopContext)

	const onLoadingToggle = () => setLoading(!isLoading)

	return (
		<Flex isCentered={true}>
			<Toggle
				intent="silent"
				isChecked={isLoading}
				label="Is Loading"
				isSmall={true}
				onChange={onLoadingToggle}
				isLabelHidden={true}
			/>
		</Flex>
	)
}
