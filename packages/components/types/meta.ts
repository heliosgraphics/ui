interface HeliosAttributeItem {
	default?: number | string
	description?: string
	isOptional?: boolean
	type: string
}

export type HeliosComponentStatusType = "experimental" | "nominal" | "stable" | "internal"
export type HeliosComponentCategoryType = "core" | "layout" | "content" | "pattern"

export interface Pattern {
	id: string
	description: string
	content: string
}

export type HeliosAttributeMeta<T> = Record<keyof T, HeliosAttributeItem> & {
	_extends?: Array<string>
	_status: HeliosComponentStatusType
	_type: HeliosComponentCategoryType
	_patterns: Array<Pattern>
}
