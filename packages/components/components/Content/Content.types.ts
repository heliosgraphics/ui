import type { ColumnProps, HeliosAttributeMeta } from "../.."

export interface BaseContentProps { }
export type ContentProps = BaseContentProps & ColumnProps

export const meta: HeliosAttributeMeta<BaseContentProps> = {
	_extends: ["ColumnProps"],
}
