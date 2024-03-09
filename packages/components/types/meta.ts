interface HeliosComponentItem {
	description?: string
	isOptional?: boolean
	type: string
}

export type HeliosComponentMeta<T> = Record<keyof T, HeliosComponentItem>
