import React from "react"
import Separator from "../../../Separator"
import styles from "./LayoutLeftItem.module.css"
import type { LayoutSeparatorProps } from "./LayoutSeparator.types"

const LayoutSeparator: React.FC<LayoutSeparatorProps> = () => {
	return <Separator className="my-4" isLight={true} />
}

export default LayoutSeparator
