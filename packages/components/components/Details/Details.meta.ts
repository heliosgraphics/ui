import type { HeliosAttributeMeta } from "../.."
import type { DetailsProps } from "./Details.types"

export const meta: HeliosAttributeMeta<DetailsProps> = {
	_status: "nominal",
	_type: "core",
	children: {
		type: "HeliosChildrenType",
	},
	isOpen: {
		type: "boolean",
		isOptional: true,
	},
	title: {
		type: "string",
	},
}
