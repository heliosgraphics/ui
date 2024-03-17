import type { HeliosAttributeMeta, HeliosChildrenType } from "../.."

export interface MainProps {
	children: HeliosChildrenType
}

export const meta: HeliosAttributeMeta<MainProps> = {
	children: { type: "HeliosChildrenType" },
}
