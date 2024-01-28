import React from "react"
import classNames from "@sindresorhus/class-names"
import { GridProps } from "./Grid.types"

const Grid: React.FC<GridProps> = ({ columns, children }) => {
	const gridClasses = classNames("grid", {
		[`grid-cols-${columns}`]: columns,
	})

	return <div className={gridClasses}>{children}</div>
}

export default Grid
