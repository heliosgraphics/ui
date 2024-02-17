import { getFlexUtility, getSafeFlexProps } from "../Flex/Flex.utils"
import classNames from "@sindresorhus/class-names"
import type { ColumnProps } from "./Column.types"
import type { FC } from "react"

const Column: FC<ColumnProps> = (props) => {
	const mainFlexClasses = getFlexUtility({ ...props, isColumn: true })
	const columnClasses: string = classNames(mainFlexClasses, {
		["mx-auto"]: props.isColumnCentered,
	})

	const safeProps = getSafeFlexProps(props)
	const columnStyle = {
		maxWidth: "100%",
		width: `${props.width ?? 960}px`,
	}

	return <div {...safeProps} style={columnStyle} className={columnClasses} />
}

export default Column
