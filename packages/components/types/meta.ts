interface HeliosAttributeItem {
	default?: number | string
	description?: string
	isOptional?: boolean
	type: string
}

export type HeliosAttributeMeta<T> = Record<keyof T, HeliosAttributeItem> & {
	_extends?: Array<string>
}

export type HeliosComponentStatusType = "experimental" | "nominal" | "stable"
export type HeliosComponentCategoryType = "core" | "layout" | "content" | "pattern"

export interface HeliosComponentItem {
	status: HeliosComponentStatusType
	type: HeliosComponentCategoryType
}
