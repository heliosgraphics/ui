import type { HeliosAttributeMeta } from "../.."
import type { BrowserProps } from "./Browser.types"

export const meta: HeliosAttributeMeta<BrowserProps> = {
	_status: "experimental",
	_type: "layout",
	children: {
		type: "HeliosChildrenType",
		isOptional: true,
	},
	height: {
		type: "number",
		isOptional: true,
	},
	url: {
		type: "string",
		isOptional: true,
	},
	width: {
		type: "number",
		isOptional: true,
	},
}
