import type { BaseCheckboxProps } from "../Checkbox/Checkbox.types"
import type { HeliosAttributeMeta } from "../.."

export interface BaseToggleProps {}
export type ToggleProps = BaseToggleProps & BaseCheckboxProps

export const meta: HeliosAttributeMeta<BaseToggleProps> = {
	_status: "stable",
	_type: "core",
	_extends: ["BaseCheckboxProps"],
}
