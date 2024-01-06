import React, {
	useEffect,
	useState,
	useRef,
	Children,
	cloneElement,
} from "react"
import { LOADING_FAST_DELAY } from "../constants/animations"
import classNames from "@sindresorhus/class-names"
import ResultList from "../ResultList"
import styles from "./Dropdown.module.css"
import type { DropdownProps } from "./Dropdown.types"

const Dropdown: React.FC<DropdownProps> = ({
	isHidden,
	children,
	items,
	isDisabled,
	position = "right",
}) => {
	const [isVisible, setVisible] = useState<boolean>(Boolean(isHidden))
	const [isHovering, setHovering] = useState<boolean>(false)
	const stateRef = useRef<boolean>(false)

	// Resets from outside
	useEffect(() => {
		setVisible(false)
	}, [isHidden])

	if (isDisabled) {
		return children
	}

	// NOTE @chris We need to keep state in a React.ref to be able to access the non-stale state in setTimeout/setInterval.
	stateRef.current = isHovering

	const dropdownClasses: string = classNames(styles.dropdown, {
		[styles.dropdownLeft]: position === "left",
		[styles.dropdownRight]: position === "right" || !position,
	})

	const mouseEnter = (_event: React.MouseEvent<HTMLDivElement>): void =>
		setHovering(true)
	const mouseLeave = (_event: React.MouseEvent<HTMLDivElement>) => {
		setHovering(false)

		return setTimeout(
			() => !stateRef.current && setVisible(false),
			LOADING_FAST_DELAY,
		)
	}

	// Make any icon respond to visible state
	const renderChildren = Children.map(children, (child) => {
		const caretProps = {
			...(child.props.icon === "caret-down" &&
				isVisible && { icon: "caret-up" }),
			...(child.props.icon === "chevron-down" &&
				isVisible && { icon: "chevron-up" }),
		}

		return cloneElement(child, { ...child.props, ...caretProps })
	})

	const onSetVisible = () => setVisible(!isVisible)

	const navClasses: string = classNames(styles.dropdown__nav, {
		[styles.dropdown__navActive]: isVisible,
	})

	return (
		<div
			className={dropdownClasses}
			onMouseEnter={mouseEnter}
			onMouseLeave={mouseLeave}
		>
			<div onClick={onSetVisible}>{renderChildren}</div>
			<nav className={navClasses}>
				<ResultList items={items} />
			</nav>
		</div>
	)
}

export default Dropdown
