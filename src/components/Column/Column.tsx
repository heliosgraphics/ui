import React from "react"
import classNames from "@sindresorhus/class-names"
import Flex from "../Flex"
import type { ColumnProps } from "./Column.types"

const Column: React.FC<ColumnProps> = (props) => {
	const columnClasses: string = classNames(props.className, {
		["mx-auto"]: props.isColumnCentered,
	})

	// TODO @chrispuska Should not duplicate the centered prop
	const { isColumnCentered, ...safeProps } = props

	const columnStyle = {
		maxWidth: "100%",
		width: `${props.width ?? 960}px`,
	}

	return <Flex style={columnStyle} className={columnClasses} {...safeProps} />
}

export default Column
