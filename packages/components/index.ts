// components
export { default as Alert } from "./components/Alert"
export { default as Breadcrumb } from "./components/Breadcrumb"
export { default as Button } from "./components/Button"
export { default as ButtonGroup } from "./components/ButtonGroup"
export { default as Checkbox } from "./components/Checkbox"
export { default as Column } from "./components/Column"
export { default as Confirm } from "./components/Confirm"
export { default as Content } from "./components/Content"
export { default as Details } from "./components/Details"
export { default as Dialog } from "./components/Dialog"
export { default as Donut } from "./components/Donut"
export { default as Dot } from "./components/Dot"
export { default as Dropdown } from "./components/Dropdown"
export { default as Flex } from "./components/Flex"
export { default as Grid } from "./components/Grid"
export { default as Heading } from "./components/Heading"
export { default as Icon } from "./components/Icon"
export { default as Input } from "./components/Input"
export { default as Loading } from "./components/Loading"
export { default as Main } from "./components/Main"
export { default as Markdown } from "./components/Markdown"
export { default as Masonry } from "./components/Masonry"
export { default as Menu } from "./components/Menu"
export { default as MenuCategory } from "./components/MenuCategory"
export { default as MenuFilter } from "./components/MenuFilter"
export { default as MenuItem } from "./components/MenuItem"
export { default as MenuSeparator } from "./components/MenuSeparator"
export { default as Navigation } from "./components/Navigation"
export { default as NavigationPanelButton } from "./components/NavigationPanelButton"
export { default as Overlay } from "./components/Overlay"
export { default as Pie } from "./components/Pie"
export { default as Pill } from "./components/Pill"
export { default as Progress } from "./components/Progress"
export { default as Radio } from "./components/Radio"
export { default as Select } from "./components/Select"
export { default as Separator } from "./components/Separator"
export { default as Setup } from "./components/Setup"
export { default as Shimmer } from "./components/Shimmer"
export { default as Slider } from "./components/Slider"
export { default as Spacer } from "./components/Spacer"
export { default as Table } from "./components/Table"
export { default as Tabs } from "./components/Tabs"
export { default as Text } from "./components/Text"
export { default as Textarea } from "./components/Textarea"
export { default as ThemeSwitcher } from "./components/ThemeSwitcher"
export { default as ThemeSwitcherLoading } from "./components/ThemeSwitcherLoading"
export { default as Tile } from "./components/Tile"
export { default as Timestamp } from "./components/Timestamp"
export { default as Toggle } from "./components/Toggle"
export type { BreadCrumbItem } from "./components/Breadcrumb"
export type { ButtonGroupProps } from "./components/ButtonGroup"
export type { ButtonProps } from "./components/Button"
export type { ColumnProps } from "./components/Column"
export type { FlexProps } from "./components/Flex"
export type { HeadingProps } from "./components/Heading"
export type { PieItem } from "./components/Pie"
export type { ResultItem } from "./components/ResultList"
export type { SelectItem } from "./components/Select"
export type { TextProps } from "./components/Text"

// hooks
export { useIntersector } from "./hooks/useIntersector"

// types
export type { HeliosColors } from "./types/colors"
export type { HeliosOnClickType, HeliosChildrenType } from "./types/components"
export type { HeliosScale, HeliosRadius } from "./types/scale"
export type { HeliosThemes } from "./types/themes"
export type { HeliosIntentionType, HeliosEmphasisType } from "./types/intentions"
export type { HeliosIconType } from "./types/icons"
export type { HeliosComponentMeta } from "./types/meta"

// constants
export { INTENTION_COLOR_MAP, INTENT_DESCRIPTIONS } from "./constants/intentions"

// meta
import type { HeliosScale } from "./types/scale"
import type { HeliosColors } from "./types/colors"
import type { HeliosIntentionType, HeliosEmphasisType } from "./types/intentions"

export const EMPHASES: Array<HeliosEmphasisType> = ["primary", "secondary", "tertiary"]
export const INTENTIONS: Array<HeliosIntentionType> = [
	"advise",
	"automation",
	"confirmation",
	"danger",
	"highlight",
	"question",
	"silent",
	"success",
	"warning",
]

export { ICONS } from "./types/icons"

export const SCALE: Array<HeliosScale> = [
	1, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30, 32, 48, 64, 80, 96,
] as const

export const COLORS: Array<HeliosColors> = [
	"aqua",
	"blue",
	"gray",
	"green",
	"orange",
	"pink",
	"purple",
	"red",
	"yellow",
]

export const COMPONENTS = ["Alert", "Breadcrumb", "Button", "ButtonGroup", "Checkbox", "Column", "Flex"] as const

export const HOOKS = ["useIntersector"] as const
