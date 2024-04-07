import type { HeliosAttributeMeta, HeliosChildrenType } from "../.."

export interface MainProps {
	children: HeliosChildrenType
}

export const meta: HeliosAttributeMeta<MainProps> = {
	_status: "nominal",
	_type: "layout",
	children: { type: "HeliosChildrenType" },
}
