"use client"

import { Masonry as MasonryPlock } from "react-plock"
import { Children, type FC } from "react"
import type { MasonryProps } from "./Masonry.types"

const Masonry: FC<MasonryProps> = ({ children, columns, gap, brakepoints }) => {
	if (!children) return null

	const mappedChildren: Array<JSX.Element> | null | undefined = Children.map(children, (child) => (
		<div className="Row">{child}</div>
	))

	return (
		<MasonryPlock
			items={mappedChildren as Array<JSX.Element>}
			render={(item: any) => item}
			config={{
				columns: columns,
				gap: gap,
				media: brakepoints,
			}}
		/>
	)
}

export { Masonry }
