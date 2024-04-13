import type { HeliosAttributeMeta } from "../.."
import type { PieProps } from "./Pie.types"

export const meta: HeliosAttributeMeta<PieProps> = {
	_status: "stable",
	_type: "core",
	color: {
		type: "HeliosColors",
	},
	data: {
		type: "Array<PieItem>",
	},
	size: {
		type: "number",
	},
}
