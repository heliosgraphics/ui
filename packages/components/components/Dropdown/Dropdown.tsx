"use client"

import { useEffect, useState, useRef, Children as ReactChildren, cloneElement, type FC } from "react"
import { ANIMATION_FAST } from "../../constants/animations"
import { getClasses } from "@heliosgraphics/utils/classnames"
import { ResultList } from "../shared/ResultList/ResultList"
import styles from "./Dropdown.module.css"
import type { MouseEvent } from "react"
import type { DropdownProps } from "./Dropdown.types"

export const Dropdown: FC<DropdownProps> = ({ isHidden, children, items, isDisabled, position = "right" }) => {
	const [isVisible, setVisible] = useState<boolean>(Boolean(isHidden))
	const [isHovering, setHovering] = useState<boolean>(false)
	const stateRef = useRef<boolean>(false)

	useEffect(() => {
		setVisible(false)
	}, [isHidden])

	if (isDisabled) {
		return children
	}

	stateRef.current = isHovering

	const dropdownClasses: string = getClasses(styles.dropdown, {
		[styles.dropdownLeft]: position === "left",
		[styles.dropdownRight]: position === "right" || !position,
	})

	const mouseEnter = (_event: MouseEvent<HTMLDivElement>): void => setHovering(true)
	const mouseLeave = (_event: MouseEvent<HTMLDivElement>) => {
		setHovering(false)

		return setTimeout(() => !stateRef.current && setVisible(false), ANIMATION_FAST)
	}

	const renderChildren = ReactChildren.map(children, (child: React.ReactElement) => {
		const caretProps = {
			...(child?.props?.icon === "caret-down" && isVisible && { icon: "caret-up" }),
			...(child?.props?.icon === "chevron-down" && isVisible && { icon: "chevron-up" }),
		}

		return cloneElement(child, { ...child.props, ...caretProps })
	})

	const onSetVisible = () => setVisible(!isVisible)

	const navClasses: string = getClasses(styles.dropdown__nav, {
		[styles.dropdown__navActive]: isVisible,
	})

	return (
		<div className={dropdownClasses} onMouseEnter={mouseEnter} onMouseLeave={mouseLeave}>
			<div onClick={onSetVisible}>{renderChildren}</div>
			<nav className={navClasses}>
				<ResultList items={items} />
			</nav>
		</div>
	)
}
