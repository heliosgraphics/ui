import Separator from "../../../Separator"
import styles from "./LayoutLeftItem.module.css"
import type { FC } from "react"
import type { LayoutSeparatorProps } from "./LayoutSeparator.types"

const LayoutSeparator: FC<LayoutSeparatorProps> = () => {
	return <Separator className="my-4" isLight={true} />
}

export default LayoutSeparator
