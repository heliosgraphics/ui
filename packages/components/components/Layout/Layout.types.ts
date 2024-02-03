import type { FC, ReactNode } from "react"
import type { LayoutContentProps } from "./components/LayoutContent/LayoutContent.types"
import type { LayoutLeftProps } from "./components/LayoutLeft/LayoutLeft.types"
import type { LayoutLeftItemProps } from "./components/LayoutLeftItem/LayoutLeftItem.types"
import type { LayoutTopProps } from "./components/LayoutTop/LayoutTop.types"
import type { LayoutSeparatorProps } from "./components/LayoutSeparator/LayoutSeparator.types"
import type { LayoutLeftItemGroupProps } from "./components/LayoutLeftItemGroup/LayoutLeftItemGroup.types"

export interface LayoutProps {
	children: ReactNode
}

export interface FCwithContent<T> extends FC<T> {
	Top: FC<LayoutTopProps>
	LeftItem: FC<LayoutLeftItemProps>
	LeftItemGroup: FC<LayoutLeftItemGroupProps>
	Left: FC<LayoutLeftProps>
	Separator: FC<LayoutSeparatorProps>
	Content: FC<LayoutContentProps>
}
