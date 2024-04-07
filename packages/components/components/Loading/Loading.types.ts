import type { HeliosAttributeMeta } from "../.."

export interface LoadingProps {
	className?: string
	size: 10 | 20 | 40
}

export const meta: HeliosAttributeMeta<LoadingProps> = {
	_status: "stable",
	_type: "core",
	className: { type: "string", isOptional: true },
	size: { type: "10 | 20 | 40" },
}
