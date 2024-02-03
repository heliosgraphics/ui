// components
export { default as Alert } from "./components/Alert"
export { default as Breadcrumb } from "./components/Breadcrumb"
export { default as Button } from "./components/Button"
export { default as ButtonGroup } from "./components/ButtonGroup"
export { default as Checkbox } from "./components/Checkbox"
export { default as Column } from "./components/Column"
export { default as Confirm } from "./components/Confirm"
export { default as Details } from "./components/Details"
export { default as Dialog } from "./components/Dialog"
export { default as Donut } from "./components/Donut"
export { default as Dot } from "./components/Dot"
export { default as Dropdown } from "./components/Dropdown"
export { default as Error } from "./components/Error"
export { default as Flex } from "./components/Flex"
export { default as Form } from "./components/Form"
export { default as Grid } from "./components/Grid"
export { default as Heading } from "./components/Heading"
export { default as Icon } from "./components/Icon"
export { default as Input } from "./components/Input"
export { default as Layout } from "./components/Layout"
export { default as Loading } from "./components/Loading"
export { default as Markdown } from "./components/Markdown"
export { default as Masonry } from "./components/Masonry"
export { default as Overlay } from "./components/Overlay"
export { default as Pie } from "./components/Pie"
export { default as Pill } from "./components/Pill"
export { default as Progress } from "./components/Progress"
export { default as Radio } from "./components/Radio"
export { default as ResultList } from "./components/ResultList"
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
export { default as Upload } from "./components/Upload"
export type { BreadCrumbItem } from "./components/Breadcrumb"
export type { ButtonGroupProps } from './components/ButtonGroup'
export type { ButtonProps } from './components/Button'
export type { PieItem } from './components/Pie'
export type { ResultItem } from './components/ResultList'
export type { SelectItem } from './components/Select'
export type { TextProps } from './components/Text'

// hooks
export { useIntersector } from "./hooks/useIntersector"

// types
export type { HeliosIntentionType, HeliosEmphasisType } from "./types/intentions"

// meta
import type { HeliosIntentionType } from './types/intentions'

export const INTENTIONS: Array<HeliosIntentionType> = [
	"advise",
	"automation",
	"confirmation",
	"error",
	"highlight",
	"question",
	"silent",
	"success",
	"warning"
]
export const COMPONENTS = [
	"Alert",
	"Breadcrumb",
	"Button",
	"ButtonGroup",
	"Category",
	"Checkbox",
	"Column",
	"Confirm",
	"Details",
	"Dialog",
	"Donut",
	"Dot",
	"Dropdown",
	"Error",
	"Flex",
	"Form",
	"Grid",
	"Heading",
	"Icon",
	"Input",
	"Layout",
	"Loading",
	"Markdown",
	"Masonry",
	"Overlay",
	"Pie",
	"Pill",
	"Progress",
	"Radio",
	"ResultList",
	"Setup",
	"Select",
	"Separator",
	"Shimmer",
	"Slider",
	"Spacer",
	"Table",
	"Tabs",
	"Text",
	"Textarea",
	"ThemeSwitcher",
	"Tile",
	"Timestamp",
	"Toggle",
	"Upload",
] as const

// meta
export const HOOKS = ["useIntersector"] as const
