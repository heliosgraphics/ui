import type { ChangeEvent } from "react"
import type { HeliosOnClickType } from "../.."

export interface MenuFilterProps {
	onChange: (event: ChangeEvent<HTMLInputElement>) => void
	onClear?: HeliosOnClickType
	value: string
}
