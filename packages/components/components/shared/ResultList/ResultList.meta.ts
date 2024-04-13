import type { HeliosAttributeMeta } from "../../.."
import type { ResultListProps } from "./ResultList.types"

export const meta: HeliosAttributeMeta<ResultListProps> = {
	_status: "internal",
	_type: "core",
	items: {
		type: "Array<ResultItem>",
	},
}
