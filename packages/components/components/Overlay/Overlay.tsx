import styles from "./Overlay.module.css"
import type { FC } from "react"
import type { OverlayProps } from "./Overlay.types"

export const Overlay: FC<OverlayProps> = ({ onClose, children, isVisible }) => {
	if (!isVisible) return null

	const hideFunction = (event: any) => {
		event.preventDefault()
		event.stopPropagation()

		return onClose?.()
	}

	return (
		<section className={styles.overlay}>
			<div className={styles.overlay__content}>{children}</div>
			<div className={styles.overlay__layer} onClick={hideFunction} />
		</section>
	)
}
