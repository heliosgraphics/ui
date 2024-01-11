import React from 'react'

export interface ToggleProps {
	id?: string
	isChecked?: boolean
	isSmall?: boolean
	isDisabled?: boolean
	label: string
	onChange: (event?: React.ChangeEvent) => void
}
