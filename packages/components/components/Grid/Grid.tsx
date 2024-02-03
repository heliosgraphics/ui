import { GridProps } from "./Grid.types"
import classNames from "@sindresorhus/class-names"
import type { FC } from "react"

const Grid: FC<GridProps> = ({ columns, children }) => {
	const gridClasses = classNames("grid", {
		[`grid-cols-${columns}`]: columns,
	})

	return <div className={gridClasses}>{children}</div>
}

export default Grid
