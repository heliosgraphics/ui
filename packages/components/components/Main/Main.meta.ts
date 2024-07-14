import type { HeliosAttributeMeta } from "../.."
import type { MainProps } from "./Main.types"

export const meta: HeliosAttributeMeta<MainProps> = {
	_patterns: [
		{
			id: "ui-main-default",
			description: "default",
			content: `<Main>{CHILDREN}</Main>`,
		},
	],
	_status: "nominal",
	_type: "layout",
	children: { type: "HeliosChildrenType" },
}
