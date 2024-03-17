import type { FlexProps, HeliosAttributeMeta } from "../.."

export interface NavigationBaseProps {
	withGlass?: boolean
}

export type NavigationProps = FlexProps & NavigationBaseProps

export const meta: HeliosAttributeMeta<NavigationBaseProps> = {
	_extends: ["FlexProps"],
	withGlass: {
		type: "string",
		isOptional: true,
	},
}
