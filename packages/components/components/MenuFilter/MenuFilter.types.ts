import type { ChangeEvent } from "react"

export interface MenuFilterProps {
	onChange: (event: ChangeEvent<HTMLInputElement>) => void
	value: string
}
