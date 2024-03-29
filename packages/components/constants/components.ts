import type { HeliosComponentItem } from ".."

// prettier-ignore i want these in a single line tabulated
export const COMPONENTS: Record<string, HeliosComponentItem> = {
	Alert: { status: "stable", type: "pattern" },
	Breadcrumb: { status: "nominal", type: "content" },
	Button: { status: "stable", type: "core" },
	ButtonGroup: { status: "stable", type: "core" },
	Checkbox: { status: "stable", type: "core" },
	Column: { status: "stable", type: "layout" },
	Confirm: { status: "stable", type: "pattern" },
	Content: { status: "nominal", type: "layout" },
	Details: { status: "nominal", type: "pattern" },
	Dialog: { status: "nominal", type: "pattern" },
	Donut: { status: "stable", type: "core" },
	Dot: { status: "stable", type: "core" },
	Dropdown: { status: "nominal", type: "core" },
	Flex: { status: "stable", type: "core" },
	Grid: { status: "nominal", type: "core" },
	Heading: { status: "nominal", type: "content" },
	Icon: { status: "nominal", type: "core" },
	Input: { status: "stable", type: "core" },
	Loading: { status: "stable", type: "core" },
	Main: { status: "nominal", type: "core" },
	Markdown: { status: "nominal", type: "content" },
	Masonry: { status: "experimental", type: "layout" },
	Menu: { status: "experimental", type: "layout" },
	MenuCategory: { status: "experimental", type: "layout" },
	MenuFilter: { status: "experimental", type: "layout" },
	MenuItem: { status: "experimental", type: "layout" },
	Navigation: { status: "experimental", type: "layout" },
	NavigationPanelButton: { status: "experimental", type: "layout" },
	Overlay: { status: "stable", type: "core" },
	Pie: { status: "stable", type: "core" },
	Pill: { status: "stable", type: "core" },
	Progress: { status: "stable", type: "core" },
	Radio: { status: "stable", type: "core" },
	Select: { status: "nominal", type: "core" },
	Separator: { status: "stable", type: "core" },
	Setup: { status: "stable", type: "layout" },
	Shimmer: { status: "nominal", type: "pattern" },
	Slider: { status: "experimental", type: "pattern" },
	Spacer: { status: "stable", type: "core" },
	Table: { status: "nominal", type: "content" },
	Text: { status: "stable", type: "content" },
	Textarea: { status: "stable", type: "core" },
	ThemeSwitcher: { status: "stable", type: "layout" },
	ThemeSwitcherLoading: { status: "stable", type: "layout" },
	Tile: { status: "nominal", type: "pattern" },
	Timestamp: { status: "nominal", type: "core" },
	Toggle: { status: "stable", type: "core" },
}
