import React from "react"

export interface TabsProps {
	active?: number
	items: Array<string>
	sections: Array<React.ReactNode>
}
