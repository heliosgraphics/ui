import type { HeliosAttributeMeta } from "../.."
import type { TabsProps } from "./Tabs.types"

export const meta: HeliosAttributeMeta<TabsProps> = {
	_status: "experimental",
	_type: "layout",
	active: {
		type: "number",
		isOptional: true,
	},
	items: {
		type: "Array<string>",
	},
	sections: {
		type: "Array<ReactNode>",
	},
}
