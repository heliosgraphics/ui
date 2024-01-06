import React from "react"
import type { LayoutContentProps } from "./components/LayoutContent/LayoutContent.types"
import type { LayoutLeftProps } from "./components/LayoutLeft/LayoutLeft.types"
import type { LayoutLeftItemProps } from "./components/LayoutLeftItem/LayoutLeftItem.types"
import type { LayoutTopProps } from "./components/LayoutTop/LayoutTop.types"
import type { LayoutSeparatorProps } from "./components/LayoutSeparator/LayoutSeparator.types"
import type { LayoutLeftItemGroupProps } from "./components/LayoutLeftItemGroup/LayoutLeftItemGroup.types"

export interface LayoutProps {
	children: React.ReactNode
}

export interface FCwithContent<T> extends React.FC<T> {
	Top: React.FC<LayoutTopProps>
	LeftItem: React.FC<LayoutLeftItemProps>
	LeftItemGroup: React.FC<LayoutLeftItemGroupProps>
	Left: React.FC<LayoutLeftProps>
	Separator: React.FC<LayoutSeparatorProps>
	Content: React.FC<LayoutContentProps>
}
