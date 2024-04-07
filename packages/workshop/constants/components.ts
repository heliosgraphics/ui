import { COMPONENTS } from "@heliosgraphics/ui"
import {
	type HeliosComponentStatusType,
	type HeliosComponentCategoryType,
	type HeliosColors,
	type HeliosIconType,
} from "@heliosgraphics/ui"

export const STATUS_COLORS: Record<HeliosComponentStatusType, HeliosColors> = {
	experimental: "pink",
	nominal: "gray",
	stable: "green",
}

export const STATUS_ICONS: Record<HeliosComponentStatusType, HeliosIconType> = {
	experimental: "bolt",
	nominal: "bolt",
	stable: "check",
}

export const STATUS_NAMES: Record<HeliosComponentStatusType, string> = {
	experimental: "Experimental",
	nominal: "Nominal",
	stable: "Stable",
}

export const TYPE_NAMES: Record<HeliosComponentCategoryType, string> = {
	content: "Content",
	pattern: "Pattern",
	core: "Core",
	layout: "Layout",
}

interface StatusReturnType {
	color: HeliosColors
	icon: HeliosIconType
	name: string
	status: HeliosComponentStatusType
}

export const getStatus = (component: string = "Example"): StatusReturnType => {
	const { _status } = COMPONENTS[component]
	const color = STATUS_COLORS[_status]
	const icon = STATUS_ICONS[_status]
	const name = STATUS_NAMES[_status]

	return {
		status: _status,
		color,
		icon,
		name,
	}
}
