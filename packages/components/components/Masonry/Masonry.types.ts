import type { HeliosChildrenType } from "../.."

export interface MasonryProps {
	children: HeliosChildrenType
	columns: [number, number, number]
	gap: [number, number, number]
	brakepoints: [number, number, number]
}
