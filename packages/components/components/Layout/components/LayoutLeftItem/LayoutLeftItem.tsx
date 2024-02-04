"use client"

import classNames from "@sindresorhus/class-names"
import Icon from "../../../Icon"
import styles from "./LayoutLeftItem.module.css"
import type { FC } from "react"
import type { LayoutLeftItemProps } from "./LayoutLeftItem.types"

const STEP_SIZE = 16 as const

const LayoutLeftItem: FC<LayoutLeftItemProps> = ({
	pathName,
	onClick,
	icon,
	step,
	href,
	text,
}) => {
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
		<a
			href={href}
			className={layoutLeftItemClasses}
			style={leftItemStyle}
			onClick={onClick}
		>
			{icon && <Icon size={18} name={icon} />}
			<span>{text}</span>
		</a>
	)
}

export default LayoutLeftItem
