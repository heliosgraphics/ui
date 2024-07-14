import type { HeliosAttributeMeta } from "../.."
import type { BaseToggleProps } from "./Toggle.types"

export const meta: HeliosAttributeMeta<BaseToggleProps> = {
	_patterns: [
		{
			id: "ui-toggle-default",
			description: "default",
			content: `<Toggle isChecked={IS_CHECKED} intent={INTENT} isDisabled={IS_DISABLED} label="Suicide Burn" onChange={FUNCTION}/>`,
		},
	],
	_status: "stable",
	_type: "core",
	_extends: ["BaseCheckboxProps"],
}
