"use client"

import { useEffect, useRef, type FC } from "react"
import styles from "./Dialog.module.css"
import Flex from "../Flex"
import Button from "../Button"
import ButtonGroup from "../ButtonGroup"
import { getClasses } from "@heliosgraphics/utils/classnames"
import Heading from "../Heading"
// import { animated } from "@react-spring/web"
import type { DialogProps } from "./Dialog.types"

const ATTRIBUTE_SCROLL = "data-scroll" as const
const POSITION_FIXED_CLASS = "fixed" as const

const Dialog: FC<DialogProps> = ({ title, children, onClick, isOpen, isCentered, onClose }) => {
	return <div>Dial</div>
}

export default Dialog
