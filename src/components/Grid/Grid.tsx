import React from "react"
import Heading from "../Heading"
import classNames from "@sindresorhus/class-names"
import { GridProps } from "./Grid.types"

const Grid: React.FC<GridProps> = ({ columns, children }) => {
	const gridClasses = classNames("grid", {
		["grid-cols-${}"]: columns,
	})

	return <div className={gridClasses}>{children}</div>
}

export default Error
