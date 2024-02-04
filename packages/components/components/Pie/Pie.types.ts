export interface PieItem {
	color: string
	name?: string
	value: number
}

export interface PieProps {
	size: number
	data: Array<PieItem>
}
