import { Masonry as MasonryPlock } from "react-plock"
import { Children, type FC } from "react"
import type { MasonryProps } from "./Masonry.types"

const Masonry: FC<MasonryProps> = ({ children }) => {
	if (!children) return null

	const mappedChildren: Array<JSX.Element> | null | undefined = Children.map(children, (child) => (
		<div className="Row">{child}</div>
	))

	return (
		<MasonryPlock
			items={mappedChildren as Array<JSX.Element>}
			render={(item: any) => item}
			config={{
				columns: [3, 3, 3],
				gap: [4, 4, 4],
				media: [480, 640, 960],
			}}
		/>
	)
}

export { Masonry }
