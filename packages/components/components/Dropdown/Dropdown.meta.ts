import type { HeliosAttributeMeta } from "../.."
import type { DropdownProps } from "./Dropdown.types"

export const meta: HeliosAttributeMeta<DropdownProps> = {
	_patterns: [
		{
			id: "ui-dropdown-buttongroup",
			description: "dropdown inside a buttongroup",
			content: `<ButtonGroup align={BUTTONGROUP_ALIGN}><Dropdown items={RESULT_LIST_ITEMS} position={DROPDOWN_POSITION}><Button value="Button" intent={INTENT} icon={ICON} size={SIZE} /></Dropdown></ButtonGroup>`,
		},
	],
	_status: "nominal",
	_type: "pattern",
	children: {
		type: "ReactElement<unknown>",
	},
	items: {
		type: "Array<ResultItem>",
	},
	isHidden: {
		type: "boolean",
		isOptional: true,
	},
	isDisabled: {
		type: "boolean",
		isOptional: true,
	},
	position: {
		type: '"left" | "right"',
		isOptional: true,
		default: "right",
	},
}
