"use client"

import { useContext, type FC } from "react"
import { WorkshopContext } from "../../contexts/WorkshopContext"
import { Navigation, Icon } from "@heliosgraphics/ui"

const WorkshopHeader: FC = () => {
	const { hasHeader } = useContext(WorkshopContext)

	return (
		hasHeader && (
			<Navigation height={56}>
				<Icon name="eye" size={32} emphasis="primary" />
			</Navigation>
		)
	)
}

export default WorkshopHeader
