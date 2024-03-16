import styles from "./Overlay.module.css"

const Overlay = (props) => {
	if (!props.isVisible) return null

	const hideFunction = (event) => {
		event.preventDefault()
		event.stopPropagation()

		return props.onClose && props.onClose()
	}

	return (
		<section className={styles.overlay}>
			<div className={styles.overlay__content}>{props.children}</div>
			<div className={styles.overlay__layer} onClick={hideFunction} />
		</section>
	)
}

export { Overlay }
