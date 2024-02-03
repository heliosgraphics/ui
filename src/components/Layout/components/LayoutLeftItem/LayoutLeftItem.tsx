"use client"

import { usePathname } from "next/navigation"
import classNames from "@sindresorhus/class-names"
import Icon from "../../../Icon"
import Link from "next/link"
import styles from "./LayoutLeftItem.module.css"
import type { FC } from "react"
import type { LayoutLeftItemProps } from "./LayoutLeftItem.types"

const STEP_SIZE = 16 as const

const LayoutLeftItem: FC<LayoutLeftItemProps> = ({
	icon,
	step,
	href,
	text,
}) => {
	const pathName = usePathname()
	const isActive: boolean = pathName === href

	const leftMargin: number = (step ?? 0) * STEP_SIZE
	const leftItemStyle = {
		marginLeft: `${leftMargin}px`,
		width: `calc(100% - ${leftMargin}px)`,
	}

	const layoutLeftItemClasses: string = classNames(
		styles.layoutLeftItem,
		"flex gap-2 flex-y-center fw-medium small",
		{
			[styles.layoutLeftItemActive]: isActive,
			[styles.layoutLeftItemNoIcon]: !icon,
		},
	)

	return (
		<Link href={href} className={layoutLeftItemClasses} style={leftItemStyle}>
			{icon && <Icon size={18} name={icon} />}
			<span>{text}</span>
		</Link>
	)
}

export default LayoutLeftItem
