import classNames from "@sindresorhus/class-names"
import Flex from "../Flex"
import type { ColumnProps } from "./Column.types"
import type { FC } from "react"

const Column: FC<ColumnProps> = (props) => {
	const columnClasses: string = classNames(props.className, {
		["mx-auto"]: props.isColumnCentered,
	})

	const { isColumnCentered, ...safeProps } = props
	const columnStyle = {
		maxWidth: "100%",
		width: `${props.width ?? 960}px`,
	}

	return <Flex style={columnStyle} className={columnClasses} {...safeProps} />
}

export default Column
